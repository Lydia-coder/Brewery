import React from "react";
import slug from "slugify";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Beer extends React.Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
    //enforce type object
  };

  render() {
    //console.log(this.props, "check");
    const { name, labels, id, nameDisplay } = this.props.details;
    const image = labels ? labels.medium : "";
    //console.log(this.props.details, "details??");

    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
      //genrate url with beer name
          <img src={image} alt={""} />
          <h2>{nameDisplay}</h2>
        </Link>
      </div>
    );
  }
}

export default Beer;
