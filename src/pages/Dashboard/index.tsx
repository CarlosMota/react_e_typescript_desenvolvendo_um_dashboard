import React from 'react';
import {Container} from './styles';
import ContentHeader from '../../Components/ContentHeader';
/**
 * Variavel Dashboard do tipo Functional Component
 */
const Dashboard: React.FC = () => {
    return (
        <Container>
            <ContentHeader/>
        </Container>
    );    
}

export default Dashboard;