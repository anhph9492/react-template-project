import { Input } from 'antd'
import { ErrorMessage, FastField, FieldProps } from 'formik'
import React, { FC } from 'react'
import styled from 'styled-components'

const InputFieldDivStyled = styled.div``

const MsgStyled = styled.p`
  color: red;
`

type InputFieldType = {
  name: string
  type?: 'text' | 'number' | 'password'
  placeholder?: string
  disabled?: boolean
  onBlur?: any
  isFastField?: boolean
  onChange?: any
  validateOnChange?: boolean
}
const InputField: FC<InputFieldType> = (props) => {
  return (
    <FastField name={props.name} placeholder={props.placeholder}>
      {({ field, form, meta }: FieldProps) => {
        // const _validateOnChange = props.validateOnChange
        //   ? props.validateOnChange
        //   : true
        const _type = props.type ? props.type : 'text'
        // const handleChange = (e: any) => {
        //     form.handleChange(e)
        // //   if (props.onChange) {
        // //     props.onChange()
        // //   } else {
        // //   }
        //   form.setFieldTouched(props.name)
        // }
        // const handleOnBlur = () => {
        //   if (props.onBlur) {
        //     props.onBlur()
        //   }
        //   form.setFieldTouched(props.name)
        // }
        return (
          <InputFieldDivStyled>
            <Input
              {...field}
              type={_type}
            //   onChange={handleChange}
            //   onBlur={handleOnBlur}
            />
            <ErrorMessage name={props.name}>
              {(msg) => <MsgStyled>{msg}</MsgStyled>}
            </ErrorMessage>
          </InputFieldDivStyled>
        )
      }}
    </FastField>
  )
}

export default React.memo(InputField)
