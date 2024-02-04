import boat from './icons/boat.png';
import brain from './icons/brain.png';
import builder from './icons/builder.png';
import cloud from './icons/cloud.png';
import deals from './icons/deals.png';
import epi from './icons/epi.svg';
import fight from './icons/fight.png';
import js from './icons/js.svg';
import knot from './icons/knot.png';
import miro from './icons/miro.svg';
import midjourney from './icons/midjourney.svg';
import net from './icons/net.svg';
import puzzle from './icons/puzzle.png';
import shield from './icons/shield.png';
import tools from './icons/tools.png';
import sharpshooter from './icons/sharpshooter.png';
import figma from './icons/figma.svg';
import WCAG from './icons/WCAG.png';

export type CardData = {
  id: string;
  name: string;
  image: string;
  stats: {
    exp: number;
    level: levelTypes;
    type: employeeType;
  };
  skills: skillsTypes[];
  title: string;
  description: string;
  traits: string[];
};

export enum levelTypes {
  CEO = 5,
  managmentgroup = 4,
  employee = 3,
}

export enum skillsTypes {
  js = 1,
  net = 2,
  cloud = 3,
  figma = 4,
  midjourney = 5,
  knot = 6,
  boat = 7,
  puzzle = 8,
  shield = 9,
  brain = 10,
  deals = 11,
  miro = 12,
  tools = 13,
  fight = 14,
  builder = 15,
  sharpshooter = 16,
  epi = 17,
  WCAG = 18,
}

export const skillsMap = {
  js: js,
  net: net,
  cloud: cloud,
  figma: figma,
  midjourney: midjourney,
  knot: knot,
  boat: boat,
  puzzle: puzzle,
  shield: shield,
  brain: brain,
  deals: deals,
  miro: miro,
  tools: tools,
  fight: fight,
  builder: builder,
  sharpshooter: sharpshooter,
  epi: epi,
  WCAG: WCAG,
};

export enum employeeType {
  developer = 1,
  designer = 2,
  projectManager = 3,
}

//improvement

/*export type Skill =
  | 'js'
  | 'net'
  | 'cloud'
  | 'figma'
  | 'midjourney'
  | 'knot'
  | 'boat'
  | 'puzzle'
  | 'shield'
  | 'brain'
  | 'deals'
  | 'miro'
  | 'tools'
  | 'fight'
  | 'builder'
  | 'sharpshooter'
  | 'epi'
  | 'WCAG';
*/
