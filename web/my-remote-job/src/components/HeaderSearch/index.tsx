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
    onSearch: (text: string) => Promise<any>;
}

const HeaderSearch: React.FC<HeaderSearchProps> = ({ onSearch }) => {
    const [queryText, setQueryText] = useState('');

    const showEraseBtn = queryText !== '';

    const handleSubmit = (e: any) => {
        e.preventDefault();

        onSearch(queryText);
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
                    <SearchIcon src={SearchImg} onClick={e => handleSubmit(e)} />
                </SearchIconContainer>
            </HeaderSearchForm>
        </Container>
    );
};

export default HeaderSearch;
