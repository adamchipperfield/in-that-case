/**
 * @file Entry point for the package with direct exports.
 */

/**
 * Transforms text into standard kebab casing.
 * @param {string} input - The user input.
 * @returns - The transformed string.
 */
function kebab(input) {
  return input
    .split(' ')

    /**
     * Sanitizes each word then capitalizes.
     */
    .map((word) => {
      const lower = word.toLowerCase()

      return lower
        .charAt(0)
        .toUpperCase() + lower.slice(1)
    })
    .join('')
    .split('')
    .filter((letter) => /[a-z]/i.test(letter))
    .map((letter) => {
      if (/[A-Z]/.test(letter)) {
        return ` ${letter.toLowerCase()}`
      }

      return letter
    })
    .join('')
    .trim()
    .replace(/[_\s]+/g, '-')
}

module.exports = {
  kebab
}
