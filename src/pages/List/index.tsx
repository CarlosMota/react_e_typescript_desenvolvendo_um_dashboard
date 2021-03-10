import React from 'react';
import {Container, Content, Filters} from './styles';
import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';
/**
 * Variavel List do tipo Functional Component
 */
const List: React.FC = () => {

    const months = [
        { value: 7, label: 'Julho'},
        { value: 8, label: 'Agosto'},
        { value: 9, label: 'Setembro'}
    ];

    const years = [
        { value: 2020, label: 2020},
        { value: 2019, label: 2019},
        { value: 2018, label: 2018}
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className="tag-filter tag-filter-recurrent"
                >
                    Recorrentes
                </button>
                <button 
                    type="button"
                    className="tag-filter tag-filter-eventual"
                >
                    Recorrentes
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
                    tagColor="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130"
                />

                <HistoryFinanceCard
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