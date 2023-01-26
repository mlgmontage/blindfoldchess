export const getSquare: () => number[] = () => {
  const file = Math.floor(Math.random() * 8);
  const rank = Math.floor(Math.random() * 8);

  return [file, rank];
};

// NOTE: false for light and true for dark
export const checkColor: (square: number[]) => boolean = (square: number[]) => {
  const [file, rank] = square;

  const evenRank = rank % 2 === 0;
  const evenFile = file % 2 === 0;

  return evenRank ? evenFile : !evenFile;
};

export const showSquare = (square: number[]) => {
  const [file, rank] = square;

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return files[file] + (rank + 1);
};
