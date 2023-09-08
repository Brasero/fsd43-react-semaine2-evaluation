import './formComponent.scss'

const FormComponent = ({todo, handleChange, handleSubmit, submitText, error}) => {

    return (
        <form className={'form'} onSubmit={handleSubmit}>
            <h3 className={'form__title'}>Ajouter une tâche</h3>
            <div className={'form__group'}>
                {
                    error && (
                        <div className={'form__group__error'}>
                            {error}
                        </div>
                    )
                }
                <div className={'form__group__wrapper'}>
                    <label className={'form__group__wrapper__label'}>Titre</label>
                    <input type={'text'} onChange={handleChange} value={todo.title} name={'title'} className={'form__group__wrapper__input'} />
                </div>
                <div className={'form__group__wrapper'}>
                    <label className={'form__group__wrapper__label'}>Déscription</label>
                    <textarea name={'content'} onChange={handleChange} value={todo.content} className={'form__group__wrapper__textArea'} />
                </div>
                <div className={'form__group__wrapper'}>
                    <label className={'form__group__wrapper__label'}>Priorité</label>
                    <select name={'priority'} onChange={handleChange} value={todo.priority}>
                        <option value={'!'} className={'classic'}>classic</option>
                        <option value={'!!'} className={"important"}>importante</option>
                        <option value={'!!!'} className={'high'}>haute</option>
                        <option value={'!!!!'} className={'critic'}>critique</option>
                    </select>
                </div>
                <div className={'form__group__wrapper'}>
                    <button className={'submit'} role={'submit'} >{submitText} </button>
                </div>
            </div>
        </form>
    )
}

export default FormComponent
