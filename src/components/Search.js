import React from "react";
//import PropTypes from "prop-types";
import { ButtonGroup, Dropdown, Button } from "react-bootstrap";

class Search extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     countries: ["USA", "IRL", "BEL", "DE"],
  //     type: ["ale", "pilsner", "stout", "hop"],
  //   };
  //   console.log(this.state.countries, "???");
  // }

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
    // const breweries = () => {
    //   this.props.beers.map((beer) => {
    //     return beer.breweries.map((brewery) => {
    //       return brewery.locations.map((locations) => {
    //         console.log(locations.country.isoThree, "brew??");
    //         return locations.country.isoThree;
    //       });
    //     });
    //   });
    // };
    //console.log(breweries, "check?");
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
            {this.props.beers.map((beer) => {
              return (
                <Dropdown.Item href="#/action-1">
                  {beer.breweries}
                </Dropdown.Item>
              );
            })}

            <Dropdown.Item href="#/action-2">IRL</Dropdown.Item>
            <Dropdown.Item href="#/action-3">BEL</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* <Dropdown as={ButtonGroup}>
          <Button variant="danger">Type of beer</Button>

          <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Ale</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Pilsner</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Stout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    );
  }
}

export default Search;
