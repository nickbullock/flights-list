import styled from 'styled-components';
import logo from '../../static/logo.png';

const HeaderWrapperStyled = styled.div`
    width: 100%;
    height: 105px;
    background: #3A3A3B;
    overflow: auto;
`;
const HeaderLogoStyled = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background-size: contain;
    background-repeat: no-repeat;
    height: 70px;
    width: 70px;
    background-image: url(${logo})
`;

export {
    HeaderLogoStyled,
    HeaderWrapperStyled
}