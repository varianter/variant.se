export const offerPath = [
  'tillvaxt',
  'forverkliga-ideer',
  'validera-ideer',
  'tillganglighetsgranskning',
  'anvandningstester',
  'ai-strategi',
  'innovation',
  'strategi-audit',
  'kommunikation-varumarke',
  'kulturell-granskning',
] as const;

export type OfferProps = {
  fileContents: string;
} & OfferMetadata;

export type OfferMetadata = {
  name: (typeof offerPath)[number];
  color: string;
};
