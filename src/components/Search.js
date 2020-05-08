import React from "react";
//import PropTypes from "prop-types";

class Search extends React.Component {
  searchRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = this.searchRef.current.value;

    console.log(searchTerm);
    // get the value of that input
    //this.props.history.push(`/search/${searchTerm}`);
    console.log(this.props, "props?");
  };

  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={this.searchRef}
            placeholder="Hoppy"
            //assign that ref to a DOM node
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;

// import React from "react";

// class Search extends React.Component {
//   state = {
//     searchValue: "",
//   };

//   handleOnChange = (event) => {
//     this.setState({ searchValue: event.target.value });
//     console.log(event.target.value);
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const searchTerm = this.state;
//     console.log(searchTerm);
//     this.prop.history.push(`/search/${searchTerm}`);
//     this.setState({ searchValue: "" });
//   };

//   render() {
//     return (
//       <div className="search">
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             placeholder="Hop, Malt, Ale, New..."
//             onChange={(event) => this.handleOnChange(event)}
//             value={this.state.searchValue}
//           />
//           <input type="submit" value="Search" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Search;
