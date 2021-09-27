
import './JobItem.styles.css';

const JobItem = ({
    id,
    logo,
    company, 
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
                    {newad && <p className="new-offer">NEW!</p>}
                    {featured && <p className="featured-offer">FEATURED</p>}
                </div>
                <h2>{position}</h2>
                <div className="bottom-row">
                    <div className="bottom-info">{postedAt}</div>
                    <div className="bottom-info">{contract}</div>
                    <div className="bottom-info">{location}</div>
                </div>
            </div>
            <div className="languages">
                {languages.map((language) => {
                    return (
                    <p key={id + Math.random()} className="language">{language}</p>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default JobItem;