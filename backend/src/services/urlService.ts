import prisma from '../prisma_client.js'
import { UrlMapping } from '../models/index.js'

export const createUrlMapping = async (urlDto: Omit<UrlMapping, 'id'>): Promise<UrlMapping | never> => {
  const existingUrlMapping = await prisma.url_mapping.findMany({where: {short_url: urlDto.short_url}});
  if (existingUrlMapping && existingUrlMapping.length) {
    throw new Error("Url mapping alredy exist.");
  }
  const createdUrlMapping = await prisma.url_mapping.create({data: urlDto});
  return createdUrlMapping;
};

export const deleteUrlMapping = async (id: number): Promise<UrlMapping | void> => {
  if (id <= 0) {
    return;
  }
  const deletedUrlMapping = await prisma.url_mapping.findFirst({
    where: { id}
  });
  return deletedUrlMapping;
}

export const getUrlMappingByProject = async (projectId: number): Promise<UrlMapping[] | never> => {
  if (projectId <= 0) {
    throw new Error("Invalid Project.");
  }
  const urlMappings = await prisma.url_mapping.findMany({where: {project_id : projectId}})
  return urlMappings;
}

export const getUrlMappingById = async (id: number): Promise<UrlMapping | never> => {
  if (!id) {
    throw new Error("No UrlMapping found.");
  }

  const urlMapping = await prisma.url_mapping.findFirst({ where: { id } });
  if (!urlMapping) {
    throw new Error("No UrlMapping found.");
  }
  return urlMapping;
}

export const getUrlMappingByShortURL = async (path: string): Promise<UrlMapping | never> => {
  if (!path) {
    throw new Error("No UrlMapping found.")
  }

  const urlMapping = await prisma.url_mapping.findFirst({
    where: { short_url: path }
  });
  if (!urlMapping) {
    throw new Error("No UrlMapping found.");
  }

  return urlMapping;
}
