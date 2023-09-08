export const selectTodo = (state) => state.todo.todo;

export const selectTodos = (state) => state.todo.todos;
export const selectTodoError = (state) => state.todo.todoError;

export const isSelectedFilter = (filter) => {
    return (state) => {
        if (state.todo.filters.state.includes(filter)) return true;
        return state.todo.filters.priority.includes(filter);

    }
}

export const selectFilteredTodos = (state) => {
    if (state.todo.filters.state.length === 0 && state.todo.filters.priority.length === 0) {
        return state.todo.todos;
    }
    let returnTodos = [...state.todo.todos]
    if (state.todo.filters.state.length > 0) {
        const stateFilter = state.todo.filters.state
        returnTodos = state.todo.todos.filter((todo) => stateFilter.includes(todo.done))
    }
    if(state.todo.filters.priority.length > 0) {
        const prioFilter = state.todo.filters.priority
        returnTodos = returnTodos.filter((todo) => prioFilter.includes(todo.priority))
    }

    return returnTodos;
}

export const selectTodoById = (id) => {
    return (state) => state.todo.todos.filter((todo) => todo.id == id)[0]
}