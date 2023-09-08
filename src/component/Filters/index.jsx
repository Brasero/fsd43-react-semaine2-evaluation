import {useDispatch, useSelector} from "react-redux";
import {toggleFilters} from "../../store/Slice/toDoSlice.js";
import {isSelectedFilter} from "../../store/Selectors/todoSelectors.js";

const Filters = ({classNamePrefix}) => {

    const dispatch = useDispatch()
    const stateArray = [
        {
            name: "en cours",
            value: false
        },
        {
            name: "terminée",
            value: true
        }
    ];
    const priorityArray = [
        {
            name: "classique",
            value: "!",
            class: 'classic'
        },
        {
            name: "important",
            value: "!!",
            class: "important"
        },
        {
            name: "urgent",
            value: "!!!",
            class: 'high'
        },
        {
            name: 'critique',
            value: '!!!!',
            class: 'critic'
        }
    ]

    const handleFilterClick = (name,filter) => {
        dispatch(toggleFilters({name, value: filter}))
    }

    const Button = ({filter, name}) => {
        const isActive = useSelector(isSelectedFilter(filter.value))
        const className = (isActive ? classNamePrefix+'__state__filter active' : classNamePrefix+'__state__filter') + (name === 'priority' ? " "+priorityArray[filter.value.length - 1].class : '')

        return (
            <button key={filter.name} role={'button'} onClick={() => handleFilterClick(name,filter.value)} className={className}>
                {filter.name}
            </button>
        )
    }

    return (
        <>
            <div className={classNamePrefix+'__state'}>
                {
                    stateArray.map((state, index) => {
                        return (
                            <Button key={`${state.name}-${index}`} filter={state} name={'state'} />
                        )
                    })
                }
            </div>
            <div className={classNamePrefix+'__priority'}>
                {
                    priorityArray.map((prio, index) => {
                        return (
                            <Button key={`${prio.name}-${index}`} filter={prio} name={'priority'} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Filters;