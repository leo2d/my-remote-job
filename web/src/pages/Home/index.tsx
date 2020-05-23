import React, { useState, useEffect } from 'react';

import { Container, JobsContianer, Background } from './styles';
import Header from '../../components/Header';
import jobListItem from '../../types/jobListItem';
import JobCard from '../../components/JobCard';
import Api from '../../services/api';

const Home: React.FC = props => {
    const [jobs, setJobs] = useState(Array<jobListItem>());

    useEffect(() => {
        async function loadJobs() {
            await searchJobs();
        }

        loadJobs();
    }, []);

    const searchJobs = async (text: string = '') => {
        const url = text ? `/jobs?title=${text}&company=${text}` : '/jobs';

        const response = await Api.get(url);
        if (response.data) {
            setJobs(response.data.jobs || response.data);
        }
    };

    return (
        <Background>
            <Header onSearch={searchJobs} />
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
