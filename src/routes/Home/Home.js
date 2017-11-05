import React, {Component} from 'react';
import Header from '../../components/Header';
import {HomeWrapperStyled, HomeBodyStyled} from './styled';
import CarrierSelect from '../../components/CarrierSelect'
import FlightList from '../../components/FlightList';
import {flights as flightList} from './../../flight-list.json';

class Home extends Component {
    constructor(props) {
        super(props);

        this.flightList = flightList;
        //get unique carriers as key-value pairs
        this.carrierList = flightList
            .reduce((result, flight) => {
                const isCarrierExists = result.some(item => item.value === flight.carrier);

                if(!isCarrierExists){
                    return [...result, {name: flight.carrier, value: flight.carrier}];
                }

                return result;
            }, []);

        //and then add 'all' value
        this.carrierList.unshift({name: 'Все авиакомпании', value: 'all'});
    }

    render() {
        return (
            <HomeWrapperStyled>
                <Header/>
                <HomeBodyStyled>
                    <CarrierSelect carrierList={this.carrierList}/>
                    <FlightList flightList={this.flightList}/>
                </HomeBodyStyled>
            </HomeWrapperStyled>
        );
    }
}

export default Home;