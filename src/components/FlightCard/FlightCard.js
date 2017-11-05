import React from 'react';
import {
    FlightCarrierWrapperStyled, FlightCarrierNameStyled,
    FlightCardWrapperStyled, FlightCarrierIconStyled, FlightDirectionWrapperStyled,
    FlightCountryStyled, FlightDirectionTimeStyled, FlightFlyButtonStyled, FlightFlyWrapperStyled,
    FlightCardContentWrapperStyled
} from './styled';
import Utils from '../../services/utils';

const FlightCard = (props) => (
    <FlightCardWrapperStyled>
        <FlightCardContentWrapperStyled>
            {/**
             * carrier icon block
             */}
            <FlightCarrierWrapperStyled>
                <FlightCarrierIconStyled carrier={props.flight.carrier}/>
                <FlightCarrierNameStyled>{props.flight.carrier}</FlightCarrierNameStyled>
            </FlightCarrierWrapperStyled>
            {/**
             * departure block
             */}
            <FlightDirectionWrapperStyled>
                <FlightCountryStyled>{props.flight.direction.from}</FlightCountryStyled>
                <FlightDirectionTimeStyled>{Utils.formatISOtoViewDate(props.flight.departure)}</FlightDirectionTimeStyled>
                <FlightDirectionTimeStyled>{Utils.formatISOtoViewTime(props.flight.departure)}</FlightDirectionTimeStyled>
            </FlightDirectionWrapperStyled>
            {/**
             * arrival block
             */}
            <FlightDirectionWrapperStyled>
                <FlightCountryStyled>{props.flight.direction.to}</FlightCountryStyled>
                <FlightDirectionTimeStyled>{Utils.formatISOtoViewDate(props.flight.arrival)}</FlightDirectionTimeStyled>
                <FlightDirectionTimeStyled>{Utils.formatISOtoViewTime(props.flight.arrival)}</FlightDirectionTimeStyled>
            </FlightDirectionWrapperStyled>
            {/**
             * fly button block
             */}
            <FlightFlyWrapperStyled>
                <FlightFlyButtonStyled>
                    Улететь бесплатно
                </FlightFlyButtonStyled>
            </FlightFlyWrapperStyled>
        </FlightCardContentWrapperStyled>
    </FlightCardWrapperStyled>
);

export default FlightCard;