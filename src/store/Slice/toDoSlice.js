import {createSlice} from "@reduxjs/toolkit";

let todoId = 1;
const initialTodo = {
    title: '',
    priority: '!',
    content: '',
    done: false
}

const initialState = {
    todos: [],
    filters: {
        state: [],
        priority: []
    },
    todo: initialTodo,
    todoError: ''
}

const toDoSlice = createSlice({
    name: 'TODO',
    initialState,
    reducers: {
        changeTodo(state, action) {
            const {name, value} = action.payload
            state.todo[name] = value
        },
        resetTodo(state,action) {
            state.todo = initialTodo
        },
        addTodo(state,action) {
            if(state.todo.title.trim() === '') {
                state.todoError = 'Un titre est obligatoire pour ajouter une tâche';
                return;
            }
            state.todos.push({...state.todo, id: todoId++})
            state.todoError = ''
        },
        removeTodo(state,action) {
            const id = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        toggleTodo(state,action) {
            const id = action.payload;
            state.todos.map((todo) => todo.id === id && (todo.done = !todo.done))
        },
        toggleFilters(state,action) {
            const {name, value} = action.payload
            const index = state.filters[name].findIndex((filter) => filter === value)
            if(index === -1) {
                state.filters[name].push(value)
                return
            }
            state.filters[name] = state.filters[name].filter((filter) => filter !== value)
        },
        updateTodo(state,action) {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
            if (index === -1) return
            state.todos[index] = action.payload
        }
    }
})

export const {
    changeTodo,
    resetTodo,
    addTodo,
    removeTodo,
    toggleTodo,
    toggleFilters,
    updateTodo
} = toDoSlice.actions;

export default toDoSlice.reducer;