/**
 * Trims the words that overflow the specifed width.
 * @param {string[]} words - List of words.
 * @param {number} width - Number of charactors.
 */
const word_trimwidth = (words: string[], width: number): string[] => {
  const returnedWordList = []
  let totalCharactorLength = 0
  for (let i = 0; i < words.length; i++) {
    totalCharactorLength += words[i].length
    if (totalCharactorLength > width) {
      break
    }
    returnedWordList.push(words[i])
  }
  return returnedWordList
}

export default word_trimwidth
