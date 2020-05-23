import React, { useState } from 'react';

import SearchImg from '../../assets/images/search.svg';
import EraseImg from '../../assets/images/erase.svg';
import {
    Container,
    HeaderSearchForm,
    InputContainer,
    SearchTextInput,
    SearchIconContainer,
    SearchIcon,
    EraseButton,
    EraseIconContainer,
    EraseIcon,
} from './styles';

export interface HeaderSearchProps {
    onSerach: (text: string) => Promise<any>;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ onSerach }) => {
    const [queryText, setQueryText] = useState('');

    const showEraseBtn = queryText !== '';

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('submited');
        onSerach(queryText);
    };

    return (
        <Container>
            <HeaderSearchForm onSubmit={e => handleSubmit(e)}>
                <InputContainer>
                    <SearchTextInput
                        value={queryText}
                        onChange={e => setQueryText(e.target.value)}
                        placeholder="Search by job or company name"
                    />
                    <EraseButton
                        onClick={() => setQueryText('')}
                        visible={showEraseBtn}
                    >
                        <EraseIconContainer>
                            <EraseIcon src={EraseImg} />
                        </EraseIconContainer>
                    </EraseButton>
                </InputContainer>
                <SearchIconContainer>
                    <SearchIcon src={SearchImg} />
                </SearchIconContainer>
            </HeaderSearchForm>
        </Container>
    );
};

export default HeaderSearch;
