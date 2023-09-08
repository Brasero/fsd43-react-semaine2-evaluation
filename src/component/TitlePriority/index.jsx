const TitlePriority = ({classNamePrefix, priority, title, done}) => {
    const priorityValues = [
        'classic',
        'important',
        'high',
        'critic'
    ]
    const titleStyle = {
        color: done ? 'var(--mute-color)' : 'inherit',
        textDecoration: done ?  'line-through' : 'none'
    }
    const priorityNumber = priority?.length - 1;
    const priorityClassName = 'priority ' + priorityValues[priorityNumber];
    return (
        <h3 className={classNamePrefix+'__container__item__title'}>
            <span className={'text'} style={titleStyle}>{title}</span>
            <div className={priorityClassName}>{priority}</div>
        </h3>
    )
}

export default TitlePriority;