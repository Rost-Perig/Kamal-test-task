import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import categoriesReducer from './reducers/categories/categoriesSlice'
import subCategoriesReducer from './reducers/sub-categories/subCategoriesSlice'
import scaleReducer from './reducers/scale/positionSlice'

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    subCategories: subCategoriesReducer,
    scale: scaleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER] },
    }).concat([]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
