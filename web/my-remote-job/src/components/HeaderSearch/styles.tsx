import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    flex: 1;
    max-width: 450px;
    min-width: 370px;
`;

const HeaderSearchForm = styled.form`
    display: block;
    margin-top: 0em;
    position: relative;
    width: 100%;
`;

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const SearchTextInput = styled.input.attrs(props => ({
    type: 'text',
}))`
    display: flex;
    height: 50px;
    width: 100%;
    padding-left: 63px;
    padding-right: 42px;
    border: 1px solid #f2f2f2;
    font-size: 1rem;
    line-height: 1.25em;
    font-weight: 300;
    background: #f7f7f7;
    border-radius: 4px;
`;

const SearchIconContainer = styled.span`
    position: absolute;
    left: 20px;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 26px;
    height: 26px;
    pointer-events: none;
`;

const SearchIcon = styled.img`
    width: 26px;
    height: 26px;
`;

export {
    Container,
    HeaderSearchForm,
    InputContainer,
    SearchTextInput,
    SearchIconContainer,
    SearchIcon,
};
