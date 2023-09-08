import {CgDetailsMore} from 'react-icons/cg'
import TitlePriority from "../TitlePriority/index.jsx";
import {BsPencilSquare} from "react-icons/bs";
import {RxCrossCircled} from "react-icons/rx";
import {useDispatch, useSelector} from "react-redux";
import {selectFilteredTodos} from "../../store/Selectors/todoSelectors.js";
import {removeTodo, toggleTodo} from "../../store/Slice/toDoSlice.js";
import {useNavigate} from "react-router-dom";
const List = ({classNamePrefix}) => {

    const todos = useSelector(selectFilteredTodos)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(removeTodo(id))
    }

    const naviguate = useNavigate()

    const gotToUpdate = (id) => {
        naviguate(`/update/${id}`);
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    }

    return (
        <ul className={classNamePrefix+'__container'}>
            {
                todos.length > 0 ? (
                    todos.map((todo, index) => {
                        return (
                            <li key={`${todo.id}-${index}`} className={classNamePrefix+'__container__item'}>
                                <TitlePriority done={todo.done} classNamePrefix={classNamePrefix} priority={todo?.priority} title={todo?.title} />
                                <div className={classNamePrefix+'__container__item__content'}>
                                    {todo?.content}
                                </div>
                                <div className={classNamePrefix+'__container__item__buttons'} >
                                    <button
                                        className={classNamePrefix+'__container__item__buttons__button suppress'}
                                        role={'button'}
                                        onClick={() => handleDelete(todo.id)}
                                    >
                                        <RxCrossCircled className={'icon'} />
                                    </button>
                                    <button
                                        className={classNamePrefix+'__container__item__buttons__button'}
                                        role={'button'}
                                        onClick={() => gotToUpdate(todo.id)}
                                    >
                                        <BsPencilSquare className={'icon'} />
                                    </button>
                                    <input
                                        onChange={() => handleToggle(todo.id)}
                                        type={'checkbox'}
                                        className={classNamePrefix+'__container__item__buttons__checkbox'}
                                        checked={todo.done}
                                    />
                                </div>
                            </li>
                        )
                    })
                ) : (
                    <li>Aucune tâche</li>
                )
            }
        </ul>
    )
}

export default List;