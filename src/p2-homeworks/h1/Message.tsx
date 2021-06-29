import React from 'react'
import s from './Message.module.css'

type MessagePropsTape = {
    avatar: string
    name: string
    message: string
    time: any
}

function Message(props: MessagePropsTape) {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.img}>
                    <img src={props.avatar} alt=""/>
                </div>

                <div className={s.messages}>
                    <div className={s.text}>
                        <div className={s.name}>{props.name}
                        </div>
                        <div className={s.message}>{props.message}
                        </div>
                    </div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
