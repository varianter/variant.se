import { CardData, employeeType, levelTypes, skillsTypes } from 'src/ee/types';

export const data: CardData[] = [
  {
    id: '1',
    name: 'Andreas',
    image:
      'https://s3-alpha-sig.figma.com/img/8ffb/0fc0/7ac36f586bf2b869d8b4fdc006774625?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qZgpJPiCJs~bQe6duONIgzV2MM1mVs-GfguU7V8V3kDAo8ZSN4VxzHQuJinlgKH0Nrm9R6GeLs-JBJ~aFPr5fhwOcpjWEWSW0j7dRkU6JL8bbX~p0sUrJj9328RnVOTfBFNFygae0chxg9PbOi79G~IP87eNXeK9FnAuCC-THxsRTjTBCqalcJ6Dtf3fzYBDxab~-5c~Uv472EF3sEt5ElUSbq~ajBKZ4x0S8g2Ym6D8o9v~IGwCKsAE0zohXNZHdi0hhVBk8eQ-iGPp-HMDYrThdxyn7sIXGM8ek078aCxCT3Hjyz3JSAS6E8B3HjRM6tUtilSfgEuVvInpDcqp~Q__',
    stats: {
      exp: 25,
      level: levelTypes.managmentgroup,
      type: employeeType.developer,
    },
    skills: [skillsTypes.cloud, skillsTypes.net, skillsTypes.js],
    title: 'Kodarnas Indiana Jones',
    description:
      'Några hjärtfrågor Andreas gärna talar mer om är: molnet, .NET och Javascript. En annan stor passion är förändring och hur vi bäst förhåller oss till en ständigt föränderlig omvärld.',
    traits: ['Utveckling', 'Ledarskap', 'Strategi'],
  },
  {
    id: '2',
    name: 'Odd',
    image:
      'https://s3-alpha-sig.figma.com/img/7398/8935/6e2c2ab13c642c8eaaf93d478c1f2d4f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TXeSGCm3aGQxAufwc-5l19jL6WVGnsJqO5e2dA8ftt~CPfI0m5A5W-WzWObmz3vwbtlI94g1RC8hcwLMb-gw5AI7dRDKREOHioFe5gMj00EIrwZ377nlI3kHer5FPU8JEBOtAh-4ckJtMffjupbDCY~9OGJeuliuGTqHECrZkvDu4K3bpMEYwQGIJNiYEUOj4x1pclTFTWZy-zDngsRvU080jqsWFCRWjU8OhJc6vrehwBHfyOYhJzqkiFXL0EpSXf3HtYg1yxWjTuKrO2t15CcDt47auQuesOgB76IYLAH6tqfwpSHciWIj~rX2wSa4iVZlU3S75~kM-A-1fRzeGQ__',
    stats: {
      exp: 23,
      level: levelTypes.CEO,
      type: employeeType.developer,
    },
    skills: [skillsTypes.knot, skillsTypes.boat],
    title: 'Kan kommandere alle skipene',
    description:
      'Odd Morten Sveås er blant våre mest erfarne rådgivere og prosjektledere. Han er på sitt beste når prosjektet er komplekst, når tidsfristene er korte og kravene høye. ',
    traits: ['Utvikling', 'Lederskap', 'Strategi'],
  },
  {
    id: '3',
    name: 'Anders',
    image:
      'https://s3-alpha-sig.figma.com/img/a1b9/5ed3/aee8e907cb0302d94647d6f0aaf8b61a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mD3udtZ-f1-xiLWZsCUWKPgcsV2fpXMJeEoVuhR36XH9YTfiJLmZNc8Dkcko6R~s3SlFV-0C8pLpe6PjjN2K33scWmXQmXFOlHa0bVwYOZAk9I42fZPDzxw4MRTBur2GjPvLzn-DicH7VJq3ZesqiNQ~IzfQSq5Ksim9OEat1mCr7YIV1FJT4-Y-nL2Ss1MPxiFcYG6uHV2obP5TaU1LaxNJUVFXKg1BzMxmcJtOb7RqFs1qXZgceeTRZycXi5tH-1ayr6PU~6inFyMHnnFBxMMTC8pl1hJNdH3UqbergqGwb3RU9FfQEO1Oafk-JfyHDV6mrcmjEZmPpVWog0ni8Q__',
    stats: {
      exp: 25,
      level: levelTypes.CEO,
      type: employeeType.developer,
    },
    skills: [skillsTypes.puzzle, skillsTypes.shield],
    title: 'Den norske mannen av stål',
    description:
      'Med svært god helhetsforståelse leder Anders team og prosesser som gjør at hver enkelt, team og organisasjoner lykkes. Anders evner raskt å sette seg inn i detaljene til prosjekter.',
    traits: ['Utvikling', 'Lederskap', 'Strategi'],
  },
  {
    id: '4',
    name: 'Marco',
    image:
      'https://s3-alpha-sig.figma.com/img/95fa/8d9e/cc2dd80ebe6a2ff22cca0084bcf2cdb6?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPFOWHZni8qkP7lQLeAuY1BZHFshOPYkt8O9IFGSN2Xq73fFPMeTncqgz5pbzZx3xsXVhZKC04jwElEN6al8H5eRd66rVQJKALsLimLPFoLydGuwpSRIy11uU0qFZQobrID1bS9cioz2FV006xFyCtpANLE3Kzc7ejbDa0rkWrydsrcyddjufTT-ZYH2DOzQnQXxpC4Zn82L0rimSiJJ3ZpjUyenxhLCC8b2mMkmzNGzXAFk0P5p4tiK5AL0NxyDteYsz3jM50~iL6KrYZwiTjeNLlFu4QGiUIsCHkGr8twVIyS8Upy8plHEynV-KCxCCtQQ-iBi5ZEks3lWWOlSmA__',
    stats: {
      exp: 25,
      level: levelTypes.managmentgroup,
      type: employeeType.designer,
    },
    skills: [skillsTypes.figma, skillsTypes.midjourney],
    title: 'Generativ AI Paladin',
    description:
      'Marcos erfarenhet inom reklam, marknadsföring, ledarskap och generativ AI gör honom till en idealisk mentor för att driva team och innovation, samt att ge insikter i teknik- och designbranschen.',
    traits: ['Design', 'Ledarskap', 'Strategi'],
  },
  {
    id: '5',
    name: 'David',
    image:
      'https://s3-alpha-sig.figma.com/img/22c9/e8b4/bce266ddf7682091a3298a611463ca81?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lSF7Ao2N0ZO59FCHLukq~NRtJAFusv9T-venxc2WlpRhxETAujCPcZO1CXqB6hjGJKbyqlw-88vTeTX23EloGouHDxjqo~V21P8jh5r7XMAYhZ5hYKeRmOLuvwNUHtZ9ybk~aYDBMnxbzhfVDkaEEYrfNSyNe0VS7XUy7BdGCUVcCS7-v7r~hqSR6104-R4GfsyGRHf0NRAwXsLflTkuL7dup6FwXNS15MtuN3uw4h-jcBNM-oAbjlBheBpwMyt5CF~lGbcP639LuksEYNqStpdAJ9zqg4Ut5EYJOPU~Ok7d4IJqW152ipJRIKUQhVcu3VZSy7x5jSi~mbyjtj~EDw__',
    stats: {
      exp: 24,
      level: levelTypes.CEO,
      type: employeeType.designer,
    },
    skills: [skillsTypes.brain, skillsTypes.deals],
    title: 'Strategisk mastermind',
    description:
      'Prata med David om research, business design och hur man navigerar stora organisationer. Hur man håller workshop med en ledningsgrupp, eller varför inte bygger en stark samarbetskultur i den egna organisationer.',
    traits: ['Design', 'Ledarskap', 'Strategi'],
  },
  {
    id: '6',
    name: 'Alexander',
    image:
      'https://s3-alpha-sig.figma.com/img/9a9f/b96f/7cd69c10fca35cee4073c437597f2994?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m8NZLgmGds0UbDjXm9VsM~SzikaW~LCmYG5W0ev1wnbS~~DtuFeIkQj-E6g~ytWkbPS6vpT-qq~Uq7P~7mdgUG6OrUTSprVxgh9K7KD0nz89UUrF~zaYVVS2QhhYcW2yc2L70te0NsuO2CnvNZniZPalvpfITBTbdSpEobFmh331Wv0pyrRHpJm1ZaoNCk7CYxB07VGTQUQnispiDRQixS2sRyLsB3dGuWrmUKO9LRdZbD6yraC8YTojMh8ke3nu5B1WhEuEWX49typ8KA8QAYl98MEAiZ2b2vjOXSHxSgRgR6qM1~MOc1Zsu1Rr2F76Dac-FvjgbVJhDlXH-Joesw__',
    stats: {
      exp: 11,
      level: levelTypes.employee,
      type: employeeType.designer,
    },
    skills: [skillsTypes.figma, skillsTypes.midjourney],
    title: 'Design-ops secret agent på skidor',
    description:
      'Alexanders erfarenhet inom designops skulle kunna vara värdefull för dig som vill införa en mer användarcentrerad approach i ditt team eller organisation, men också för dig som är mer erfaren och vill ha en sparringpartner.',
    traits: ['UX', 'UI', 'Design', 'Designops'],
  },
  {
    id: '7',
    name: 'Mathias',
    image:
      'https://s3-alpha-sig.figma.com/img/3220/ac6b/3fea3748e7a4ef1dc416e85e5a60fcbb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pgVwgbQnnXSihuV199UALK3OOpaCKxCcQaQhCRaUTmjVlm6D7DZVM8ob2rGIrfLdkf8bybVxDSJUC6fwyqGuxI5twlnlt0FSfSSxkhmGwVlBCnPh~LqmDW49-7rypyNFow54QjZBYm6eQv-gEN~losp7wJRvkmrF3Tqriw8FSAb0RRyKPMNe7-4pDe2co960LCtKRHaznc37poD6mjrPvEOgyTklibvyLkrwDvyffPpauvIc8uGYfPDsRpJ5KkTWjvO0WvVuZHsML~YPaVTmsPn5-mWkaQRUT7NHX1epbCFUS9HUV8ar55D6K1VJcG5XV7~cXZWCrz4slQJPzDurIg__',
    stats: {
      exp: 5,
      level: levelTypes.employee,
      type: employeeType.designer,
    },
    skills: [skillsTypes.WCAG, skillsTypes.figma],
    title: 'UX och tillgänglighetsjedi',
    description:
      'Mathias är en UX Designer med erfarenhet inom medtech, streaming och videokommunikation och fastighetsbranschen. Mathias är en designer som drivs av att möta människor för att förstå hur dem tänker och vad deras underliggande behov är.',
    traits: ['UX', 'UI', 'Service design'],
  },
  {
    id: '8',
    name: 'Mattias',
    image:
      'https://s3-alpha-sig.figma.com/img/c9f3/cb37/f59d6fcd275bccfcac2eae9581c72b4f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p8GS~x2hACznSJrKw1H7nVwGuzBb0UTay~65q2PqgsYzzYyvrGEXoszTsaNh05lEjZqmJT~oi9svibXroNKMX2nUlgzH3eE9yaFjquy6WLamlTEy43WHsXGOu741EGbY-5iFkKoHTVZw4TCFr7eO55Sg18vgS5lPN53WT6to0hQagJMF0csTRPsb8LSUj3UMQpy0Gh49svKKsST3~CXySNbQueJPPULRo4aE1PbaIvcWPqr--6uVSrqRf~xJ0foQUsDUNueMTzt6OELE5jJKsBEJz1DtjFcqD7XWXBHli22pVbCAYrQIYnQdrAyUXinmoSQju63bQHIFK7imWJN5yg__',
    stats: {
      exp: 18,
      level: levelTypes.employee,
      type: employeeType.designer,
    },
    skills: [skillsTypes.miro, skillsTypes.tools],
    title: 'UXaren med alla verktygen',
    description:
      'Mattias är en lugn och metodisk designer. Han är van vid att facilitera workshops, är grundad i research och service design med en stor metodlåda och gör gärna ut design i nära samarbete med utvecklare.',
    traits: ['UX', 'Service design'],
  },
  {
    id: '9',
    name: 'Max',
    image:
      'https://s3-alpha-sig.figma.com/img/4c92/3a32/2a4a7abcde49c2d3f3a18e2cd58d4951?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FFD04diW1IPcBv4BCFG0plgWw-YC5YimCBqJLtKGUAsb7S4nHwu41TLgZf6J1t9ZAr2rRKkiaAHoHM4wn19n2ukP0o9pLXNqjVf6FUEnFLF~z-DhKJx5ygbR8zBMu09kotjPLAmKMUzMDDzuadqtdqo0o-3pcngME-6DMOazW27dSXOE~HsMfmqiyQrdUyjKXYRlpfDq2CoT7nJi4AFWdE5egImVfpsdRyBphgN70gaaHKWzS5RxNAcpq1NRU36WMDebI2W5AVaBqMR6Q7QMaX57TfeDNEeez6YphElbk7Q4o43RPeuO540etyxMi0BupGoFcVItuAj5az5-hoh2zQ__',
    stats: {
      exp: 17,
      level: levelTypes.employee,
      type: employeeType.designer,
    },
    skills: [skillsTypes.figma],
    title: 'UX som kan spänna sina muskler',
    description:
      'Max styrkor är att förstå och omvandla insikter från verkliga användarbeteenden och behov till validerade idéer och lösningsförslag, alltid med ett användarcentrerat tillvägagångssätt. Max är van att röra sig mellan holistiska och strategiska frågor till att finslipa detaljer i slutprodukten.',
    traits: ['UX', 'UI'],
  },
  {
    id: '10',
    name: 'Liza',
    image:
      'https://s3-alpha-sig.figma.com/img/58ab/ee80/cfbab2796bb3956c4af8f06926db2ff7?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPytduL1hREKO7EicLK2hWPYcmCuv05DxcbqldouODipz3UAT1KsvoufWaJaF2M48Hpp4GdeFfwsrJuY1t6QCZA-QZcq3r6kG8TFXS9FjnQk8P5w~HfDFyyN~lEy5xQnPvlX4W4hFQkcGa0HkMR2aY0InnBVUloCPLdbw6knh--89Oct4LtREntVRQRGDDXNIejEtNqHlJClo0kWiJrsipiFM2SmkZpAR5mMOyae2T2H8tSLgLiIzxtrpdev8u4q5yV7GzuRGc-gEtkUddGiJuP07VdgseaPj4385Ut8~XR5un0ELIK7wALXXauMngkW~wsSmIPmbNHqTrouGeHYqA__',
    stats: {
      exp: 24,
      level: levelTypes.employee,
      type: employeeType.designer,
    },
    skills: [skillsTypes.fight, skillsTypes.builder],
    title: 'Kämpen för god designledarskap',
    description:
      'Lizas passion ligger i att få till välfungerande team där designers och utvecklare kompletterar varandra, bygger vidare på varandras idéer och har roligt tillsammans. Liza brinner för att få ut det bästa av varje person i teamet och att se dem växa genom coaching och utvecklingssamtal.',
    traits: ['Design', 'Ledarskap'],
  },
  {
    id: '11',
    name: 'Sara D',
    image:
      'https://s3-alpha-sig.figma.com/img/b04b/9203/6868a43e875e23c5b567a6306c00f646?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDDV14~CrT3LrDRrGqsLgNGhmYunyfGo0wMqeYedtiBCJLAIDp-YD~VCjNH6dzOsmY5OpQBitcSGDHwrSVebn4n2qiDmoYQDLdVbR8AM-n7zmyemowrZ1iQYKz-DHkeq67N4-nxfi3dObcaXysxxTv1HY9oEVQxnHDgS9eowNYmPWnU9ZPgyEKKJOYPlfhnB9zY8q46O79bve4v5oCeYjMT4hxMBF0Ap4hzjNCeqiye7Mn2RnQVmaWh383d7UISMY2omcsf~Rhyg4zLXOZ7OgpIGPJdn~dHiOwkXyJUq1T9gTYB0rjhSqEcCEVpNmuciKyBT7hA-zXwCea1LWExH5A__',
    stats: {
      exp: 21,
      level: levelTypes.managmentgroup,
      type: employeeType.projectManager,
    },
    skills: [skillsTypes.miro, skillsTypes.builder],
    title: 'Företagskulturhelgonet Sara d’Arc',
    description:
      'Om du behöver stöd i hur det går att kombinera en sund företagskultur med starka resultat eller hur man bygger ett varumärke som håller vad det lovar hela vägen så är Sara personen att prata med.',
    traits: ['Ledarskap', 'Kommunikation', 'Rekrytering'],
  },
  {
    id: '12',
    name: 'Sara H',
    image:
      'https://s3-alpha-sig.figma.com/img/8b50/e987/9f6620fc886dc6ddd9c1941b4af96f81?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oY5kBrrLJHxC4VrioYQ19HL5uVM9AHgOgy0HyewhG3NuSevGSu93jdAJbbzBM9KZd8wPzMGLmK2Bhczpx7Q9jaKJRpb5zd-YlRK0O3zZjCGrJhCsYHdUDqHZAyuTMAyY8L2Yxlxm~dmfbfaD3VxVF1R4cEy2CjvC6evO14YSFPKGnOmamNvblAnUVhUNgbOk~6QQQGEXFKLE6O8dD5yshdpq96BFJr4uanmio7ocaQY6R-FjL-iSXHKRZqcL1RkJzEkViq37M3BXsSBEcSMIThfefJtANGpJ3FIaOMimOkiksFCFYnK3Wy5voUJBcdfBEWk9mB8~7KW5okCueLcihA__',
    stats: {
      exp: 24,
      level: levelTypes.managmentgroup,
      type: employeeType.projectManager,
    },
    skills: [skillsTypes.sharpshooter, skillsTypes.epi],
    title: 'Extraordinär kommunikatör',
    description:
      'Prata med Sara om hur man kopplar samman kommunikation, design och teknik och hur man får olika teammedlemmar att samarbeta mot gemensamma mål. Eller om hur man kan utvecklas inom rollen som digital kommunikatör eller designer.',
    traits: ['Kommunikation', 'Kompetensutveckling'],
  },
];
