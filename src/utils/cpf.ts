export const validateCPF = (cpf: string): boolean => {
  const cleanedCPF = cpf.replace(/\D/g, "");
  if (cleanedCPF.length !== 11 || /^(\d)\1+$/.test(cleanedCPF)) return false;

  const cpfArray = cleanedCPF.split("").map(Number);
  const firstCheckDigit = calculateCheckDigit(cpfArray.slice(0, 9), 10);
  if (firstCheckDigit !== cpfArray[9]) return false;

  const secondCheckDigit = calculateCheckDigit(cpfArray.slice(0, 10), 11);
  return secondCheckDigit === cpfArray[10];
};

const calculateCheckDigit = (cpfArray: number[], factor: number): number => {
  const total = cpfArray.reduce((acc, num) => acc + num * factor--, 0);
  const remainder = total % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

export const applyCPFMask = (value: string) => {
  let formattedValue = value;
  if (value.length > 3 && value.length <= 6) {
    formattedValue = `${value.slice(0, 3)}.${value.slice(3)}`;
  } else if (value.length > 6 && value.length <= 9) {
    formattedValue = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
      6
    )}`;
  } else if (value.length > 9) {
    formattedValue = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(
      6,
      9
    )}-${value.slice(9, 11)}`;
  }
  return formattedValue;
};

export const sanitizeCPF = (cpf: string): string => {
  return cpf.replace(/\D/g, "");
};
