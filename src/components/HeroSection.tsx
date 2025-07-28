import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden scroll-smooth">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(16, 185, 129, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <div className="fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Gowthami Nanapollu
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-blue-100 mb-6">
                Aspiring Data Scientist
              </h2>
              <p className="text-lg text-blue-50 mb-8 max-w-lg">
                Transforming complex data into actionable insights through advanced analytics, 
                machine learning, and data visualization. Passionate about solving real-world 
                problems with data-driven solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="#projects">View My Work</a>
                </Button>
                <a href="/resume.pdf" download>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/gowthami-nanapollu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://github.com/GowthamiNanapollu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:gowthaminanapollu@gmail.com" aria-label="Email">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="slide-up">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <img 
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to About section"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
