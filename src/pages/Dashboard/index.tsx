import React from 'react';
import {Container} from './styles';
import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
/**
 * Variavel Dashboard do tipo Functional Component
 */
const Dashboard: React.FC = () => {

    const options = [
        { value: 'Rodrigo', label: 'Rodrigo'},
        { value: 'Maria', label: 'Maria'},
        { value: 'Ana', label: 'Ana'}
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );    
}

export default Dashboard;