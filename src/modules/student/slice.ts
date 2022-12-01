import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers'
import API from '../../api'
import { HttpService } from '../../core/config/httpService'
import { StrapiConvertGetAll } from '../../core/utils'

type StudentStateType = {
  items: any[],
  isLoading: boolean
}

const initialState: StudentStateType = {
  items: [],
  isLoading: false
}

export const getStudents: any = createAsyncThunk(
  'student/getAllStudents', // type
  async (_data: any, _thunkAPI) => {
    const res = await HttpService().get(API.GET_STUDENTS)
    return StrapiConvertGetAll(res)
  }
)

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<StudentStateType>>) => {
    builder.addCase(getStudents.pending, (state: StudentStateType, action: any) => {
      state.isLoading = true
    })
    builder.addCase(getStudents.fulfilled, (state: StudentStateType, action: any) => {
      console.log('sucess - ', action.payload);
      state.items = action.payload
      state.isLoading = false
    })
    builder.addCase(getStudents.rejected, (state: StudentStateType, action: any) => {
      state.isLoading = false
      // state.errorMessage = action.payload.message
    })
  }
})

export const studentActions = studentSlice.actions
export const studentReducer = studentSlice.reducer
