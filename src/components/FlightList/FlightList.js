import React, {Component} from 'react';
import FlightCard from '../FlightCard';
import {FlightListStyled} from './styled';
import {connect} from 'react-redux';

class FlightList extends Component {
    constructor(props) {
        super(props);

        this.filterFlightsByCarrier = this.filterFlightsByCarrier.bind(this);
    }

    filterFlightsByCarrier(carrier) {
        if(!carrier) return [];

        return carrier === 'all'
            ? this.props.flightList
            : this.props.flightList.filter(f => f.carrier === this.props.carrier)
    }

    render() {
        const flightList = this.filterFlightsByCarrier(this.props.carrier);

        return (
            <FlightListStyled>
                {flightList.map(flight => <FlightCard key={Math.random()} flight={flight}/>)}
            </FlightListStyled>
        );
    }
}

const mapStateToProps = (state) => ({carrier: state.carrier});

export default connect(mapStateToProps)(FlightList);