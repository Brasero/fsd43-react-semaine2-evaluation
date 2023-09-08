import {useDispatch, useSelector} from "react-redux";
import {selectTodo, selectTodoError} from "../../store/Selectors/todoSelectors.js";
import {addTodo, changeTodo} from "../../store/Slice/toDoSlice.js";
import FormComponent from "../../component/FormComponent/index.jsx";

const ToDoForm = () => {

    const todo = useSelector(selectTodo)
    const error = useSelector(selectTodoError)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name,value} = e.target
        dispatch(changeTodo({name,value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo())
    }

    return (
        <FormComponent todo={todo} error={error} handleChange={handleChange} handleSubmit={handleSubmit} submitText={'Valider'} />
    );
}

export default ToDoForm;