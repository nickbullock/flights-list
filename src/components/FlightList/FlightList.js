import React, {Component} from 'react';
import FlightCard from '../FlightCard';
import {FlightListStyled} from './styled';
import {connect} from 'react-redux';

class FlightList extends Component {
    constructor(props) {
        super(props);

        this.filterFlightsByCarrier = this.filterFlightsByCarrier.bind(this);
        this.state = {
            visibleFlightList: props.flightList,
            carrier: props.carrier
        };
    }

    filterFlightsByCarrier(props) {
        if(!props.carrier || !props.flightList) return [];

        return props.carrier === 'all'
            ? props.flightList
            : props.flightList.filter(f => f.carrier === props.carrier)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            carrier: nextProps.carrier,
            visibleFlightList: this.filterFlightsByCarrier(nextProps)
        })
    }

    render() {
        return (
            <FlightListStyled>
                {this.state.visibleFlightList.map(flight => <FlightCard key={Math.random()} flight={flight}/>)}
            </FlightListStyled>
        );
    }
}

const mapStateToProps = (state) => ({carrier: state.carrier});

export default connect(mapStateToProps)(FlightList);