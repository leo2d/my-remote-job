import React from 'react';

import SearchImg from '../../assets/images/search.svg';
import {
    Container,
    HeaderSearchForm,
    InputContainer,
    SearchTextInput,
    SearchIconContainer,
    SearchIcon,
    SearchEraseButton,
    EraseIconContainer,
    EraseIcon
} from './styles';

const HeaderSearch: React.FC = () => {
    return (
        <Container>
            <HeaderSearchForm>
                <InputContainer>
                    <SearchTextInput placeholder="Search by job or company name" />
                    <SearchEraseButton>
                        <EraseIconContainer>
                            <EraseIcon/>
                        </EraseIconContainer>
                    </SearchEraseButton>
                </InputContainer>
                <SearchIconContainer>
                    <SearchIcon src={SearchImg} />
                </SearchIconContainer>
            </HeaderSearchForm>
        </Container>
    );
};

export default HeaderSearch;
