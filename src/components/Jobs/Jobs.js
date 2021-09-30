import JobItem from '../JobItem/JobItem';
import Filter from '../Filter/Filter';

import useJobs from './useJobs';

import './Jobsstyles.css';


const Jobs = () => {

    const {
        finalArr,
        filterHTML,
        filterCSS,
        filterJS,
        filterPython,
        filterRuby,
        clearFilters
    } = useJobs();

    return (
        <div  className="jobs-list">
        <Filter 
            filterHTML = {filterHTML}
            filterCSS = {filterCSS}
            filterJS = {filterJS}
            filterPython = {filterPython}
            filterRuby = {filterRuby}
            clearFilters = {clearFilters}
        />
       { 
           finalArr.map((job) => 
           <JobItem 
            key={job.id}
            {...job}
           />
       )} 
       </div>
    )

};

export default Jobs;