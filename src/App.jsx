import './App.scss'
import Nav from "./component/Nav/index.jsx";
import {Route, Routes} from "react-router-dom";
import ToDoList from "./pages/ToDoList/index.jsx";
import ToDoForm from "./pages/ToDoForm/index.jsx";
import UpdateTodoForm from "./pages/UpdateTodoForm/index.jsx";

function App() {

    return (
        <main className={'app'}>
            <header className={'app__header'}>
                <h1>To Do List</h1>
                <Nav/>
            </header>
            <div className={"app__page"}>
                <Routes>
                    <Route path={'/'} element={<ToDoList/>}/>
                    <Route path={'/add'} element={<ToDoForm />}/>
                    <Route path={'/update/:id'} element={<UpdateTodoForm />} />
                </Routes>
            </div>
        </main>
    )
}

export default App
