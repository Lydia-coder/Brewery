import React from "react";
//import PropTypes from "prop-types";
//import { ButtonGroup, Dropdown, Button } from "react-bootstrap";

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
    // );
    // console.log(
    //   this.props.beers.filter(
    //     ({
    //       breweries: [
    //         {
    //           locations: [
    //             {
    //               country: { isoThree },
    //             },
    //           ],
    //         },
    //       ],
    //     }) => isoThree === "USA" || isoThree === "IRL"
    //   ),
    //   "info?"
    // );

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
      </div>
    );
  }
}

export default Search;
