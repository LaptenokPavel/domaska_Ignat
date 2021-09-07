import React from 'react'
import {homeWorkReducer, SortUp} from '../homeWorkReducer'
import {InitialPeopleType} from "../../HW8";

let initialState: InitialPeopleType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-UP-NAME'})

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-DOWN-NAME'})
    console.log(newState)
    expect(newState[5].name).toBe('Александр')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-AGE'})
    console.log(newState)
    expect(newState.length).toBe(4)

})
