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

const HeaderSearch: React.FC = () => {
    const [queryText, setQueryText] = useState('');

    const showEraseBtn = queryText !== '';

    return (
        <Container>
            <HeaderSearchForm onSubmit={() => console.log('submited')}>
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
