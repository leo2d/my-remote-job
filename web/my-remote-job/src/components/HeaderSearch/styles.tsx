import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    flex: 1;
    max-width: 450px;
    min-width: 370px;

    padding: 0 9px 0 17px;
    justify-content: center;
    -webkit-transform: translateX(0);
    transform: translateX(0);

    div {
        display: flex;
        align-items: center;
        flex-direction: row;
    }
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

const EraseIconContainer = styled.span`
    height: 20px;
    width: 20px;
    display: inline-block;
    position: relative;

    padding: 0;
    border-radius: 100%;
`;

const EraseIcon = styled.img`
    visibility: hidden;
    border-radius: inherit;
    height: 100%;
    left: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
`;

const SearchEraseButton = styled.button`
    color: #a6a29f;
    background: transparent;
    border: none;
    margin: 0;
    padding: 10px;
    position: absolute;
    right: 0;
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
    SearchEraseButton,
    EraseIconContainer,
    EraseIcon,
};
