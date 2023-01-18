function climbStairs(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return climbStairs(n - 2) + climbStairs(n - 1);
}
console.log(climbStairs(2));
