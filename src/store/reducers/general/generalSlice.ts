import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IGeneralState {
  currentPage: string
}

const initialState: IGeneralState = {
  currentPage: ''
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.currentPage = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setCurrentPage } = generalSlice.actions

export default generalSlice.reducer
