import List from "../../component/List/index.jsx";
import './toDoList.scss';
import Filters from "../../component/Filters/index.jsx";

const ToDoList = () => {

    return (
        <div className={'list'}>
            <div className={'list__filters'}>
                <Filters classNamePrefix={'list__filters'} />
            </div>
            <div className={'list__items'}>
                <List classNamePrefix={'list__items'} />
            </div>
        </div>
    )
}
export default ToDoList