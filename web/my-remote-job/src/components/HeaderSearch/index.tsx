import React from 'react';

import SearchImg from '../../assets/images/search.svg';
import {
    Container,
    HeaderSearchForm,
    InputContainer,
    SearchTextInput,
    SearchIconContainer,
    SearchIcon,
} from './styles';

const HeaderSearch: React.FC = () => {
    return (
        <Container>
            <HeaderSearchForm>
                <InputContainer>
                    <SearchTextInput placeholder="Search for job or company" />
                </InputContainer>
                <SearchIconContainer>
                    <SearchIcon src={SearchImg} />
                </SearchIconContainer>
            </HeaderSearchForm>
        </Container>
    );
};

export default HeaderSearch;
