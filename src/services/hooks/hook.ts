import { useDispatch as dispatchHook, useSelector as selectorHook, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, AppThunk, RootState } from '../../types'

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>()
