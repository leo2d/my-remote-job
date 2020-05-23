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
    JobSourceInfo,
    JobInfoContainer,
    JobImageContainer,
} from './styles';

import LogoImg from '../../assets/images/logo.svg';

interface jobCardProps {
    job: jobListItem;
}

const JobCard: React.FC<jobCardProps> = ({ job }) => {
    return (
        <Container href={'#'}>
            <JobImageContainer>
                <JobImg src={job.job_avatar || LogoImg} />
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
                    <JobSourceInfo>
                        {job.date || job.foundAt} - <small>{job.source.value}</small>
                    </JobSourceInfo>
                </JobCardFooter>
            </JobInfoContainer>
        </Container>
    );
};

export default JobCard;
