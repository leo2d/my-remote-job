import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global-style';
import { Helmet } from 'react-helmet';

const App: React.FC = () => {
    return (
        <GlobalStyle>
            <div className="App">
                <Helmet>
                    <title>My Remote Job</title>
                </Helmet>
                <Home />
            </div>
        </GlobalStyle>
    );
};

export default App;
