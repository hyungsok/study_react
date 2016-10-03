import React from 'react';
import ReactDOM from 'react-dom';


class RandomNumber extends React.Component {

    constructor(props){
        super(props);
        // _update 메소드에서 this.props 에 접근 할 수 있도록 binding 을 해줍니다.
        this._update = this._update.bind(this);
    }

    _update(){
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }

    render(){
        return (
            <div>
                <h1>RANDOM NUMBER: {this.props.number}</h1>
                <button onClick={this._update}>Randomize</button>
            </div>
        );
    }
}

export default RandomNumber;
