import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth, type AppRole } from "@/hooks/useAuth";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Trash2, CheckCircle2 } from "lucide-react";

interface ProfileRow {
  user_id: string;
  display_name: string | null;
  position: string | null;
  photo_url: string | null;
  is_approved: boolean;
  assigned_level: string | null;
  created_at: string;
}
interface RoleRow {
  user_id: string;
  role: AppRole;
}

const ROLES: AppRole[] = ["admin", "exec", "course_rep"];

const Users = () => {
  const { user: me } = useAuth();
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [roles, setRoles] = useState<RoleRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"pending" | "approved" | "all">("pending");

  useEffect(() => { document.title = "Users — Dashboard"; load(); }, []);

  const load = async () => {
    setLoading(true);
    const [{ data: p }, { data: r }] = await Promise.all([
      supabase.from("profiles").select("user_id, display_name, position, photo_url, is_approved, assigned_level, created_at").order("created_at", { ascending: false }),
      supabase.from("user_roles").select("user_id, role"),
    ]);
    setProfiles((p ?? []) as ProfileRow[]);
    setRoles((r ?? []) as RoleRow[]);
    setLoading(false);
  };

  const userRoles = (uid: string) => roles.filter((r) => r.user_id === uid).map((r) => r.role);

  const addRole = async (uid: string, role: AppRole) => {
    if (userRoles(uid).includes(role)) return;
    const { error } = await supabase.from("user_roles").insert({ user_id: uid, role });
    if (error) toast.error(error.message); else { toast.success(`Granted ${role}`); load(); }
  };

  const removeRole = async (uid: string, role: AppRole) => {
    const { error } = await supabase.from("user_roles").delete().eq("user_id", uid).eq("role", role);
    if (error) toast.error(error.message); else { toast.success(`Removed ${role}`); load(); }
  };

  const setLevel = async (uid: string, level: string) => {
    const { error } = await supabase.from("profiles").update({ assigned_level: level === "none" ? null : (level as any) }).eq("user_id", uid);
    if (error) toast.error(error.message); else { toast.success("Level updated"); load(); }
  };

  const toggleApproved = async (uid: string, value: boolean) => {
    const { error } = await supabase.from("profiles").update({ is_approved: value }).eq("user_id", uid);
    if (error) toast.error(error.message);
    else {
      toast.success(value ? "Approved — now visible publicly" : "Hidden from public page");
      load();
    }
  };

  const visible = profiles.filter((p) => {
    if (filter === "pending") return !p.is_approved;
    if (filter === "approved") return p.is_approved;
    return true;
  });

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-display font-bold">Users & Roles</h1>
          <p className="text-sm text-muted-foreground">Approve members, promote roles, and assign course rep levels.</p>
        </div>
        <div className="inline-flex p-1 bg-secondary rounded-lg text-xs">
          {(["pending", "approved", "all"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-md capitalize ${filter === f ? "bg-background shadow-sm font-medium" : "text-muted-foreground"}`}>
              {f} {f === "pending" && <span className="ml-1 opacity-70">({profiles.filter((p) => !p.is_approved).length})</span>}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-8"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>
      ) : (
        <div className="space-y-2">
          {visible.map((p) => {
            const ur = userRoles(p.user_id);
            const isMe = p.user_id === me?.id;
            return (
              <Card key={p.user_id}>
                <CardContent className="p-3 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    {p.photo_url ? (
                      <img src={p.photo_url} alt="" className="h-10 w-10 rounded-full object-cover" />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-muted" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold">{p.display_name || "(no name)"}</span>
                        {isMe && <Badge variant="outline" className="text-[10px]">You</Badge>}
                        {p.is_approved ? (
                          <Badge className="text-[10px] bg-primary/10 text-primary hover:bg-primary/10"><CheckCircle2 className="h-3 w-3 mr-1" /> Approved</Badge>
                        ) : (
                          <Badge variant="secondary" className="text-[10px]">Pending</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{p.position ?? "No position set"}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Public</span>
                      <Switch checked={p.is_approved} onCheckedChange={(v) => toggleApproved(p.user_id, v)} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap pt-1 border-t">
                    {ur.length === 0 && <span className="text-xs text-muted-foreground">No role</span>}
                    {ur.map((r) => (
                      <Badge key={r} className="text-[10px]">
                        {r}
                        {!(isMe && r === "admin") && (
                          <button className="ml-1 opacity-70 hover:opacity-100" onClick={() => removeRole(p.user_id, r)}>
                            <Trash2 className="h-3 w-3 inline" />
                          </button>
                        )}
                      </Badge>
                    ))}
                    {ROLES.filter((r) => !ur.includes(r)).map((r) => (
                      <Button key={r} size="sm" variant="outline" onClick={() => addRole(p.user_id, r)}>+ {r}</Button>
                    ))}
                    {ur.includes("course_rep") && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">Level:</span>
                        <Select value={p.assigned_level ?? "none"} onValueChange={(v) => setLevel(p.user_id, v)}>
                          <SelectTrigger className="h-8 w-24"><SelectValue /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">—</SelectItem>
                            <SelectItem value="100">100</SelectItem>
                            <SelectItem value="200">200</SelectItem>
                            <SelectItem value="300">300</SelectItem>
                            <SelectItem value="400">400</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
          {visible.length === 0 && <p className="text-sm text-muted-foreground py-6 text-center">No users in this view.</p>}
        </div>
      )}
    </div>
  );
};

export default Users;
