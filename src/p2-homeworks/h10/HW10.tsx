import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from '../h10/img/Rocket.gif'

function HW10() {
    const loading = useSelector((state:AppStoreType)=>(state.loading.isLoading))

    const dispatch = useDispatch()
    // useSelector, useDispatch

    const setLoading = () => {
        const timeOut = () => dispatch(loadingAC(false))
        dispatch(loadingAC(true))
        setTimeout(timeOut, 2000)
        console.log('loading...')
    };

    const styleButton = {
        backgroundColor: 'black',
        color: 'white'
    }

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (<div><img src={preloader}/></div>
                ) : (
                    <div>
                        <SuperButton style={styleButton} onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>

            <hr/>
        </div>
    )
}

export default HW10
