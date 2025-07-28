import { BarChart, Brain, Database, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Science",
      description: "Harnessing data to uncover insights, forecast outcomes, and support strategic decisions"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning",
      description: "Developing predictive models and AI solutions for business optimization"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Creating compelling visual stories that drive data-driven decisions"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Analytics Strategy",
      description: "Translating business requirements into actionable analytical frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about data science, transforming complex datasets 
            into strategic business insights and innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With a strong foundation in statistics and computer science, I specialize in 
                extracting meaningful patterns from complex datasets. My expertise spans across 
                machine learning, statistical modeling, and advanced data visualization.
              </p>
              <p>
                I enjoy solving real-world problems through data-driven decision-making and have
                worked on projects involving predictive analytics, exploratory data analysis (EDA),
                and automation. 
              </p>
              <p>
                My goal is to leverage my analytical skills and technical expertise 
                to contribute to impactful solutions in the field of data science and AI.
              </p>
            </div>
          </div>

          {/* Expertise Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="portfolio-card">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
