/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
export const updateMatrix = (mat) => {
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  const queue = [];
  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[0].length; j += 1) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = -1;
      }
    }
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 && newRow < mat.length
        && newCol >= 0 && newCol < mat[0].length
        && mat[newRow][newCol] === -1
      ) {
        mat[newRow][newCol] = mat[row][col] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return mat;
};
