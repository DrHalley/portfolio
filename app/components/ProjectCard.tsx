import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
}

export function ProjectCard({ title, description, github }: ProjectCardProps) {
  return (
    <Card className="bg-gray-900 text-white shadow-lg rounded-xl p-4">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400">{description}</p>
        <Button
          asChild
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white w-full"
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub`da Gör
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
