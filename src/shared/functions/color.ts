export const getSquare: () => number[] = () => {
  const file = Math.floor(Math.random() * 8);
  const rank = Math.floor(Math.random() * 8);

  return [file, rank];
};

export const checkColor = (square: number[]) => {
  const [file, rank] = square;
};

export const showSquare = (square: number[]) => {
  const [file, rank] = square;

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return files[file] + (rank + 1);
};
