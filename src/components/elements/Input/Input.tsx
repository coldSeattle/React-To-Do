import React from "react"
import _ from 'lodash'
import { FC, MutableRefObject, ReactElement } from "react"
import { InputOnChangeEvent } from "../../ContentSide/ListContent/ListContent"

// import styles from './index.module.scss'

export type PropsTypes = {
    ref: MutableRefObject<HTMLInputElement>
    value?: string,
    handleOnChange?: (event: InputOnChangeEvent) => void
    handleOnBlur?: (event?: any) => void,
    handleOnClick?: (event?: any) => void,
    handleonKeyDown?: (event: any) => void
    autoFocus?: boolean,
    className?: string,
    placeholder?: string,
    defaultValue?: string
}


// eslint-disable-next-line react/display-name
export const Input: FC<PropsTypes> = React.forwardRef<HTMLInputElement, PropsTypes | undefined>(
    (props: PropsTypes, ref: any): ReactElement => {
        const {
            value,
            handleOnChange,
            handleonKeyDown,
            handleOnBlur,
            autoFocus,
            className,
            placeholder,
            defaultValue,
            handleOnClick
        } = props

        return (
            <input
                ref={ref}
                value={value}
                placeholder={placeholder}
                readOnly={ref.current && ref.current.readOnly}
                autoFocus={autoFocus}
                className={className}
                defaultValue={defaultValue}
                onChange={(event: InputOnChangeEvent) => {
                    _.isFunction(handleOnChange) && handleOnChange(event)
                }}
                onBlur={(event: InputOnChangeEvent) => {
                    _.isFunction(handleOnBlur) && handleOnBlur(event);
                }}
                onKeyDown={(event: React.KeyboardEvent) => {
                    _.isFunction(handleonKeyDown) && handleonKeyDown(event)
                }}
                onClick={() => _.isFunction(handleOnClick) && handleOnClick()}
            />
        )
    })