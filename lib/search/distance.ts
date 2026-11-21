
/**
 * Optimal String Alignment distance
 *
 * Insertion, deletion, substitution, and adjacent transposition
 * are each counted as one operation.
 */
export function osaDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;

  const dp: number[][] = Array.from(
    { length: m + 1 },
    () => Array<number>(n + 1).fill(0),
  );

  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,      // deletion
        dp[i][j - 1] + 1,      // insertion
        dp[i - 1][j - 1] + cost, // substitution
      );

      if (
        i > 1 &&
        j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i - 2][j - 2] + 1,
        );
      }
    }
  }

  return dp[m][n];
}
