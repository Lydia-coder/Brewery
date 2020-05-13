import React, { Component } from "react";
import Header from "./Header";
import Results from "./Results";
import Search from "./Search";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      loading: true,
    };
  }

  componentDidMount() {
    //console.log(`mounting`);
    const params = this.props.match.params || {};
    const searchTerm = params.searchTerm || undefined;
    this.loadBeers(searchTerm);
  }

  componentDidUpdate(prevProps) {
    //console.log("did update");
    const currentSearchTerm = this.props.match.params.searchTerm;
    const oldSearchTerm = prevProps.match.params.searchTerm;
    if (currentSearchTerm !== oldSearchTerm) {
      this.loadBeers(currentSearchTerm);
    }
  }

  loadBeers = (searchTerm = "ale") => {
    this.setState({ loading: true });
    // Check for beers in local storage
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({ beers: localBeers, loading: false });
      return; // stop before fetch happens!
    }
    const key = "659d5c6b8f3d2447f090119e48202fdb";
    fetch(`http://api.brewerydb.com/v2/search?key=${key}&q=${searchTerm}`)
      .then((data) => data.json())
      .then((beers) => {
        console.log(beers, "beers");
        this.setState({
          beers: beers.data.filter((beer) => !!beer.labels),
          loading: false,
        });
        // save to local storage in case search for this again
        localStorage.setItem(
          `search-${searchTerm}`,
          JSON.stringify(this.state.beers)
        );
      })
      .catch((err) => console.error(err));
  };
  render() {
    console.log(this.state.beers, "beers");
    return (
      <div>
        <Header siteName="Brewery  " />
        <Search history={this.props.history} />
        <Results beers={this.state.beers} loading={this.state.loading} />
      </div>
    );
  }
}

export default Main;
