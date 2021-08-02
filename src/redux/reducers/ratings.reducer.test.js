import { expect } from "@jest/globals";
import ratingsReducer from "./ratings.reducer";

// test 'SET_RATINGS'

describe('TRAILS REDUCER TESTS', () => {
    test('SET_RATINGS', () => {
        const action = {
            type: 'SET_RATINGS',
        }
        const state = []
        expect(trailsReducer(state, action)).toEqual([])
    })
})