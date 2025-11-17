import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, Search, Calendar, Video, Shield, Clock, CheckCircle, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="public" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-accent py-20 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAgMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMnMxMiA1LjM3MyAxMiAxMi01LjM3MyAxMi0xMiAxMi0xMi01LjM3My0xMi0xMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
              <Globe className="h-4 w-4" />
              <span>Aligned with UN SDG 3: Good Health & Well-Being</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
              Access Healthcare Easily & Anytime
            </h1>
            
            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Connect with qualified doctors, book appointments instantly, and receive quality care from anywhere. 
              Making healthcare accessible for everyone.
            </p>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Heart className="mr-2 h-5 w-5" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="w-full border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto">
                  Sign In
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-white/80">Verified Doctors</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-sm text-white/80">Happy Patients</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm text-white/80">Available Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose MediReach?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive healthcare solutions designed with your well-being in mind
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow hover:shadow-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Find Doctors Easily</h3>
                <p className="text-muted-foreground">
                  Search and filter doctors by specialty, location, and availability. Find the perfect match for your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Book Appointments</h3>
                <p className="text-muted-foreground">
                  Schedule appointments instantly with available time slots. Get confirmation in seconds.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Video className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Virtual Consultations</h3>
                <p className="text-muted-foreground">
                  Connect with doctors online from the comfort of your home. Quality care, anywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Verified Professionals</h3>
                <p className="text-muted-foreground">
                  All doctors are verified and licensed. Your health and safety are our top priority.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Clock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">24/7 Availability</h3>
                <p className="text-muted-foreground">
                  Access healthcare services round the clock. Medical help is always just a click away.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Patient-Centered Care</h3>
                <p className="text-muted-foreground">
                  Your health journey matters. Personalized care tailored to your unique needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Getting quality healthcare has never been easier. Just three simple steps.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white">
                    1
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Search</h3>
                <p className="text-muted-foreground">
                  Find the right doctor by specialty, location, or availability
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary-light text-2xl font-bold text-white">
                    2
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Book</h3>
                <p className="text-muted-foreground">
                  Choose a convenient time slot and book your appointment instantly
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary-light text-2xl font-bold text-white">
                    3
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Attend</h3>
                <p className="text-muted-foreground">
                  Meet your doctor online or in-person and get the care you need
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="overflow-hidden border-none shadow-elevated">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-secondary to-secondary-light p-8 text-white md:p-12">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">Supporting UN SDG 3</h2>
                  <p className="text-white/90">
                    Good Health and Well-Being for all at all ages
                  </p>
                </div>
                
                <CardContent className="p-8 md:p-12">
                  <h3 className="mb-4 text-xl font-semibold">Our Mission</h3>
                  <p className="mb-4 text-muted-foreground">
                    MediReach is committed to making quality healthcare accessible to everyone, everywhere. 
                    We're breaking down barriers and ensuring that distance, time, or resources don't stand 
                    between you and the care you deserve.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Reduce healthcare access inequality</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Promote preventive care and early intervention</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-sm">Support universal health coverage</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-white/90">
            Join thousands of patients who trust MediReach for their healthcare needs
          </p>
          <Link to="/register">
            <Button size="lg" variant="secondary">
              Create Your Free Account
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
