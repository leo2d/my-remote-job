import React from 'react';
import LogoImg from '../../assets/images/logo.svg';
import {
    HeaderContainer,
    Container,
    LogoContainer,
    Logo,
    HeaderLinksContainer,
    HeaderLink,
} from './styles';
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
                    <HeaderLink href="/#">Click here</HeaderLink>
                </HeaderLinksContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
