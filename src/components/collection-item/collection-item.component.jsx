import React from "react";
import {Link} from "react-router-dom";
import "./collection-item.styles.scss";

const CollectionItem = ({id, name, price, currency, imageUrl, rarity, type, effects, pdpUrl}) => (
    <div className="collection-item" key={id}>
        <Link to={{pathname: `/pdp/${pdpUrl}`, state: {id, name, price, rarity, type, effects, currency, imageUrl}}} className="pdp-link">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price} {currency}</span>
            </div>
        </Link>
    </div>
);

export default CollectionItem;