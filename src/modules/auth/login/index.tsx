// import { LoginPropsType } from 'AppModels'
// import { LoginPropsType } from 'AppModels'
import { Button, Spin } from 'antd'
import { AuthStateType } from 'APP_MODULE'
import { Form, useFormikContext, withFormik } from 'formik'
import { default as React, FC } from 'react'
import { withTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { compose } from 'redux'
import * as Yup from 'yup'
import InputField from '../../../core/components/atoms/input-field'
import { RootState } from '../../../core/store/rootReducer'
// import { useAppDispatch } from '../../../core/store/store'
import { loginAPI } from '../reducer'
import { DivLogin } from './styled'
import { LoginFormType, LoginFormValueType } from './type'
// import { loginAPI } from '../reducer'

// import { AppDispatch, RootState } from '../../../core/store/store'

const LoginForm: FC<LoginFormType> = ({ t }) => {
  // const dispatch = useAppDispatch()
const dispatch = useDispatch()
  const navigate = useNavigate()
  const authState: AuthStateType = useSelector((state: RootState) => state.auth)

  React.useEffect(() => {
    if (authState.jwt) {
      navigate('/student')
    }
  }, [authState.jwt])

  const {
    values,
    submitForm,
    // isSubmitting,
    setFieldValue,
    // errors,
    // validateForm,
    isValid
  } = useFormikContext<LoginFormValueType>()

  const handleSubmit = async () => {
    await submitForm()
    if (isValid) {
      dispatch(loginAPI(values))
    }
  }

  const handleChangeIdentifier = (e: any) => {
    setFieldValue('identifier', e.target.value)
  }

  return (
    <Form>
      <Spin tip='Loading...' spinning={authState.loading}>
        <DivLogin>
          <InputField name='identifier' onChange={handleChangeIdentifier} />
          <InputField name='password' type={'password'} />
          <Button type='primary' onClick={handleSubmit}>
            login
          </Button>
        </DivLogin>
      </Spin>
    </Form>
  )
}

// const LoginValidationSchema = ({ t }) =>
const LoginValidationSchema = () =>
  Yup.object().shape({
    identifier: Yup.string()
      .min(2, 'Too Short!')
      .max(99, 'Too Long!')
      .required('Required'),
    password: Yup.string().required('Required')
  })

const LoginComponent = compose<any>(
  withTranslation(['']),
  withFormik({
    validateOnMount: true,
    // validateOnChange: false,
    validateOnBlur: false,
    // mapPropsToValues: ({ t }) => ({
    mapPropsToValues: () => ({
      identifier: '',
      password: ''
    }),
    validationSchema: LoginValidationSchema,
    handleSubmit: async (values: LoginFormValueType) => values,
    displayName: 'Login Form'
  })
)(LoginForm)

export default LoginComponent
