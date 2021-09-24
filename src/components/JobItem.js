
import './JobItem.styles.css';

const JobItem = (props) => {

    return (
        <div className="job">
            <div className="logo">
                <img src={props.logo} alt="logo"></img>
            </div>
            <div className="container">
            <div>
                <div className="first-row">
                    <p>{props.company}</p>
                    {props.new === true ? <p>NEW!</p> : null}
                    {props.featured === true ? <p>FEATURED</p> : null}
                </div>
                <h2>{props.position}</h2>
                <div>
                    {props.postedAt}
                    {props.contract}
                    {props.location}
                </div>
            </div>
            <div className="languages">
                <p>{props.languages}</p>
            </div>
            </div>
        </div>
    )
}

export default JobItem;