import {configureStore} from "@reduxjs/toolkit";
import toDoSlice from "./Slice/toDoSlice.js";
import addTodoMiddleware from "./middleware/addTodoMiddleware.js";


const store = configureStore({
    reducer: {
        todo: toDoSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        addTodoMiddleware
    ])
})

export default store;