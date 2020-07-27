import React from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = (props) => {
    return ( 
        <div>
            <h1>Cake Count {props.noofCakes}</h1>
            <button onClick={props.buyCakes}>Buy Cakes</button>
        </div>
     );
}


const mapStateToProps = state => {
    return {
        noofCakes: state.cake.noofCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCakes: () => dispatch(buyCake())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
