import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import project1Image from '@/assets/project-1.jpg';
import project2Image from '@/assets/project-2.jpg';
import grain from '@/assets/grain.jpg';
import skin from '@/assets/skin.jpg';
import loan from '@/assets/loan.png';
import churn from '@/assets/churn.png';
import hr from '@/assets/hr.jpeg';
import house from '@/assets/house.jpeg';



const ProjectsSection = () => {
  const projects = [
    {
      title: " GrainPalette - Rice Type Classification Using Deep Learning",
      description: "Built a machine learning model to classify the rice with 97% accuracy . This app supports classification of Arboriio, Basmati, Ipsala, Jasmine, and Karacadag rice type.",
      image: grain,
      technologies: ["Python", "Scikit-learn","Flask", "Tensor Flow", "Keras"],
      github: "https://github.com/GowthamiNanapollu/Grain_classification",
      demo: "https://www.youtube.com/watch?v=GjVbCcT7kRY",
      
    },

    {
      title: "Skin Cancer Prediction",
      description: "I developed a deep learning-based model for skin cancer prediction using Convolutional Neural Networks (CNNs). The workflow includes image preprocessing, model training, and performance evaluation on a labeled dataset. The model effectively classifies skin lesions as benign or malignant with promising accuracy.",
      image: skin,
      technologies: ["Python", "OR-Tools", "Pandas", "Dash", "PostgreSQL", "Docker"],
      github: "https://github.com/GowthamiNanapollu/Skin-Cancer-prediction/tree/master",
      demo: "https://github.com/GowthamiNanapollu/Skin-Cancer-prediction/tree/master",
      impact: null
    },

    {
      title: "Loan Approval Prediction",
      description: "Developed a binary classification model to predict loan approval status using logistic regression.",
      image: loan,
      technologies: ["Python", "Pandas", "Numpy", "Matplot", "Seaborn", "Scikit-Learn"],
      github: "https://kaggle.com/code/gowthaminanapollu/loan-approval-ml-model",
      demo: "https://kaggle.com/code/gowthaminanapollu/loan-approval-ml-model",
      impact: null
    },
    {
      title: "Customer Churn Prediction",
      description: "Developed a deep learning model to predict customer behaviour related to audiobook repurchases. The goal was to identify users with high intent to rebuy, enabling smarter targeting for marketing and advertising campaigns.",
      image: churn,
      technologies: ["Python", "Pandas", "Numpy", "Matplot", "Seaborn", "Tensor Flow", "Keras"],
      github: "https://github.com/GowthamiNanapollu/ml",
      demo: "https://github.com/GowthamiNanapollu/ml",
      impact: null
    },
    {
      title: "Predicting Employee Attrition",
      description: "Employee attrition costs businesses thousands of dollars per lost employee. Organizations struggle to retain talent, making predictive analytics a game-changer for HR decision-making.",
      image: hr,
      technologies:  ["Python", "Pandas", "Numpy", "Matplot", "Seaborn", "Scikit-Learn"],
      github: "https://github.com/GowthamiNanapollu/Data-Science-Projects/tree/main/HR_analytics",
      demo:  "https://github.com/GowthamiNanapollu/Data-Science-Projects/tree/main/HR_analytics",
      impact:null
    },
    {
      title: "House price prediction",
      description: "Developed a Linear regression model which will predicts the Price of the house in the Banglore, using the featurs sizes, square feet, number of bathrooms, number of balconies, Area type. The model have 65% accuracy.",
      image: house,
      technologies: ["Python", "Pandas", "Numpy", "Matplot", "Seaborn", "Scikit-Learn"],
      github: "https://github.com/GowthamiNanapollu/House-Price-prediction",
      demo: "https://github.com/GowthamiNanapollu/House-Price-prediction",
      impact: null
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of data science projects demonstrating end-to-end solution development 
            and real-world business impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card overflow-hidden group">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
                  )}
                </div>
                
                
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;