import matter from 'gray-matter';
import * as fs from 'fs';
import markdownit from 'markdown-it/lib';
import { OfferMetadata, OfferProps } from './offerTypes';

export const getMatterFile = async (filename: string) => {
  const file = await fs.readFileSync(
    `src/tjenesteomrader/pages/offers/${filename}.md`,
  );

  return matter(file.toString());
};

export const getMarkdownObject = async (name: string): Promise<OfferProps> => {
  const matterFile = await getMatterFile(name);
  const matterData = matterFile.data as OfferMetadata;
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = md.render(matterFile.content);
  return {
    ...matterData,
    fileContents: html,
  };
};
