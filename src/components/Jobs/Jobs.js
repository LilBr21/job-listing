import { useState } from 'react';

import jobsData from '../../data.json';

import JobItem from '../JobItem/JobItem';
import Filter from '../Filter/Filter';

import './Jobs.styles.css';


const Jobs = () => {
    let jobsArr = [];
    const [finalArr, setFinalArr] = useState(jobsArr);

    let filteredArr = [];

    for (const id in jobsData) {
        jobsArr.push({
            id: id,
            company: jobsData[id].company, 
            logo: jobsData[id].logo,
            new: jobsData[id].new,
            featured: jobsData[id].featured,
            position: jobsData[id].position,
            role: jobsData[id].role,
            level: jobsData[id].level,
            postedAt: jobsData[id].postedAt,
            contract: jobsData[id].contract,
            location: jobsData[id].location,
            languages: jobsData[id].languages,
            tools: jobsData[id].tools
        });
    }
   

    const filterHTML = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('HTML')) {
                filteredArr.push(job);
            }
        }
        console.log(filteredArr)
    }

    const filterCSS = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('CSS')) {
                filteredArr.push(job)
            }
        }
    }

    const filterJS = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('JavaScript')) {
                filteredArr.push(job)
            }
        }
    }

    const filterPython = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('Python')) {
                filteredArr.push(job);
            }
        }
    }

    const filterRuby = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('Ruby')) {
                filteredArr.push(job);
            }
        }
    }

    const searchFiltered = () => {
        setFinalArr(filteredArr);
        
    }
    

    return (
        <div  className="jobs-list">
        <Filter 
            searchFiltered = {searchFiltered}
            filterHTML = {filterHTML}
            filterCSS = {filterCSS}
            filterJS = {filterJS}
            filterPython = {filterPython}
            filterRuby = {filterRuby}
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