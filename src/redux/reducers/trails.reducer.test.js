import { expect } from "@jest/globals";
import trailsReducer from "./trails.reducer";

// test 'SET_TRAILS'

describe ('TRAILS REDUCER TESTS', () => {
    test('SET_TRAILS', () => {
        const action = {
            type: 'SET_TRAILS',
        }
        const state = []
        expect(trailsReducer(state, action)).toEqual([])
    })
})