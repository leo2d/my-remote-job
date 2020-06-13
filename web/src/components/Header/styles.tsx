import styled from 'styled-components';
import device from '../../styles/device';

const HeaderContainer = styled.header`
    display: flex;
    position: -webkit-sticky;
    position: sticky;
    flex-direction: column;
    width: 100%;
    height: 80px;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 #dcdcdc;
    top: 0;
    z-index: 9997;
    padding: 0;

    @media ${device.laptop} and (orientation: landscape) {
        padding: 0 0 90px 0;
    }
`;
const Container = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1366px !important;
    margin: auto;

    @media screen and (max-width: 600px) {
        padding: 0 4px 0 4px;
    }

    @media ${device.laptop} and (orientation: landscape) {
        padding: 5px 20px 5px 30px;
    }
`;

const LogoContainer = styled.div`
    @media ${device.laptop} {
        display: flex;
        align-items: center;
        cursor: pointer;
        padding: 0 0 5px 0;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const Logo = styled.img`
    width: 50%;
    height: 50%;
`;

const HeaderLinksContainer = styled.div`
    @media screen and (max-width: 600px) {
        display: none;
    }

    @media ${device.laptop} {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 220px 0px 150px;
    }
`;

const HeaderLink = styled.a`
    text-decoration: none;
    color: #565;
    display: none;
`;

export {
    HeaderContainer,
    Container,
    Logo,
    LogoContainer,
    HeaderLinksContainer,
    HeaderLink,
};
