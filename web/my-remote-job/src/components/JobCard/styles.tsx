import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.div`
    height: 130px;
    grid-template-columns: 85px 1px 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    display: grid;
    border-radius: 6px;
    text-decoration: none;
    width: 100%;
    grid-template-areas:
        'figure divider title'
        'figure divider content';
    box-sizing: border-box;
    background-color: ${Colors.dracula.Background};
    border: 2px solid ${Colors.dracula.Selection};
`;

const JobImageContainer = styled.div``;
const JobInfoContainer = styled.div`
    display: flex;

    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    span {
        white-space: nowrap;
    }
`;
const JobTitleContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    position: relative;


`;
const JobTitle = styled.span`
    color: ${Colors.dracula.Green};

    font-size: 16px;
    line-height: 1em;
    height:2em;
    font-weight: 500;
    white-space: nowrap!important;
    text-overflow: ellipsis;
    display: block;

`;
const JobImg = styled.img``;
const JobLocation = styled.span`
    color: ${Colors.dracula.Cyan};

    display: block;
`;
const JobCompany = styled.span`
    color: ${Colors.dracula.Orange};
`;
const JobSource = styled.div``;

const JobCardFooter = styled.div`
    color: ${Colors.dracula.Purple};
`;

export {
    Container,
    JobTitleContainer,
    JobTitle,
    JobCompany,
    JobImg,
    JobLocation,
    JobCardFooter,
    JobSource,
    JobInfoContainer,
    JobImageContainer,
};
