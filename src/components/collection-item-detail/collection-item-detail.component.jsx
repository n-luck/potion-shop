import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item-detail.styles.scss";

const CollectionItemDetail = (props) => (
    <div className="product-page-details">
        <div className="product-image">
            <img src={props.location.state.imageUrl} alt="product" />
        </div>
        <div className="product-page-details-head">
            <h1 className="product-name">{props.location.state.name}</h1>
            <hr />
            <div className="product-shortinfo">
                <p className="product-price">{props.location.state.price} {props.location.state.currency}</p>
                <p className="product-rarity">{props.location.state.rarity}</p>
                <p className="product-type">{props.location.state.type}</p>
            </div>
            <p className="product-effects">{props.location.state.effects}</p>
            <CustomButton isATB href="#">Add to bag</CustomButton>
        </div>
    </div>
);

export default CollectionItemDetail;