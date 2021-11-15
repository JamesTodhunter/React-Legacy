import React, { Component } from 'react';
import { Input } from 'reactstrap';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchWord: ''
    }
  }

  searchFunction = (e) => {
    this.setState({ searchWord: e.target.value })
  }

  render() {
    const filterthings = this.state.things.filter(things => { return (things.toLowerCase() === this.state.searchWord.toLowerCase()) })
    return (
      <div>
        <Input placeholder='Search Here' onChange={this.searchFunction} />
        <h3>Results: {filterthings.map(e => { return (<li>{e}</li>) })}</h3>
      </div>
    )
  }
}

export default SearchIndex;