import styled from 'styled-components';

const CarrierSelectWrapperStyled = styled.div`
    margin-top: 20px;
    position: relative;
    width: 140px;
    margin-left: auto;
    margin-right: auto;
`;

const CarrierSelectStyled = styled.select`
    font-family: Roboto,arial,sans-serif;
    font-weight: normal;
    font-style: normal;
    position: relative;
    font-size: 12px;
    -webkit-appearance: button;
    -webkit-border-radius: 2px;
    -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    -webkit-padding-end: 20px;
    -webkit-padding-start: 2px;
    -webkit-user-select: none;
    border: 1px solid #d4d2d2;
    border-radius: 2px;
    color: rgba(66, 66, 66, 0.8);
    background-color: #f5f5f5;
    overflow: hidden;
    padding: 6px 10px;
    width: 140px;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    &:hover {
      background: #ffec9e;
    }
`;

const CarrierSelectArrow = styled.svg`
    z-index: 1;
    position: absolute;
    right: 10px;
    top: 12px;
`;
const CarrierSelectArrowPolygon = styled.polygon``;

export {
    CarrierSelectStyled,
    CarrierSelectArrow,
    CarrierSelectArrowPolygon,
    CarrierSelectWrapperStyled
}