export const formatTelephone = (telephone: string) => {
  return (
    telephone.substring(3, 6) +
    "-" +
    telephone.substring(6, 9) +
    "-" +
    telephone.substring(9, 15)
  );
};
