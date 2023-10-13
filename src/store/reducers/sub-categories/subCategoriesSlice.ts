import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ISubCategoriesState {
  subCategories: {
    isSubEditing: boolean,
    subCategoryName: string,
    categoryId: string,
    subCategoryId: string,
  }[];
}

const initialState: ISubCategoriesState = {
  subCategories: [],
  // subCategories: []
}

export const subCategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addSubCategory: (
      state,
      action: PayloadAction<{
        subCategoryName: string,
        subCategoryId: string,
        categoryId: string,
        isSubEditing: boolean,
      }>
    ) => {
      state.subCategories.push(action.payload)
    },

    delSubCategory: (state, action: PayloadAction<string>) => {
      state.subCategories.splice(
        state.subCategories.findIndex((el) => el.subCategoryId === action.payload),
        1
      )
    },

    delSubCategories: (state, action: PayloadAction<string>) => {
      const filteredArr = state.subCategories.filter((el) => el.categoryId !== action.payload)
      state.subCategories = filteredArr
    },

    changeIsEditingSubCategory: (state, action: PayloadAction<{ subCategoryId: string, editing: boolean }>) => {
      const editingSubCategory = state.subCategories.find((el) => action.payload.subCategoryId === el.subCategoryId)
      if (editingSubCategory) editingSubCategory.isSubEditing = action.payload.editing
    },

    editSubCategoryName: (state, action: PayloadAction<{ subCategoryId: string, newName: string }>) => {
      const editingSubCategory = state.subCategories.find((el) => action.payload.subCategoryId === el.subCategoryId)
      if (editingSubCategory) editingSubCategory.subCategoryName = action.payload.newName
    },
  },
})

export const { addSubCategory, changeIsEditingSubCategory, editSubCategoryName, delSubCategory, delSubCategories } = subCategoriesSlice.actions

export default subCategoriesSlice.reducer
