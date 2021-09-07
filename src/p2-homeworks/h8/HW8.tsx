import React, {useReducer, useState} from 'react'
import {homeWorkReducer, SortAgeAC, SortDownAC, SortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Reducer.module.css'

export type InitialPeopleType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, dispatch] = useReducer(homeWorkReducer, initialPeople)

    // need to fix any
    const finalPeople = people.map((p: InitialPeopleType) => (
        <div
            className={s.list}
            key={p._id}
        >
               <span>{p.name}</span>
               <span>{p.age}</span>
        </div>
    ))

    const sortUp = () => {dispatch(SortUpAC())}

    const sortDown = () => {dispatch(SortDownAC())}

    const sortAge = () => {dispatch(SortAgeAC())}

    return (
        <div>
            <hr/>
            homeworks 8
            {/*should work (должно работать)*/}
            {finalPeople}
            <div className={s.button}>
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={sortAge}>check 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
