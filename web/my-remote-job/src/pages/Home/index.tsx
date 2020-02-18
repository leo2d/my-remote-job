import React from 'react';

import { Title, Container } from './styles';
import Header from '../../components/Header';

interface helloProps {
    text: string;
}

const Home: React.FC<helloProps> = ({ text }) => {
    return (
        <>
            <Header />
            <Container>
                <Title>{text}</Title>
            </Container>
        </>
    );
};

export default Home;
