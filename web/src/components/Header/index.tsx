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
import HeaderSearch, { HeaderSearchProps } from '../HeaderSearch';

interface HeaderProps extends HeaderSearchProps {}

const Header: React.FC<HeaderProps> = props => {
    return (
        <HeaderContainer>
            <Container>
                <LogoContainer>
                    <Logo src={LogoImg} />
                </LogoContainer>
                <HeaderSearch onSearch={props.onSearch} />
                <HeaderLinksContainer>
                    <HeaderLink href="/#">Click Here</HeaderLink>
                </HeaderLinksContainer>
            </Container>
        </HeaderContainer>
    );
};

export default Header;
