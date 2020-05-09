import React from "react";
import slug from "slugify";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Beer extends React.Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
  };

  render() {
    //console.log(this.props, "check");
    const { name, labels, id, nameDisplay } = this.props.details;
    const image = labels ? labels.medium : "null.jpg";

    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <img src={image} alt={name} />
          <h2>{nameDisplay}</h2>
        </Link>
      </div>
    );
  }
}

export default Beer;
