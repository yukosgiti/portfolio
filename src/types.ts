export enum Tag {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  MSSQL = "MSSQL",
  DotNetCore = ".NetCore",
  DotNet = ".Net",
  Unity3D = "Unity3D",
}

export enum ProjectType {
  School = "school",
  Work = "work",
  Personal = "personal",
}
export interface Project {
  type: ProjectType;
  date: Date;
  title: string;
  description: string;
  images?: string[];
  tags?: Tag[];
}
