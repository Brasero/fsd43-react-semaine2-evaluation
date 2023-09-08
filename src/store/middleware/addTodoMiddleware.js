import {addTodo, resetTodo} from "../Slice/toDoSlice.js";

const addTodoMiddleware = (store) => (next) => (action) => {
    const nextAction = next(action);
    action.type === addTodo.toString() && store.dispatch(resetTodo())
    return nextAction;
}

export default addTodoMiddleware