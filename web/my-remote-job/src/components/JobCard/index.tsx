import React from 'react';
import jobListItem from '../../types/jobListItem';

import {
    Container,
    JobTitleContainer,
    JobTitle,
    JobImg,
    JobLocation,
    JobCompany,
    JobCardFooter,
    JobSource,
} from './styles';

interface jobCardProps {
    job: jobListItem;
}

const JobCard: React.FC<jobCardProps> = ({ job }) => {
    return (
        <Container>
            <JobImg src={''} />

            <JobTitleContainer>
                <JobTitle>{job.title}</JobTitle>
            </JobTitleContainer>
            <JobLocation>Location: {job.location || 'remote'}</JobLocation>
            {job.company ? (
                <JobCompany>Company: {job.company}</JobCompany>
            ) : (
                <br />
            )}
            <JobCardFooter>
                Data: {job.date || job.foundAt}
                <JobSource>{job.source}</JobSource>
            </JobCardFooter>
        </Container>
    );
};

export default JobCard;
