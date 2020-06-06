import styled from 'styled-components';
import Colors from '../../styles/colors';
import device from '../../styles/device';

const Title = styled.h3`
    font-style: italic;
    color: #fff;
`;

const Container = styled.div`
    margin: 20px;
    background-color: ${Colors.dracula.Background};

    @media ${device.mobileL} {
        /* max-width: 800px; */
        min-height: 720px;
    }

    @media ${device.mobileM} {
        /* max-width: 800px; */
        min-height: 600px;
    }

    @media ${device.laptop} {
        /* max-width: 800px; */
        min-height: 720px;
    }

    @media ${device.desktop} {
        /* max-width: 1400px; */
        min-height: 720px;
    }

    @media ${device.desktopL} {
        /* max-width: 1400px; */
        min-height: 820px;
    }
`;

const Background = styled.div`
    background-color: ${Colors.dracula.Background};
`;

const MessageContainer = styled.div`
    margin-top: 10em;
    text-align: center;
`;

const YellowMessage = styled.span`
    color: ${Colors.dracula.Yellow};
    font-size: 25px;
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

export {
    Title,
    Container,
    JobsContianer,
    Background,
    YellowMessage,
    MessageContainer,
};
