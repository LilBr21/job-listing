
import './JobItem.styles.css';

const JobItem = ({
    logo,company, 
    newad, 
    featured, 
    position, 
    postedAt, 
    contract, 
    location, 
    languages}) => {

    return (
        <div className="job">
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="container">
            <div>
                <div className="first-row">
                    <p className="company">{company}</p>
                    {newad === true ? <p>NEW!</p> : null}
                    {featured === true ? <p>FEATURED</p> : null}
                </div>
                <h2>{position}</h2>
                <div className="bottom-row">
                    {postedAt}
                    {contract}
                    {location}
                </div>
            </div>
            <div className="languages">
                <p>{languages}</p>
            </div>
            </div>
        </div>
    )
}

export default JobItem;