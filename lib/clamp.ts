const clamp = (number: number, clampA: number, clampB: number): number => {
  const min = Math.min(clampA, clampB);
  const max = Math.max(clampA, clampB);
  return Math.min(Math.max(number, min), max);
};

export default clamp;
