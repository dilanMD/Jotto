import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../test/testUtils'
import GuessedWords from './GuessedWords'

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

const setup = (props) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWords {...setupProps} />)
}

test('doesn\'t throw warning with expected props', () => {
    // const expectedProps = {  }
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => wrapper = setup({ guessedWords: [] }))
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders instruction to guess the word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 }
    ]

    let wrapper
    beforeEach(() => wrapper = setup({ guessedWords }))

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders "guessed words" section', () => {
        const guessedwordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedwordsNode.length).toBe(1)
    })

    test('correct number of guessed word', () => {
        const guessedwordsNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedwordsNodes.length).toBe(guessedWords.length)
    })
})