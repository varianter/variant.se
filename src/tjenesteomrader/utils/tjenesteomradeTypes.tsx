export const tjenesteomradePath = ['strategi', 'digital', 'kultur'] as const;

export type TjenesteomradeProps = {
  fileContents: string;
} & TjenesteomradeMetadata;

export type TjenesteomradeMetadata = {
  name: (typeof tjenesteomradePath)[number];
  color: string;
};
