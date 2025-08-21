import { Bell, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { getGeminiApiKey } from "@/lib/keys";
import { useDispatch } from "react-redux";
import { logout } from "@/redux/auth.slice";
import { useSelector } from "react-redux";
import {jwtDecode} from "jwt-decode";
import { RootState } from "@/redux/store";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";
interface DecodeTokenType{
   id: string,
  studentid: string,
  studentname: string,
  email: string,
  iat: number,
  exp:number
}
export const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const authToken = useSelector((state: RootState) => state.auth.accessToken);
  console.log(authToken)
  useEffect(()=>{
   if(!authToken){
     navigate("/auth")
  }
  },[authToken,navigate])

  const decodeToken:DecodeTokenType = jwtDecode(authToken);
  useEffect(() => {
    const existing = getGeminiApiKey();
    if (existing) setKey(existing);
  }, []);

  const save = () => {
    //setGeminiApiKey(key.trim());
    setOpen(false);
  };
  if(!authToken) return null;
  return (
    <header className="h-16 border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/40 sticky top-0 z-10">
      <div className="container h-full flex items-center justify-between gap-4">
        <div className="flex-1 max-w-2xl">
          {/* <div className="relative">
            <Input placeholder="Search topics, courses..." className="pl-4" />
            <Sparkles className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div> */}
        </div>
        <div className="flex items-center gap-3">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="soft">Gemini API Key</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Connect Gemini</DialogTitle>
                <DialogDescription>Securely store your Gemini API key in this browser.</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">Your key is stored locally in this browser. For production, we recommend using Supabase Edge Functions with secrets.</p>
                <Input
                  placeholder="AIz..."
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  type="password"
                />
                <div className="flex gap-2">
                  <Button onClick={save} className="flex-1" variant="hero">Save</Button>
                  <Button variant="outline" onClick={() => { setKey(""); /* clearGeminiApiKey() */ }}>Clear</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {/* <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="h-5 w-5" />
          </Button> */}
          <Dialog>
            <DialogTrigger asChild>
              <Avatar className="cursor-pointer" aria-label="Open student profile">
                <AvatarFallback>  <User className="w-6 h-6 text-gray-500" /></AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Student Profile</DialogTitle>
                <DialogDescription>Overview of your study progress.</DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 text-primary h-10 w-10 flex items-center justify-center font-medium">  <User className="w-6 h-6 text-gray-500" /></div>
                  <div>
                    <div className="font-medium">{decodeToken.studentname}</div>
                    {/* <p className="text-sm text-muted-foreground">{decodeToken.studentid}</p> */}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg border p-3">
                    <div className="text-muted-foreground">Streak</div>
                    <div className="font-medium">7 days</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-muted-foreground">Total Time</div>
                    <div className="font-medium">18.5 h</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-muted-foreground">Achievements</div>
                    <div className="font-medium">12</div>
                  </div>
                  
                </div>
              
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
