import { Helmet } from "react-helmet-async";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Settings | Assistant AI</title>
        <meta
          name="description"
          content="Manage your profile, preferences, and account settings on Assistant AI."
        />
        <link rel="canonical" href="/settings" />
      </Helmet>

      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-w-0">
          <Topbar />
          <main className="container py-6 space-y-6">
            <section className="rounded-xl border p-6 bg-card">
              <h1 className="text-2xl md:text-3xl font-semibold">Settings</h1>
              <p className="text-muted-foreground mt-1">
                Update your preferences, profile information, and account settings.
              </p>
            </section>

            {/* Profile Settings */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <Input type="password" placeholder="********" />
                  </div>
                  <Button className="w-full mt-2">Save Changes</Button>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Dark Mode</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Email Notifications</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">SMS Notifications</span>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Account Management */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    You can deactivate or delete your account. This action is irreversible.
                  </p>
                  <Button variant="destructive" className="w-full">Deactivate Account</Button>
                  <Button variant="outline" className="w-full">Delete Account</Button>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Settings;
