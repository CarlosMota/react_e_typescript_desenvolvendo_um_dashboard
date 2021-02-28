import React, { useState } from 'react';


import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles'

const Toggle: React.FC = () => {

    /** 
     *  Solução, encontrada na parte de Perguntas e respostas do curso da Seção 3 aula 13,  
     *  para corrigir o switch, pois o mesmo sempre ficava na posição do enable
     *  Ainda não faço a mínima ideia do que seja Hook, mas foi usado este este termo
     *  pelo usuário que deu essa solução
     */
    const[online,setOnline] = useState(true);

    return (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked = {online}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => setOnline(!online)}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)};

export default Toggle;