import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';

class App extends Component {

  constructor(props){
      super(props);

      this.state = {
          value: Math.round(Math.random()*100)
      };

      this._updateValue = this._updateValue.bind(this);
  }

    _updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    render(){
        return  (
            <div>
                <Header title={this.props.headerTitle} />
                <hr/>
                <Content title={this.props.contentTitle} body={this.props.contentBody} />
                <hr/>
                <RandomNumber number={this.state.value} onUpdate={this._updateValue} />
                <hr/>
                <Contacts/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;
