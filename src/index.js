module.exports = function longestConsecutiveLength(array) {
  if (array.length === 0) return 0
  if (array.length === 1) return 1

  array.sort((a, b) => a - b)

  let tmp = 1
  let seq = 1

  for (let i = 0; i < array.length - 1; i++) {
        if (array[i + 1] - array[i] === 1) {
            tmp++
            if (tmp > seq) {
                seq = tmp;
            }
        } else if (array[i] !== array[i + 1]) {
            tmp = 1;
        }
    }
  return seq
}
