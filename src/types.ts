export enum Tag {
  HTML = "HTML",
  Python = "Pyhton 3",
  PyTorch = "PyTorch",
  NumPy = "NumPy",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  MSSQL = "MSSQL",
  DotNetCore = ".NetCore",
  DotNet = ".Net",
  Unity3D = "Unity3D",
}

export enum ProjectPlace {
  Bogaizici = "Boğaziçi University",
  ITU = "Istanbul Technical University",
  TetraHGS = "TetraHGS",
}

export enum ProjectType {
  School = "school",
  Work = "work",
  Personal = "personal",
}
export interface Project {
  type: ProjectType;
  date: Date;
  place?: ProjectPlace;
  title: string;
  description: string;
  images?: string[];
  tags?: Tag[];
}
