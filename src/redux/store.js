import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './sickoMode'

export default configureStore({
    reducer: {
        sicko: counterReducer
    }
})