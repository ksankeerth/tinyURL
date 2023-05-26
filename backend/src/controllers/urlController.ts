import { Request, Response } from 'express';
import { createUrlMapping, deleteUrlMapping, getUrlMappingByProject, getUrlMappingByShortURL } from '../services/urlService.js';

export const handleGetUrl = async (req: Request, res: Response): Promise<void> => {
  const { path } = req.params;
  if (!path) {
    res.status(404).send({error: "not found"});
    return;
  }
  try {
    const urlMapping = await getUrlMappingByShortURL(path);
    res.status(200).send({data: urlMapping});
  } catch(error) {
    res.status(500).send({error})
  }
}


export const handleDeleteUrl = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body;
  if (!id) {
    res.status(200);
    return;
  }
  const urlMapping = await deleteUrlMapping(id);
  res.status(200).send({ data: urlMapping});
  return;
}

export const handleCreateUrl = async (req: Request, res: Response): Promise<void> => {
  const { projectId, originalUrl, shortUrl } = req.body;

  if (! (projectId && originalUrl && shortUrl)) {
    res.status(400).send({error: "Bad request"});
    return;
  }
  try {
    const createdUrlMapping = await createUrlMapping({
      project_id: projectId,
      original_url: originalUrl,
      short_url: shortUrl,
    });
    res.status(200).send({data: createdUrlMapping});
  } catch (error) {
    res.status(500).send({error});
  }

}

export const handleGetUrls = async (req: Request, res: Response): Promise<void> => {
  const { project } = req.query;
  if (!project) {
    res.status(400).send({error: "Bad request"});
    return;
  }

  try {
    const urls = await getUrlMappingByProject(parseInt(project as string));
    res.status(200).send({data: urls});
    return;
  } catch(error) {
    res.status(500).send({error: error});
  }
}
