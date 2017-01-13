import React, { Component } from 'react';
import ContactDetails from './ContactDetails'

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData: [
                {name: "Abet", phone: "010-0000-0001"},
                {name: "Betty", phone: "010-0000-0002"},
                {name: "Charlie", phone: "010-0000-0003"},
                {name: "David", phone: "010-0000-0004"}
            ]
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
      this.setState({
        keyword: event.target.value
      })
    }

    handleClick(key) {
      this.setState({
        selectedKey: key
      })
      console.log(key, 'is selected')
    }

    render(){
        const mapToComponents = (data) => {
          data.sort()
          data = data.filter(
            (contact) => {
              return contact.name.toLowerCase().indexOf(this.state.keyword) > -1
            }
          )
          return data.map((contact, i) => {
              return (
                <ContactInfo
                  name={contact.name}
                  phone={contact.phone}
                  key={i}
                  onClick={() => this.handleClick(i)}/>
              );
          })
        };

        return(
            <div>
                <h1>Contacts</h1>
                <input name="keyword" placeholder="Search" onChange={this.handleChange}/>
                <hr/>
                <div>{mapToComponents(this.state.contactData)}</div>
                <b><ContactDetails
                  isSelected={this.state.selectedKey != -1}
                  contact={this.state.contactData[this.state.selectedKey]}/></b>
            </div>
        );
    }
}

class ContactInfo extends Component {
    render() {
        return(
            // <li>{this.props.name} {this.props.phone}</li>
            <li onClick={this.props.onClick}>{this.props.name}</li>
            );
    }
}

export default Contacts;
