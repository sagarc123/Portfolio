import { SectionWrapper } from '@/components/shared/section-wrapper';
import { Button } from '@/components/ui/button';
import { FileText, Download, Eye } from 'lucide-react';

export function ResumeSection() {
  return (
    <SectionWrapper id="resume">
      <div className="text-center">
        <div className="fade-in-up">
            <div className="flex justify-center mb-8">
                <div className="p-6 border-2 border-primary rounded-full hover:bg-primary/10 transition-colors duration-300 group hover:shadow-[0_0_30px] hover:shadow-primary/50">
                    <FileText className="h-24 w-24 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">My Resume</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Dive deeper into my skills, experience, and qualifications. View or download my resume to see the full picture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="hologram-button text-foreground w-full sm:w-60">
                  <a href="sagarchavan-resume.pdf" download>
                      <Download className="mr-2" />
                      Download Resume
                  </a>
              </Button>
              <Button asChild size="lg" className="hologram-button text-foreground w-full sm:w-60">
                <a href="sagarchavan-resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2" />
                  View Resume
                </a>
              </Button>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
