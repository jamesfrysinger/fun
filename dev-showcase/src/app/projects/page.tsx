import { Card, CardContent } from "@/components/ui/card";
import { projects } from "../lib/projects";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-2 text-sm text-slate-600">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-slate-200 text-slate-800 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-x-2">
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  className="underline text-blue-600"
                >
                  Code
                </Link>
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="underline text-blue-600"
                  >
                    Live
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default ProjectsPage;
