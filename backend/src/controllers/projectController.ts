import { Request, Response } from 'express';
import { createProject, getProjectById, getProjectsByOwner } from '../services/projectService.js';

export const handleCreateProject = async (req: Request, res: Response): Promise<void> => {
  const { name, owner} = req.body;

  if (!(name && owner)) {
    res.status(400).send("Bad reqeust");
    return;
  }
  try {
    const createdProject = await createProject({
      name, owner
    });
    res.status(200).send({data: createdProject});
  } catch(error) {
    res.status(500).send({error})
    return;
  }
}

export const handleGetProject = async (req: Request, res: Response): Promise<void> => {
  const projectId = parseInt(req.params.id);
  if(!projectId) {
    res.status(404).send("not found");
    return;
  }
  const project = await getProjectById(projectId);
  if (project) {
    res.status(200).send({data: project});
    return;
  }
  res.status(404).send({error: "not found"});
}

export const handleDeleteProject = (req: Request, res: Response): void => {
  console.log(req, res);
}

export const handleUpdateProject = (req: Request, res: Response): void => {
  console.log(req, res);
}


export const handleProjects = async (req: Request, res: Response): Promise<void> => {
  // check query params
  const { owner } = req.query;
  if (!owner) {
    res.status(200).send({dat: []});
    return;
  }

  const projects = await getProjectsByOwner(parseInt(owner as string));
  res.status(200).send({data: projects});
  return;
}
