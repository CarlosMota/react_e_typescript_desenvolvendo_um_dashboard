import React from 'react';
import {Container, Content} from './styles';
import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';
/**
 * Variavel List do tipo Functional Component
 */
const List: React.FC = () => {

    const options = [
        { value: 'Rodrigo', label: 'Rodrigo'},
        { value: 'Maria', label: 'Maria'},
        { value: 'Ana', label: 'Ana'}
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={options}/>
            </ContentHeader>
            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

            </Content>
        </Container>
    );    
}

export default List;