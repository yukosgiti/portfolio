export enum Tag {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  MSSQL = "MSSQL",
}

export interface Project {
  date: Date;
  title: string;
  description: string;
  images?: string[];
  tags?: Tag[];
}
