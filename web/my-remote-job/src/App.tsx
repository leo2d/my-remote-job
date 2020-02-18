import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global-style';

const App: React.FC = () => {
    return (
        <GlobalStyle>
            <div className="App">
                <Home text="Hi There!" />
            </div>
        </GlobalStyle>
    );
};

export default App;
