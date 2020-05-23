import styled from 'styled-components';

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
`;
const Container = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    max-width: 1366px !important;
    margin: auto;
    padding: 0 20px 0 30px;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding:0 0 5px 0;
`;

const Logo = styled.img`
    width: 50%;
    height: 50%;
`;

const HeaderLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 220px 0px 150px;
`;

const HeaderLink = styled.a`
    text-decoration: none;
    color:#565;
    display:none;
`;

export {
    HeaderContainer,
    Container,
    Logo,
    LogoContainer,
    HeaderLinksContainer,
    HeaderLink
};
