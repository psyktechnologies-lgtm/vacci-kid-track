import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Shield, Baby, Calendar, TrendingUp, LogOut, Plus, Syringe, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import vaccineCardIllustration from "@/assets/vaccine-card-illustration.png";
import childrenHealthTracking from "@/assets/children-health-tracking.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
      if (!session) {
        navigate('/auth');
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Signed out successfully");
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">VacciTrack</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Welcome, {user?.user_metadata?.name || user?.email?.split('@')[0]}!
            </span>
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-2">Your Children's Health Dashboard</h2>
            <p className="text-muted-foreground">Manage vaccination schedules and health profiles in one place</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Children</CardTitle>
                <Baby className="w-4 h-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground mt-1">Add your first child</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Vaccines</CardTitle>
                <Calendar className="w-4 h-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground mt-1">No schedules yet</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/50">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                <TrendingUp className="w-4 h-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">--</div>
                <p className="text-xs text-muted-foreground mt-1">Start tracking</p>
              </CardContent>
            </Card>
          </div>

          {/* Add Child Section with Visual */}
          <div className="grid lg:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-dashed border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 relative">
                  <Baby className="w-10 h-10 text-primary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-success flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                </div>
                <CardTitle>Add Your First Child</CardTitle>
                <CardDescription>
                  Create a health profile to start tracking vaccinations and milestones
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-6">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:scale-105"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Child Profile
                </Button>
              </CardContent>
            </Card>

            {/* Vaccine Card Visual */}
            <Card className="overflow-hidden bg-gradient-to-br from-secondary to-background">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={vaccineCardIllustration} 
                    alt="Vaccination tracking illustration"
                    className="w-full h-full object-contain p-6"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 backdrop-blur border border-border/50 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                        <Syringe className="w-5 h-5 text-success" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">Track every dose</div>
                        <div className="text-xs text-muted-foreground">Complete vaccination history</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feature Cards with Visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Syringe className="w-5 h-5 text-primary" />
                  </div>
                  Vaccination Schedule
                </CardTitle>
                <CardDescription>
                  View and manage upcoming vaccinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-success/5">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-xs">MMR - Completed</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-xs">DTaP - Due in 3 days</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-muted">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground"></div>
                    <span className="text-xs">Polio - Scheduled</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Schedule</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-success" />
                  </div>
                  Growth Tracking
                </CardTitle>
                <CardDescription>
                  Monitor your child's development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Height</span>
                    <span className="font-semibold">75cm</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Weight</span>
                    <span className="font-semibold">9.5kg</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Percentile</span>
                    <span className="font-semibold text-success">75th</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Track Growth</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-accent" />
                  </div>
                  Health Overview
                </CardTitle>
                <CardDescription>
                  Complete wellness tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={childrenHealthTracking} 
                  alt="Children health tracking"
                  className="w-full h-32 object-cover rounded-lg mb-3"
                />
                <Button variant="outline" className="w-full">View Health Profile</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
