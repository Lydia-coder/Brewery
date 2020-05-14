import React from "react";
//import PropTypes from "prop-types";
import { ButtonGroup, Dropdown, Button } from "react-bootstrap";

class Search extends React.Component {
  searchRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;

    console.log(searchTerm);
    // get the value of that input
    this.props.history.push(`/search/${searchTerm}`);
    console.log(this.props, "props?");
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.searchRef}
            placeholder="Hop, Ale, Pilsner, Stout.."
            //assign that ref to a DOM node
          />
          <input type="submit" value="Search" />
        </form>
        <Dropdown as={ButtonGroup}>
          <Button variant="danger">country</Button>

          <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
          <Button variant="danger">Type of beer</Button>

          <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default Search;
