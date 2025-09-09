import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { data } from "@/lib/data";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description:
        "We're committed to bridging the skills gap in cloud computing and helping professionals excel in the digital transformation era.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Building a supportive learning community where students and instructors collaborate and grow together.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We stay ahead of industry trends, constantly updating our curriculum with the latest technologies and best practices.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Our programs are designed to accelerate career advancement with practical skills that employers value.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Dr. Cloud</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {data.aboutUs.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {data.aboutUs.description2}
            </p>

            <div className="space-y-4 mb-8">
              {data.aboutUs.keyPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cloud-success rounded-full" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Our Story
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {data.aboutUs.missions.map((value, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-0 shadow-card-hover hover:shadow-float transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
