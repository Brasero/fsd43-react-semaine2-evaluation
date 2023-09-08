import FormComponent from "../../component/FormComponent/index.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectTodoById} from "../../store/Selectors/todoSelectors.js";
import {useState} from "react";
import {updateTodo} from "../../store/Slice/toDoSlice.js";

const UpdateTodoForm = () => {

    const {id} = useParams()
    const initialTodo = useSelector(selectTodoById(id))
    const [error, setError] = useState('')
    const [todo, setTodo] = useState({...initialTodo})
    const dispatch = useDispatch()
    const naviguate = useNavigate()

    const handleChange = (e) => {
        const {name,value} = e.target
        setTodo({
            ...todo,
            [name]: value
        })
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(todo.title.trim() === '') {
            setError('La tâche doit obligatoirement avoir un titre.');
            return;
        }
        dispatch(updateTodo(todo));
        setError('')
        naviguate(-1)
    }


    return (
        <FormComponent todo={todo} error={error} handleChange={handleChange} handleSubmit={handleSubmit} submitText={'Modifier'} />
    )
}

export default UpdateTodoForm