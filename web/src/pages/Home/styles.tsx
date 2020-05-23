import styled from 'styled-components';
import Colors from '../../styles/colors';

const Title = styled.h3`
    font-style: italic;
    color: #fff;
`;

const Container = styled.div`
    margin: 20px;
    background-color: ${Colors.dracula.Background};
`;

const Background = styled.div`
    background-color: ${Colors.dracula.Background};
`;

const JobsContianer = styled.div`
    width: 100%;
    max-width: 1366px !important;
    margin: auto;
    padding: 10px 25px;

    box-sizing: border-box;

    gap: 25px;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));

    display: grid;
`;

export { Title, Container, JobsContianer, Background };
