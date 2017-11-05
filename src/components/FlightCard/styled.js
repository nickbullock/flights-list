import styled from 'styled-components';
import iconList from '../../static/icons';

const FlightCardWrapperStyled = styled.div`
    height: 100px;
    width: 100%;
    transition: box-shadow .2s,-webkit-box-shadow .2s;
    
    &:hover {
        z-index: 1;
        -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,.2), 0 1px 3px 0 rgba(0,0,0,.1);
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2), 0 1px 3px 0 rgba(0,0,0,.1);
    }
`;
const FlightCardContentWrapperStyled = styled.div`
    padding: 16px;
`;
const FlightCarrierWrapperStyled = styled.div`
    width: 20%;
    float: left;
`;
const FlightCarrierIconStyled = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    height: 32px;
    width: 32px;
    background-image: ${props => `url(${iconList[props.carrier]})`};
`;
const FlightCarrierNameStyled = styled.span`
    position: relative;
    display: block;
    margin: 8px 8px 0 0;
    overflow: hidden;
    font-size: 13px;
    letter-spacing: 0;
    color: #9e9e9e;
    max-width: 96px;
    white-space: nowrap;
    text-align: left;
`;
const FlightDirectionWrapperStyled = styled.div`
    width: 30%;
    float: left;
    height: 100%;
`;
const FlightCountryStyled = styled.div`
    color: #9e9e9e;
    font-size: 12px;
`;
const FlightDirectionTimeStyled = styled.div`
    width: 200px;
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
    color: #212121;
`;
const FlightFlyWrapperStyled = styled.div`
    float: left;
    padding-top: 20px;
    text-align: center;
    width: 20%;
`;
const FlightFlyButtonStyled = styled.div`
    text-align: center;
    padding: 7px 8px 8px 10px;
    line-height: 12px;
    font-family: Roboto,arial,sans-serif;
    font-weight: 500;
    background-color: #01abfb;
    border-radius: 2px;
    color: #fff;
    font-size: 13px;
    transition: background-color .2s;
    cursor: pointer;
    
    &:hover {
      background-color: #019dec;
      transition: none;
    }
`;

export {
    FlightCarrierIconStyled,
    FlightCardWrapperStyled,
    FlightCarrierNameStyled,
    FlightCarrierWrapperStyled,
    FlightDirectionTimeStyled,
    FlightDirectionWrapperStyled,
    FlightCountryStyled,
    FlightFlyButtonStyled,
    FlightFlyWrapperStyled,
    FlightCardContentWrapperStyled
}