import { FastField, Field } from 'formik'
import React, { FC } from 'react'

type WrapperInputFieldType = {
    isFastField?: boolean
  component: any
  name: string
}

const WrapperInputField: FC<WrapperInputFieldType> = (props) =>
  (props.isFastField && (
     <FastField name={props.name} component={props.component} />
  )) || <Field name={props.name} component={props.component} />

export default React.memo(WrapperInputField)
