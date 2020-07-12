import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global-style';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
    return (
        <GlobalStyle>
            <div className="App">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>My Remote Job</title>

                    <meta
                        property="og:title"
                        content="Find Your Remote Job Today"
                    />
                    <meta
                        property="og:url"
                        content="https://myremotejob.netlify.app/"
                    />
                    <meta
                        property="og:description"
                        content="My remote job aggregates remote job opportunities from a variety of sources"
                    />
                    <meta property="og:type" content="website" />
                </Helmet>
                <Home />
            </div>
        </GlobalStyle>
    );
};

export default App;
