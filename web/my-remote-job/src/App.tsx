import React from 'react';
import Hello from './pages';

const App: React.FC = () => {
    return (
        <div className="App">
            <Hello text="Hi There!" />
            <Hello text="This project is in progress" />
        </div>
    );
};

export default App;
