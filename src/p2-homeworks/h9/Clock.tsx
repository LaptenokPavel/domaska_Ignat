import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {




    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    let hours = date.getHours()
    let minits = date.getMinutes()
    let seconds = date.getSeconds()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    const multiplay = (value:number) => value < 10 ? '0' + value : value

    const clockStyle = {
        width: '80px',
        border: '1px solid green',
        backgroundColor: 'aquamarine',
        marginTop: '20px'
    }

    const dateStyle = {
        width: '80px',
        border: '1px solid red',
        backgroundColor: 'orange',
        marginTop: '20px',
        marginBottom: '20px'
    }

    const buttonBackground = {backgroundColor: 'green'}

    const stop = () => {
        clearTimeout(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
             setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime =  <div style={clockStyle}>
        <span>{multiplay(hours)}:</span>
        <span>{multiplay(minits)}:</span>
        <span>{multiplay(seconds)}</span>
    </div> // fix with date


    const stringDate = <div style={dateStyle}>
        <span>{multiplay(day)}:</span>
        <span>{multiplay(month)}:</span>
        <span>{multiplay(year)}</span>
    </div>
    // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}

            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton style={buttonBackground} onClick={start}>start</SuperButton>
            <SuperButton style={buttonBackground} onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
