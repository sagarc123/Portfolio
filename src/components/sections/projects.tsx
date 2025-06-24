import { SectionWrapper } from '@/components/shared/section-wrapper';
import { projects } from '@/lib/constants';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-3xl md:text-5xl font-bold">My Projects</h2>
        <p className="text-muted-foreground mt-2">A selection of my creations and experiments.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <Card 
            key={project.title}
            className="fade-in-up hud-card bg-card/80 backdrop-blur-sm h-full flex flex-col group"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-primary/90 group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                 {project.tags.map(tag => <Badge key={tag} variant="secondary" className="border border-secondary/50 bg-secondary/20">{tag}</Badge>)}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{project.description}</p>
            </CardContent>
            <CardFooter className="flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="w-full transition-colors hover:bg-primary hover:text-primary-foreground hologram-button text-foreground">
                <Link href={project.githubUrl} target="_blank">
                  <Github className="mr-2" /> GitHub
                </Link>
              </Button>
              <Button asChild className="w-full hologram-button text-foreground">
                <Link href={project.liveUrl} target="_blank">
                  <ExternalLink className="mr-2" /> Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
