import React from 'react';
import { connect } from 'react-redux'
import { buyIcecream } from '../redux'

const IceCreamContainer = (props) => {
    return ( 
        <div>
            <h1>IceCream Count {props.noofIceCream}</h1>
            <button onClick={props.buy}>Buy Ice Cream</button>
        </div>
     );
}

const mapStateToProps = state => {
    return {
        noofIceCream: state.iceCream.noofIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buy: () => dispatch(buyIcecream())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);