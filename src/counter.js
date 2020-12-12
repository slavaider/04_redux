import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ADD2} from "./redux/actions/actions";


class Counter extends Component {
    render() {
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <button onClick={() => this.props.onAdd(1)}>Add</button>
                <button>Sub</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: (number) => dispatch(ADD2(number))
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Counter);
