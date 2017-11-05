import React, {Component} from 'react';
import FlightCard from '../FlightCard';
import {FlightListStyled} from './styled';
import {connect} from 'react-redux';

class FlightList extends Component {
    constructor(props) {
        super(props);

        this.flightList = props.flightList;
    }

    componentWillUpdate(nextProps) {
        if(nextProps.carrier){
            if(nextProps.carrier === 'all'){
                this.flightList = nextProps.flightList;
            }
            else{
                this.flightList = nextProps.flightList.filter(f => f.carrier === nextProps.carrier);
            }

            return true;
        }

        return false;
    }

    render() {
        return (
            <FlightListStyled>
                {this.flightList.map(flight => <FlightCard key={Math.random()} flight={flight}/>)}
            </FlightListStyled>
        );
    }
}

const mapStateToProps = (state) => ({carrier: state.carrier});

export default connect(mapStateToProps)(FlightList);