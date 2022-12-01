import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootState } from '../../core/store/rootReducer'
import { getStudents } from './slice'

const StudentStyled = styled.div`
  width: 100%;
  height: 2000px;
`

const StudentComponent = () => {
  const dispatch = useDispatch()
  const studentState = useSelector((state: RootState) => state.studnet)

  React.useEffect(() => {
    dispatch(getStudents())
  }, [])

  return (
    <StudentStyled>
      <ul>
        {studentState.items.map((e: any, ind: number) => (
          <li key={ind}>{e.name}</li>
        ))}
      </ul>
    </StudentStyled>
  )
}

export default StudentComponent
