/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth1(accounts) {
  return Math.max(
    ...accounts.map((account) => account.reduce((acc, num) => acc + num, 0))
  );
}

/**
 * @param {number[][]} accounts
 * @return {number}
 */
function maximumWealth2(accounts) {
  let result = 0;
  for (const account of accounts) {
    const currentAccount = account.reduce((acc, num) => acc + num, 0);
    if (currentAccount > result) {
      result = currentAccount;
    }
  }
  return result;
}
