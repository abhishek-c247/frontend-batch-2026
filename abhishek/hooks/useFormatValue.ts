export const useFormatValue = () => {
  const formatValue = (value?: number, withPercent = false): string => {
    if (!value) return "0";
    const rounded = Math.round(value * 100) / 100;
    return withPercent ? `${rounded}%` : `${rounded}`;
  };

  return { formatValue };
};
