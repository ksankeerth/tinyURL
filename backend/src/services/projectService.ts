import { Project } from '../models/index.js'
import prisma from '../prisma_client.js';


export const createProject = async (projectDto: Omit<Project, 'id'>): Promise<Project | never> => {
  const existingProject = await getProjectByOwnerAndName(projectDto.owner, projectDto.name);
  if (existingProject) {
    throw new Error("Project already exist!")
  }
  const createdProject = await prisma.project.create({data: projectDto});
  return createdProject;
}

export const getProjectsByOwner = async (owner: number): Promise<Project[]> => {
  const projects = await prisma.project.findMany({where : {
    owner: owner
  }});
  return projects
}

export const getProjectById = async (id: number) : Promise<Project> => {
  const project = await prisma.project.findFirst({
    where: {
      id
    }
  });
  return project;
}


const getProjectByOwnerAndName = async (userId: number, name: string): Promise<Project | null> => {
  const project = await prisma.project.findFirst({
    where: {
      AND: [{owner: userId}, {name: name}]
    }
  });
  return project; 
}