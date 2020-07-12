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
                    <meta name="description" content="Find your next remote job today!" />
                </Helmet>
                <Home />
            </div>
        </GlobalStyle>
    );
};

export default App;
