import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Siddartha Institute of Science and Technology",
    period: "2022 – 2026",
    location: "Puttur, Andhra Pradesh",
    highlights: [
      "Maintained 9.4 GPA consistently",
      "Led data science projects using Python, Power BI, and SQL",
      
    ]
  },
  {
    degree: "Intermediate (MPC)",
    school: "APMS College",
    period: "2020 – 2022",
    location: "Kothakota, Andhra Pradesh",
    highlights: [
      "Focused on Mathematics, Physics, and Chemistry",
      "Graduated with distinction (80%+)",

    ]
  },
  {
    degree: "Matriculation",
    school: "MJAPBCWRIES Kalikiri",
    period: "2020",
    location: "Kalikiri, Andhra Pradesh",
    highlights: [
      
      "Participated in state-level science exhibitions",
      "Excelled in school-level science fairs and debates"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
         
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="portfolio-card">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className="text-primary text-sm font-medium">
                    {edu.school} • <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {edu.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
