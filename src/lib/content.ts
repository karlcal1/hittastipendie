import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { ContentData } from '../types/content';

export function getContentData(locale: string): ContentData {
  const contentPath = path.join(process.cwd(), 'src', 'content', locale, 'data.yml');
  
  try {
    const fileContents = fs.readFileSync(contentPath, 'utf8');
    const data = yaml.load(fileContents) as ContentData;
    return data;
  } catch (error) {
    console.error(`Error loading content for locale ${locale}:`, error);
    // Fallback to Swedish content if English fails
    if (locale !== 'sv') {
      return getContentData('sv');
    }
    throw error;
  }
}

export function getAllLocales(): string[] {
  const contentDir = path.join(process.cwd(), 'src', 'content');
  return fs.readdirSync(contentDir).filter(item => {
    return fs.statSync(path.join(contentDir, item)).isDirectory();
  });
}
