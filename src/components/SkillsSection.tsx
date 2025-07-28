import { Badge } from '@/components/ui/badge';
import { Code, Users, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    'Python', 'R', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow',
    'Machine Learning', 'Visualization', 'Power BI', 'Plotly', 'Seaborn',
    'Jupyter', 'VS Code'
  ];

  const softSkills = [
    'Problem Solving', 'Critical Thinking', 'Communication',
    'Team Leadership', 'Project Management', 'Data Storytelling'
  ];

  const domains = [
    'Financial Modeling', 'Marketing Analytics', 'Risk Management',
    'Customer Segmentation', 'Fraud Detection', 'Predictive Maintenance'
  ];

  const Section = ({ icon: Icon, title, items, color }: {
    icon: any; title: string; items: string[]; color?: string;
  }) => (
    <div className="p-6 border border-border rounded-2xl bg-white/60 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`w-5 h-5 ${color || 'text-primary'}`} />
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <Badge
            key={idx}
            variant="outline"
            className="text-sm px-3 py-1 rounded-full border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground transition"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-muted via-white to-muted/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The stack of tools, traits, and domain knowledge enabling data-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Section icon={Code} title="Technical Skills" items={technicalSkills} />
          <Section icon={Users} title="Soft Skills" items={softSkills} color="text-accent" />
          <Section icon={Briefcase} title="Domain Expertise" items={domains} color="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
