import React, { useState, useEffect } from 'react';

import { Title, Container, JobsContianer, Background } from './styles';
import Header from '../../components/Header';
import jobListItem from '../../types/jobListItem';
import JobCard from '../../components/JobCard';
import Api from '../../services/api';

const Home: React.FC = () => {
    const [jobs, setJobs] = useState(Array<jobListItem>());

    useEffect(() => {
        async function loadJobs() {
            const response = await Api.get(`/jobs`);
            console.log(response);
            if (response.data) {
                setJobs(response.data.jobs || response.data);
            }
        }

        loadJobs();
    }, []);

    return (
        <Background>
            <Header />
            <Container>
                <JobsContianer>
                    {jobs.map(job => (
                        <JobCard key={job._id} job={job} />
                    ))}
                </JobsContianer>
            </Container>
        </Background>
    );
};

export default Home;
