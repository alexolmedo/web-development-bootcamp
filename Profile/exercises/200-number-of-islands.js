function numIslands(grid) {
    if (!grid) {
        return 0;
    }
    var rows = grid.length;
    var columns = grid[0].length;
    function dfs(i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === "0") {
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
            if (grid[i][j] === "1") {
                dfs(i, j);
                count++;
            }
        }
    }
    return count;
}
