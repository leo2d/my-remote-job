import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import { HeaderContainer, Container, LogoContainer, Logo, HeaderLinksContainer } from './styles';
import HeaderSearch from '../HeaderSearch';

const Header: React.FC = _ => {
    return (
        <HeaderContainer>
            <Container>
                <LogoContainer>
                    <Logo src={LogoImg} />
                </LogoContainer>
                <HeaderSearch />
                <HeaderLinksContainer>

                </HeaderLinksContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
