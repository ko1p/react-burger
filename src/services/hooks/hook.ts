import { useDispatch as dispatchHook, useSelector as selectorHook, TypedUseSelectorHook } from 'react-redux'
import { AppDispatch, AppThunk, RootState } from '../../types'

// Теперь этот хук «знает» структуру хранилища
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook

// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>()
