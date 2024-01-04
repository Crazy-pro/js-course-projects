// jest.mock('./http')

const { loadTitle } = require('./util')

test('Should print an UpperCase text', () => {
  loadTitle().then(title => {
    expect(title).toBe('DELECTUS AUT AUTEM')
  })
})
