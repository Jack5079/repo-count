/**
 * @param {number} n
 */
const isPowerOfTwo = n => n && (n & (n - 1)) === 0


fetch('https://api.github.com/users/' + (location.pathname.length - 1 ? location.pathname : document.getElementById('username').innerText))
  .then(res => res.json())
  .then(({ public_repos }) => {
    document.getElementById('count').innerText = public_repos
    if (isPowerOfTwo(public_repos)) {
      document.getElementById('note').innerText += ' (Power of two!) '
    }
  })

if (location.pathname.length - 1) {
  document.getElementById('username').innerText = location.pathname.substr(1)
}
