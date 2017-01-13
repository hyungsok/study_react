import React, { Component } from 'react';

export default class ContentDetails extends Component {
  render() {
    const details = (<div>Selected</div>)
    const blank = (<div>Not Selected</div>)

    return (
      <div>
        {this.props.isSelected? details : blank}
        {this.props.contact.name} - {this.props.contact.phone}
      </div>
    )
  }
}

ContentDetails.defaultProps = {
  contact: {
    name: '',
    phone: ''
  }
}
