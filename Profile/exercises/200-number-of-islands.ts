function numIslands(grid: string[][]): number {
  if (!grid) {
    return 0;
  }

  let rows = grid.length;
  let columns = grid[0].length;

  function dfs(i: number, j: number): void {
    if (i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
}
