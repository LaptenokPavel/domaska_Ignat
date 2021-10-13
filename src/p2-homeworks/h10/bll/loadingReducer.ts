const initState = {
isLoading: false
}

type InitialStateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: Loading): InitialStateType => { // fix any
    switch (action.type) {
        case "IS-LOADING": {
            return {
                ...state,
                isLoading: action.isLoading
            }
            }
        default: return state
        }
    }


type Loading = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading:boolean) => ({type: "IS-LOADING", isLoading} as const)
 // fix any