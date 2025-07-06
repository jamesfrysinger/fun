export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
}[];
