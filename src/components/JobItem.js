const JobItem = (props) => {
    return (
        <div>
            <h2>{props.company}</h2>
            <p>{props.position}</p>
        </div>
    )
}

export default JobItem;