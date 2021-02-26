import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './Components/Layout'

/**
 * Variavel APP do tipo Functional Component
 * <>...</> Operador Fragment
 */
const App: React.FC = () => {
    return (
        <>
            <GlobalStyles/>
            <Layout/>
        </>
    );    
}

export default App;