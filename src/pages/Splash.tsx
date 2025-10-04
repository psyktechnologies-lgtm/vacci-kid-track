import { Shield, ArrowRight, Heart, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex flex-col items-center justify-center p-6 overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 text-primary/10 animate-float">
        <Shield className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-success/10 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-24 h-24" />
      </div>
      <div className="absolute top-40 right-20 text-accent/10 animate-float" style={{ animationDelay: '2s' }}>
        <Calendar className="w-20 h-20" />
      </div>

      <div className="max-w-4xl w-full space-y-8 text-center animate-fade-in z-10">
        {/* Logo and branding */}
        <div className="space-y-4 animate-slide-up">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary/70 shadow-2xl animate-float">
            <Shield className="w-14 h-14 text-primary-foreground" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            VacciTrack
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Stay on track, protect your child's health
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card p-6 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Smart Scheduling</h3>
            <p className="text-sm text-muted-foreground">Never miss a vaccination with intelligent reminders</p>
          </div>
          
          <div className="bg-card p-6 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-success" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Health Tracking</h3>
            <p className="text-sm text-muted-foreground">Complete health profile for your little ones</p>
          </div>
          
          <div className="bg-card p-6 rounded-3xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Family Friendly</h3>
            <p className="text-sm text-muted-foreground">Manage multiple children in one place</p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 font-semibold px-8"
            onClick={() => navigate('/auth')}
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/auth?mode=login')}
          >
            Sign In
          </Button>
        </div>

        {/* Trust indicators */}
        <p className="text-sm text-muted-foreground pt-8">
          Trusted by thousands of parents worldwide 🌍
        </p>
      </div>
    </div>
  );
};

export default Splash;
