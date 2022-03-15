import wordTrimwidth from './word-trimwidth'

describe('wordTrimwidth', () => {
  describe('only returns first words whose total charactor length is the specified width', () => {
    it('should include the word whose last charactor is the width-th in the returned word list ', () => {
      expect(wordTrimwidth(['apple', 'grape', 'lemon'], 10)).toEqual(['apple', 'grape'])
    })
    it('should not include the word whose first charactor is before the width-th but its last is after the width-th in the returned word list', () => {
      expect(wordTrimwidth(['apple', 'kiwi', 'lemon'], 10)).toEqual(['apple', 'kiwi'])
    })
    it('should return an empty array if the length of the first word is greater than the specified width', () => {
      expect(wordTrimwidth(['apple'], 3)).toEqual([])
    })
    it('should return the whole word list if the specified width is greater than the total length of all words', () => {
      expect(wordTrimwidth(['apple', 'grape', 'lemon'], 30)).toEqual(['apple', 'grape', 'lemon'])
    })
  })
})
