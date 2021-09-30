import { useState } from 'react';

import jobsData from '../../data.json';

const useJobs = () => {
    let jobsArr = [];
    const [finalArr, setFinalArr] = useState(jobsArr);

    let filteredArr = [];

    for (const id in jobsData) {
        jobsArr.push({
            id: id,
            company: jobsData[id].company, 
            logo: jobsData[id].logo,
            newad: jobsData[id].new,
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
        setFinalArr(filteredArr);
    }

    const filterCSS = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('CSS')) {
                filteredArr.push(job)
            }
        }
        setFinalArr(filteredArr);
    }

    const filterJS = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('JavaScript')) {
                filteredArr.push(job)
            }
        }
        setFinalArr(filteredArr);
    }

    const filterPython = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('Python')) {
                filteredArr.push(job);
            }
        }
        setFinalArr(filteredArr);
    }

    const filterRuby = () => {
        filteredArr = [];
        for (let job of jobsArr) {
            if (job.languages.includes('Ruby')) {
                filteredArr.push(job);
            }
        }
        setFinalArr(filteredArr);
    }

    const clearFilters = () => {
        setFinalArr(jobsArr);
    }

    return {
        jobsArr,
        finalArr,
        filterHTML,
        filterCSS,
        filterJS,
        filterPython,
        filterRuby,
        clearFilters
    }
}

export default useJobs;