import React, { Component } from "react";
import Header from "./Header";
import Loader from "./Loader";
import PropTypes from "prop-types";

class Single extends Component {
  constructor() {
    super();
    this.state = { beer: {}, loading: true };
  }
  static propTypes = {
    params: PropTypes.object,
  };

  componentDidMount() {
    //console.log(`searching for ${this.props.match.params.beerId}`);
    this.loadBeer(this.props.match.params.beerId);
  }
  loadBeer = (beerId) => {
    //console.log(`Loading beer ${beerId}`);
    this.setState({ loading: true });
    const key = "659d5c6b8f3d2447f090119e48202fdb";
    fetch(
      `http://api.brewerydb.com/v2/beer/${beerId}?key=${key}&withBreweries=y`
    )
      .then((data) => data.json())
      .then((res) => {
        console.log(res, "info");
        this.setState({ beer: res.data, loading: false });
      })
      .catch((err) => console.error(err));
  };

  renderAbv = (beer) => {
    if (!beer.abv) return;
    return <div className="abv">ABV: {beer.abv}%</div>;
  };

  render() {
    if (this.state.loading) {
      return <Loader message="Pouring a cold one!" />;
    }
    const { beer } = this.state;
    // console.log(beer.breweries.name, "brews?");
    const brewery = beer.breweries.map((brew) => {
      console.log(brew.id, "brew?");
      return brew.name;
    });

    let beerLocation;
    beer.breweries.map((brew) => {
      console.log(brew.locations, "isocode?");

      return brew.locations.map((location) => {
        console.log(location.country.isoThree, "country displayName?");
        beerLocation = location.country.isoThree;
        return location.country.isoThree;
      });
    });

    return (
      <div>
        <Header siteName="Brewery 🍺" />
        <a href="/" className="prev">
          <div className="arrow-left"></div>
        </a>

        <div className="single-beer">
          <div className="desc">
            <img
              className="label"
              src={beer.labels ? beer.labels.medium : ""}
              alt={beer.name}
            />
            <h2>{beer.name}</h2>
            <h3> Brewery: {brewery}</h3>
            <h4>LOCATION : {beerLocation}</h4>

            <p>{beer.description}</p>
          </div>

          <div className="deets">{this.renderAbv(beer)}</div>
          <div className="style">
            <h3> Info on {beer.style.shortName}</h3>

            <p>{beer.style.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Single;

//const key = "659d5c6b8f3d2447f090119e48202fdb";
//fetch(`http://api.brewerydb.com/v2/beer/${beerId}?key=${key}`)
