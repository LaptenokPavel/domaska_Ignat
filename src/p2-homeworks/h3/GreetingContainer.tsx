import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string)=>void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // Храним имя которое вводит пользователь
    const [error, setError] = useState<string>('') // Хранилище для ошибки


    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError("")
            }


    const addUser = () => {
        if ((name.trim() !== "") && (name.trim() !== 'какашка')) {
            addUserCallback(name)
            setName("");
            alert("Hello" + " " + name);
        } else {
            setError('warning')
        }
    };

    const onKeyPress = (e:KeyboardEvent<HTMLInputElement>) =>{
                if (e.charCode === 13) {
         addUser();
        }
    }

    const totalUsers = users.length// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyPress={onKeyPress}

        />
    )
}

export default GreetingContainer
