import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options.map((o, index) => <option key={o.index}>{o}</option>) // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback}
                value={value}
                {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
