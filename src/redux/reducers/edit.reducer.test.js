import { expect, test } from "@jest/globals";
import editReducer from "./edit.reducer";

// test 'EDIT_HIKE'
// test 'EDIT_ON_CHANGE'
// test CLEAR_EDIT
// test other action
// test initial value

describe ('EDIT REDUCER TESTS', () => {
    test('EDIT_HIKE', () => {
        const action = {
            type: 'EDIT_HIKE',
            payload: {
                
            }
        }
        const state = {}
        expect(editReducer(state, action)).toEqual({})
    })

    test('EDIT_ON_CHANGE', () => {
        const action = {
            type: 'EDIT_ON_CHANGE',
            payload: {
                property: 1,
                value: 1,
            }
        }
        const state = {};
        expect(editReducer(state, action)).toEqual({property: 1, value: 1})
    })
    test('CLEAR_EDIT', () => {
        const action = {
            type: 'CLEAR_EDIT',
            payload: {}
        }
        const state = {}
        expect(editReducer(state, action)).toEqual({})
    })
})