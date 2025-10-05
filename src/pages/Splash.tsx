import { Shield, ArrowRight, Heart, Calendar, Users, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroVaccination from "@/assets/hero-vaccination.png";

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-6 overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 text-primary/10 animate-float">
        <Shield className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 right-10 text-success/10 animate-float" style={{ animationDelay: '1s' }}>
        <Heart className="w-24 h-24" />
      </div>
      <div className="absolute top-40 right-20 text-accent/10 animate-float" style={{ animationDelay: '2s' }}>
        <Syringe className="w-20 h-20" />
      </div>

      <div className="max-w-7xl mx-auto min-h-screen flex items-center py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full z-10">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            {/* Logo and branding */}
            <div className="space-y-4 animate-slide-up">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-xl flex items-center justify-center">
                  <Shield className="w-9 h-9 text-primary-foreground" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  VacciTrack
                </h1>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Stay on track,<br />
                <span className="text-primary">protect your child's health</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Smart vaccination tracking, personalized reminders, and comprehensive health profiles for your little ones
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur p-4 rounded-2xl border border-border/50 hover:shadow-lg transition-shadow">
                <Syringe className="w-8 h-8 text-primary mb-2" />
                <h3 className="font-semibold text-sm mb-1">Smart Vaccines</h3>
                <p className="text-xs text-muted-foreground">Track every dose</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur p-4 rounded-2xl border border-border/50 hover:shadow-lg transition-shadow">
                <Calendar className="w-8 h-8 text-accent mb-2" />
                <h3 className="font-semibold text-sm mb-1">Smart Reminders</h3>
                <p className="text-xs text-muted-foreground">Never miss a date</p>
              </div>
              
              <div className="bg-card/50 backdrop-blur p-4 rounded-2xl border border-border/50 hover:shadow-lg transition-shadow">
                <Heart className="w-8 h-8 text-success mb-2" />
                <h3 className="font-semibold text-sm mb-1">Complete Care</h3>
                <p className="text-xs text-muted-foreground">Growth & wellness</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
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

            {/* Stats */}
            <div className="flex gap-8 justify-center lg:justify-start pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">Vaccines Tracked</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-success">98%</div>
                <div className="text-xs text-muted-foreground">On-Time Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-accent">5K+</div>
                <div className="text-xs text-muted-foreground">Happy Families</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in lg:block" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroVaccination} 
                alt="Parent and child with vaccination elements"
                className="w-full h-auto object-cover"
              />
              {/* Floating Vaccine Badge */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-success/90 backdrop-blur flex items-center justify-center shadow-xl animate-float">
                <Syringe className="w-8 h-8 text-white" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-card/95 backdrop-blur border border-border/50 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Next Vaccine</div>
                    <div className="text-xs text-muted-foreground">In 3 days</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
