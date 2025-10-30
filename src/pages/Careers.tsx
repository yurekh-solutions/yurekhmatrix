import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Award, TrendingUp, Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead the development of AI-powered procurement algorithms and machine learning models for supplier matching and price optimization.",
      requirements: [
        "Strong experience in Python, TensorFlow, or PyTorch",
        "Experience with recommendation systems and predictive analytics",
        "Knowledge of construction industry is a plus",
        "Bachelor's/Master's in Computer Science or related field"
      ],
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Science", "API Development"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Build and maintain our web platform using modern technologies. Work on both frontend and backend systems.",
      requirements: [
        "Proficiency in React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/Azure)",
        "Knowledge of database design and optimization",
        "Strong problem-solving skills"
      ],
      skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "REST APIs"]
    },
    {
      id: 3,
      title: "Business Development Manager",
      department: "Sales",
      location: "Delhi, India",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive business growth by building relationships with construction companies and expanding our supplier network.",
      requirements: [
        "Experience in B2B sales, preferably in construction",
        "Strong communication and negotiation skills",
        "Proven track record of meeting sales targets",
        "MBA or equivalent business qualification preferred"
      ],
      skills: ["B2B Sales", "Relationship Management", "Market Analysis", "CRM", "Negotiation"]
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Define product strategy and roadmap for our AI-powered procurement platform. Work closely with engineering and design teams.",
      requirements: [
        "Experience in product management for B2B platforms",
        "Understanding of AI/ML applications in business",
        "Strong analytical and strategic thinking skills",
        "Experience with agile development methodologies"
      ],
      skills: ["Product Strategy", "User Research", "Analytics", "Agile", "Roadmap Planning"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "Manage cloud infrastructure, CI/CD pipelines, and ensure platform reliability and scalability.",
      requirements: [
        "Experience with AWS/Azure cloud services",
        "Proficiency in Docker, Kubernetes, and CI/CD tools",
        "Knowledge of monitoring and logging systems",
        "Experience with Infrastructure as Code"
      ],
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"]
    },
    {
      id: 6,
      title: "UX/UI Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Design intuitive user experiences for our procurement platform. Create wireframes, prototypes, and design systems.",
      requirements: [
        "Proficiency in Figma, Sketch, or similar design tools",
        "Experience designing for B2B platforms",
        "Understanding of user-centered design principles",
        "Portfolio demonstrating strong design skills"
      ],
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Learning opportunities, mentorship programs, and clear career progression paths"
    },
    {
      icon: Zap,
      title: "Flexible Work",
      description: "Hybrid work model, flexible hours, and work-life balance initiatives"
    },
    {
      icon: Award,
      title: "Competitive Package",
      description: "Market-competitive salary, performance bonuses, and equity participation"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborative culture, team events, and opportunity to work with industry experts"
    },
    {
      icon: Briefcase,
      title: "Impact Work",
      description: "Work on cutting-edge AI technology that's transforming the construction industry"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We embrace new technologies and creative solutions to solve complex problems in construction procurement."
    },
    {
      title: "Customer Obsession",
      description: "Every decision we make is driven by our commitment to delivering exceptional value to our customers."
    },
    {
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and building trust through transparency."
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage continuous learning and skill development."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f0ec]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-[80px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 sm:mb-6 bg-primary/10 text-primary border-0 text-xs sm:text-sm">
            Join Our Team
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Build the Future of <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Construction Tech</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12">
            Join MaterialMatrix and help revolutionize construction procurement with AI. Work with passionate people solving real-world problems and making a meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 text-lg">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Our Values</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our values shape our culture and guide how we work together to achieve our mission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border border-primary/10 shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Benefits & Perks</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a supportive work environment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 border border-primary/10 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Open Positions</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Current Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our growing team and help shape the future of construction technology
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-6 sm:p-8 border border-primary/10 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge className="bg-primary/10 text-primary border-0">{job.department}</Badge>
                      <Badge variant="outline" className="border-primary/20">{job.type}</Badge>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <a 
                      href={`mailto:support@materialmatrix.ai?subject=Application for ${job.title} - ${job.location}&body=Dear MaterialMatrix Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position in ${job.department} at your ${job.location} office.%0D%0A%0D%0APlease find my resume attached. I look forward to discussing how my ${job.experience} of experience can contribute to MaterialMatrix.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]%0D%0A[Your Phone Number]%0D%0A[Your Current Location]`}
                    >
                      <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="border-primary/20 text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-0">Application Process</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How to Apply</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our hiring process is designed to be transparent and efficient while ensuring the best fit for both parties
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: "1", title: "Apply Online", description: "Submit your application with resume and cover letter" },
              { step: "2", title: "Initial Screening", description: "HR team reviews your application and conducts initial screening" },
              { step: "3", title: "Technical Interview", description: "Technical discussion with team members and hiring manager" },
              { step: "4", title: "Final Round", description: "Culture fit interview and offer discussion" }
            ].map((process, index) => (
              <Card key={index} className="p-6 text-center border border-primary/10 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 sm:p-12 text-center border border-primary/10 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute to MaterialMatrix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:careers@materialmatrix.ai">
                <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-3 text-lg">
                  <Mail className="mr-2 w-5 h-5" />
                  Send Your Resume
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                  Contact HR Team
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;