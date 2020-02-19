import React from 'react';

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
    return (
        <Container>
            <HeaderSearchForm>
                <InputContainer>
                    <SearchTextInput placeholder="Search by job or company name" />
                    <EraseButton onClick={() => console.log('erase clicked')} visible={true}  >
                        <EraseIconContainer>
                            <EraseIcon src={EraseImg}/>
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
