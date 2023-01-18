function numIslands(grid) {
    if (!grid) {
        return 0;
    }
    var rows = grid.length;
    var columns = grid[0].length;
    function dfs(i, j) {
        console.log(i, j);
        if (i < 0 || i > rows || j < 0 || j > columns) {
            return;
        }
        grid[i][j] = "0";
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    var count = 0;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (grid[i][j]) {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
}
console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]));
