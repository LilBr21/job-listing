import jobsData from '../data.json';
import JobItem from './JobItem';

const Jobs = () => {
    const jobsArr = [];
    for (const id in jobsData) {
        jobsArr.push({
            id: id,
            company: jobsData[id].company, 
            logo: jobsData[id].logo,
            featured: jobsData[id].featured,
            position: jobsData[id].position,
            role: jobsData[id].role,
            level: jobsData[id].level,
            postedAt: jobsData[id].postedAt,
            contract: jobsData[id].contract,
            location: jobsData[id].location,
            languages: jobsData[id].languages,
            tools: jobsData[id].tools
        })
    }
    return (
        <div>
       {jobsArr.map((job) => (
           <JobItem 
            key={job.id}
            id={job.id}
            company={job.company}
            logo={job.logo}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
           />
       ))}
       </div>
    )

};

export default Jobs;