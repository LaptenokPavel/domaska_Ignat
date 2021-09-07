import {InitialPeopleType} from "../HW8";

type ActionType = SortUp | SortDown | SortAge

export const homeWorkReducer = (state: InitialPeopleType[], action: ActionType): InitialPeopleType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP-NAME': {
            let copyState = [...state]
            return (
                copyState.sort((a, b) => a.name <= b.name ? -1 : 1)
            )
        }
        case 'SORT-DOWN-NAME': {
            let copyState = [...state]
            return (
                copyState.sort((a, b) => a.name <= b.name ? -1 : 1).reverse()
            )
        }
        case 'SORT-AGE': {
            return state.filter(s => s.age >= 18 ? s.age : '')
        }
        default:
            return state
    }
}

export type SortUp = ReturnType<typeof SortUpAC>
export type SortDown = ReturnType<typeof SortDownAC>
export type SortAge = ReturnType<typeof SortAgeAC>

export const SortUpAC = () => {
    return {type: 'SORT-UP-NAME'}
}

export const SortDownAC = () => {
    return {type: 'SORT-DOWN-NAME'}
}

export const SortAgeAC = () => {
    return {type: 'SORT-AGE'}
}