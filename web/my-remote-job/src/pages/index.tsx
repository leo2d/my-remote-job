import React from 'react';

import { Title, Container } from './styles';

interface helloProps {
    text: string;
}

const Hello: React.FC<helloProps> = ({ text }) => {
    return (
        <Container>
            <Title>{text}</Title>
        </Container>
    );
};

export default Hello;
