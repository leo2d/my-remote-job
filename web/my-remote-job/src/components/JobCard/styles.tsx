import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.div`
    height: 200px;
    grid-template-columns: 85px 1px 1fr;
    grid-column-gap: 20px;
    padding: 20px;
    display: grid;
    border-radius: 6px;
    text-decoration: none;
    width: 100%;

    background-color: ${Colors.dracula.Background};
    border: 2px solid ${Colors.dracula.Selection};
`;

const JobImageContainer = styled.div``;
const JobInfoContainer = styled.div`
    display: grid;
    grid-auto-columns: 260px;

    span {
        white-space: normal;
        word-wrap:break-word;
        word-break:break-all;
    }
`;
const JobTitleContainer = styled.div`
    width: 100%;
    display: grid;
    padding-bottom: 5px;
    position: relative;
`;
const JobTitle = styled.span`
    color: ${Colors.dracula.Green};

    font-size: 16px;
    /* line-height: 1em; */
    /* height:2em; */
    font-weight: 500;
    
    text-overflow: ellipsis;
    

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
    display: grid;
    justify-items:end;
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
