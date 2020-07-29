import styled from 'styled-components';
import Colors from '../../styles/colors';
import device from '../../styles/device';

const Container = styled.a`
    text-decoration: none;
    width: 100%;
    min-height: 200px;
    display: flex;
    padding: 20px;
    border-radius: 6px;
    border: 2px solid ${Colors.dracula.Selection};
    background-color: ${Colors.dracula.Background};

    @media ${device.mobileS} {
        min-width: 260px;
    }

    a :hover {
        cursor: pointer;
    }
`;

const JobImageContainer = styled.div`
    height: 80px;
    margin-right: 20px;
`;
const JobInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

    text-transform: capitalize;
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
    margin-bottom: 4px;
`;
const JobCompany = styled.span`
    color: ${Colors.dracula.Orange};
`;
const JobSourceInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 3px;

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
