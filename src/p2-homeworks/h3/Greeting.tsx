import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPress: (e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error: '';

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}
                   onKeyPress={onKeyPress}/>
            <button onClick={addUser}>add</button>
            <div>{totalUsers}</div>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
