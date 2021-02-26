import React from 'react';
/**Sem esse Theme provider ocorre uma exceção informando que a propriedade secondary não existe */
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './Components/Layout';
// import dark from './styles/themes/dark';
import dark from './styles/themes/dark';
/**
 * Variavel APP do tipo Functional Component
 * <>...</> Operador Fragment
 */
const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout/>
        </ThemeProvider>
    );    
}

export default App;