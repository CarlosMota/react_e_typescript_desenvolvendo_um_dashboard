import React,{useMemo, useState,useEffect} from 'react';

import {Container, Content, Filters} from './styles';
import ContentHeader from '../../Components/ContentHeader';
import SelectInput from '../../Components/SelectInput';
import HistoryFinanceCard from '../../Components/HistoryFinanceCard';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

/**
 * Variavel List do tipo Functional Component
 */

interface IRouteParams{
    match: {
        params: {
            type: string;
        }
    }
}

interface IData{
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dataFormatted: string;
    tagColor: string; 
}

const List: React.FC<IRouteParams> = ({match}) => {


     const [data, setData] = useState<IData[]>([]);

    const {type} = match.params;

    const headerPage = useMemo(() => {
        return type === 'entry-balance' ? {
            title: 'Entradas',
            lineColor: '#F7931B'
        } : {
            title: 'Saídas',
            lineColor: '#E44C4E'
        }
    },[type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    },[type]);

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

    //useEffect é usado toda vez que a página é carregada
    useEffect(() => {
        // console.log(listData);

        const response = listData.map(item => {
            return {
                id: String(Math.random() * data.length),
                description: item.description,
                amountFormatted: item.amount,
                frequency: item.frequency,
                dataFormatted: item.date,
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E'
            }
        });

        setData(response);
    },[])

    return (
        <Container>
            <ContentHeader title={headerPage.title} lineColor={headerPage.lineColor}>
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
               {
                   data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />

                   ))
                    
               }

              

            </Content>
        </Container>
    );    
}

export default List;