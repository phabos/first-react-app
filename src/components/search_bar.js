import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class SearchBar extends Component
{
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this)
  }
  search(e) {
    const {onSearchTerm} = this.props
    this.setState({
      term: document.querySelector('#searchInput').value
    });
    onSearchTerm(document.querySelector('#searchInput').value)
  }
  render() {
    const { term } = this.state
    return (
      <div>
        <input
          type="text"
          id="searchInput"
          placeholder="search"
          onChange={this.search} />
        <input
          type="submit"
          value="search" />
        { term.length > 0 ?
          'Votre recherche ' + term : '' }
      </div>
    );
  }
}

export default SearchBar
