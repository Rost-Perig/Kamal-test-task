import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ICategoriesState {
  // currentPage: string
  isCategoryCreating: boolean
  categories: {
    isEditing?: boolean,
    categoryName: string,
    categoryId: string,
    subCategories?: {
      subCategoryName: string,
      subCategoryId: string,
      subSubCategories?: {
        subSubCategoryName: string,
        subSubCategoryId: string,
      }[]
    }[]
  }[]
}

const initialState: ICategoriesState = {
  isCategoryCreating: false,
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeIsCategoryCreating: (state, action: PayloadAction<boolean>) => {
      state.isCategoryCreating = action.payload
    },
    addCategory: (state, action: PayloadAction<{categoryName: string, categoryId: string, isEditing: boolean}>) => {
      state.categories.push(action.payload)
    },
    delCategory: (state, action: PayloadAction<string>) => {
      state.categories.splice(state.categories.findIndex(el => el.categoryId === action.payload), 1)
    },
     changeIsEditingCategory: (state, action: PayloadAction<{blockId: string, editing: boolean}>) => {
       const editingCategory = state.categories.find(el => action.payload.blockId === el.categoryId)
      if (editingCategory) editingCategory.isEditing = action.payload.editing
    },
      editCategoryName: (state, action: PayloadAction<{blockId: string, newName: string}>) => {
       const editingCategory = state.categories.find(el => action.payload.blockId === el.categoryId)
      if (editingCategory) editingCategory.categoryName = action.payload.newName
    },

  }
})

export const {changeIsCategoryCreating, addCategory, delCategory, changeIsEditingCategory, editCategoryName } = categoriesSlice.actions

export default categoriesSlice.reducer
