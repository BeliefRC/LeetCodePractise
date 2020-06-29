/**
 * @param {string} s
 * @return {string}
 */
export default function (s) {
  return s.split(' ').map(word =>
    word.split('').reverse().join('')
  ).join(' ')

};
