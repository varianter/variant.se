import matter from 'gray-matter';
import {
  TjenesteomradeMetadata,
  TjenesteomradeProps,
} from './tjenesteomradeTypes';
import * as fs from 'fs';
import markdownit from 'markdown-it/lib';
import { OfferMetadata, OfferProps } from '../offers/utils/offerTypes';

export const getMatterFile = async (filename: string, type: string) => {
  const path =
    type === 'serviceAreas'
      ? `src/tjenesteomrader/pages/${filename}.md`
      : `src/tjenesteomrader/pages/offers/${filename}.md`; // else type is offers
  const file = await fs.readFileSync(path);

  return matter(file.toString());
};

export const getMarkdownObjectServiceAreas = async (
  name: string,
): Promise<TjenesteomradeProps> => {
  const matterFile = await getMatterFile(name, 'serviceAreas');
  const matterData = matterFile.data as TjenesteomradeMetadata;
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = md.render(matterFile.content);
  return {
    ...matterData,
    fileContents: html,
  };
};

export const getMarkdownObjectOffers = async (
  name: string,
): Promise<OfferProps> => {
  const matterFile = await getMatterFile(name, 'offers');
  const matterData = matterFile.data as OfferMetadata;
  const md = markdownit({ linkify: true, html: true, typographer: true });
  const html = md.render(matterFile.content);
  return {
    ...matterData,
    fileContents: html,
  };
};
