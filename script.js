/**
 * @param {number} n
 */
const isPowerOfTwo = n => n && (n & (n - 1)) === 0


fetch('https://api.github.com/users/' + document.getElementById('username').innerText)
  .then(res => res.json())
  .then(({ public_repos }) => {
    document.getElementById('count').innerText = public_repos
    if (isPowerOfTwo(public_repos)) {
      document.getElementById('note').innerText += ' (Power of two!) '
    }
  })
