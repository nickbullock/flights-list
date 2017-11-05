import React, {Component} from 'react';
import {CarrierSelectStyled, CarrierSelectArrow, CarrierSelectArrowPolygon, CarrierSelectWrapperStyled} from './styled';
import { connect } from 'react-redux';
import actions from '../../actions';

class CarrierSelect extends Component{
    constructor(props) {
        super(props);

        this.carrierList = props.carrierList;

        this.setCarrier = this.setCarrier.bind(this);
    }

    setCarrier(ev) {
        const select = ev.target;
        const carrier = select.options[select.selectedIndex].value;

        this.props.dispatch(actions.setCarrier(carrier))
    }

    render() {
        return(
            <CarrierSelectWrapperStyled>
                <CarrierSelectArrow height="6" width="6">
                    <CarrierSelectArrowPolygon points="0,3 6,0 6,6" style={{fill: '#9e9e9e'}}/>
                </CarrierSelectArrow>
                <CarrierSelectStyled onChange={this.setCarrier}>
                    {this.carrierList.map(carrier => <option key={Math.random()}
                                                              value={carrier.value}>{carrier.name}</option>)}
                </CarrierSelectStyled>
            </CarrierSelectWrapperStyled>
        );
    }
}

export default connect()(CarrierSelect)