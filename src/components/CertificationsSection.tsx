import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Data Science ",
      issuer: "365 Careers",
      date: "2025",
      skills: ["Scikit- Learn", "Tensor Flow", "Staistics", "Machine Leaning", "Pandas"],
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-45a9ccbb-70eb-41e6-894e-b603bb564131.pdf",
      description: "Validates the concept required for Data science like visualizations, statistical & predictive analysis."
    },
    {
      title: "Programming with Python",
      issuer: "HarvardX",
      date: "2024",
      
      skills: ["Python"],
      link: "https://cs50.harvard.edu/certificates/2e8007f6-308b-4b73-9942-a652e19789ff",
      description: "Experticed in python programming and completed all assignments successfully"
    },
    
    {
      title: "Ai-first Software engineering",
      issuer: "Infosys",
      date: "2024",
      
      skills: ["Prompt Engineering"],
      link: "https://drive.google.com/file/d/1q9F73WVMABomzBUArJqjMSLQV5EgGsTH/view?usp=sharing",
      description: "Using AI in work for developing a project."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications demonstrating expertise in cloud platforms, 
            machine learning, and data science methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="portfolio-card group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {cert.date}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-primary font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
          
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Certificate
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Committed to continuous learning and staying current with evolving technologies
          </p>
          <div className="flex justify-center space-x-4">
            <Badge className="bg-gradient-to-r from-primary to-accent text-white">
               Professional Certifications
            </Badge>
            <Badge variant="outline">
              40+ Hours of Continuing Education Annually
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;