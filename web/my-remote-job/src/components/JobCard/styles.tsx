import styled from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.a`
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

    a :hover {
        cursor: pointer;
    }
`;

const JobImageContainer = styled.div`
    height: 80px;
`;
const JobInfoContainer = styled.div`
    display: grid;
    grid-auto-columns: 260px;

    span {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-all;
    }

    > * {
        padding-right: 20px;
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
    font-weight: 500;

    text-overflow: ellipsis;
`;
const JobImg = styled.img`
    background-color: ${Colors.dracula.Background};
    border: 2px solid ${Colors.dracula.CurrentLine};
    border-radius: 4px;
    width: 80px;
    height: 80px;
`;
const JobLocation = styled.span`
    color: ${Colors.dracula.Cyan};

    display: block;
`;
const JobCompany = styled.span`
    color: ${Colors.dracula.Orange};
`;
const JobSourceInfo = styled.div`
    small {
        padding: 4px;
        border-radius: 4px;
        background-color: ${Colors.dracula.CurrentLine};
        color: ${Colors.dracula.Pink};
    }
`;

const JobCardFooter = styled.div`
    color: ${Colors.dracula.Purple};
    display: grid;
    justify-items: stretch;
`;

export {
    Container,
    JobTitleContainer,
    JobTitle,
    JobCompany,
    JobImg,
    JobLocation,
    JobCardFooter,
    JobSourceInfo,
    JobInfoContainer,
    JobImageContainer,
};
