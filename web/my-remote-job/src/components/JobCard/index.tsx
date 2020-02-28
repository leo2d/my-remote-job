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
    JobInfoContainer,
    JobImageContainer,
} from './styles';

interface jobCardProps {
    job: jobListItem;
}

const JobCard: React.FC<jobCardProps> = ({ job }) => {
    return (
        <Container>
            <JobImageContainer>
                <JobImg src={''} />
            </JobImageContainer>

            <JobInfoContainer>
                <JobTitleContainer>
                    <JobTitle>{job.title}</JobTitle>
                </JobTitleContainer>
                {job.company ? (
                    <JobCompany>Company: {job.company}</JobCompany>
                ) : (
                    <br />
                )}
                <JobCardFooter>
                    <JobLocation>
                        Location: {job.location || 'remote'}
                    </JobLocation>
                    {job.date || job.foundAt}
                    <JobSource>{job.source}</JobSource>
                </JobCardFooter>
            </JobInfoContainer>
        </Container>
    );
};

export default JobCard;
