import React from "react";
import "./collection-item-detail.styles.scss";

const CollectionItemDetail = (props) => (
    <div className="product-page-details">
        <div className="product-page-details-head">
            <h1 className="product-name">{props.location.state.name}</h1>
            <p className="product-price">{props.location.state.price} {props.location.state.currency}</p>
            <p className="product-rarity">{props.location.state.rarity}</p>
            <p className="product-type">{props.location.state.type}</p>
            <p className="product-effects">{props.location.state.effects}</p>
        </div>
        <div className="product-image">
            <img src={props.location.state.imageUrl} alt="product" />
        </div>
    </div>
);

export default CollectionItemDetail;