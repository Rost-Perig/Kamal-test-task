import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICategoriesState {
  // currentPage: string
  isCategoryCreating: boolean
  categories: {
    categoryName: string,
    categoryId: string
  }[]
}

const initialState: ICategoriesState = {
  // currentPage: '',
  isCategoryCreating: false,
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // setCurrentPage: (state, action: PayloadAction<string>) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.currentPage = action.payload
    // },
    changeIsCategoryCreating: (state, action: PayloadAction<boolean>) => {
      state.isCategoryCreating = action.payload
    },
    addCategory: (state, action: PayloadAction<{categoryName: string, categoryId: string}>) => {
      state.categories.push(action.payload)
    }
  }
})

export const {changeIsCategoryCreating, addCategory } = categoriesSlice.actions

export default categoriesSlice.reducer
