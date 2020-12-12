import './App.css';
import {Component, React} from "react";
import {connect} from 'react-redux'
import Counter from '../src/counter'
import {ADD, ADD_NUMBER, ASYNC_ADD_NUMBER, MINUS, SUB_NUMBER} from "./redux/actions/actions";

class App extends Component {

    render() {
        return (
            <div className="App">
                <h1>Counter:{this.props.counter}</h1>
                <button onClick={this.props.onAdd}>+</button>
                <button onClick={this.props.onMinus}>-</button>
                <button onClick={() => this.props.onAsyncAddNumber(100)}>
                    Ассинхронно добавить 100
                </button>
                <button onClick={() => this.props.onAddNumber(15)}>+15</button>
                <button onClick={() => this.props.onSubNumber(-17)}>-17</button>
                <Counter/>
                <hr/>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(ADD()),
        onMinus: () => dispatch(MINUS()),
        onAddNumber: (number) => dispatch(ADD_NUMBER(number)),
        onSubNumber: (number) => dispatch(SUB_NUMBER(number)),
        onAsyncAddNumber: (number) => dispatch(ASYNC_ADD_NUMBER(number)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
