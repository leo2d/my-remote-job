import React, { useState } from 'react';

import { Title, Container, JobsContianer } from './styles';
import Header from '../../components/Header';
import jobListItem from '../../types/jobListItem';
import JobCard from '../../components/JobCard';

const Home: React.FC = () => {
    const [jobs, setJobs] = useState(Array<jobListItem>());

    //implement useeffect here to get jobs from server

    return (
        <>
            <Header />
            <Container>
                <JobsContianer>
                    {jobs.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </JobsContianer>
            </Container>
        </>
    );
};

export default Home;
