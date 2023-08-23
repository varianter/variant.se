import { parsePhoneNumber } from "libphonenumber-js";

export const formatTelephone = (telephone: string) => {
  const phoneNumber = parsePhoneNumber(telephone);
  return phoneNumber.formatNational();
};
