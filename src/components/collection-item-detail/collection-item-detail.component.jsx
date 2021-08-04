import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item-detail.styles.scss";

const CollectionItemDetail = (item) => {
    const {imageUrl, name, price, currency, rarity, type, effects} = item.location.state;
    return (
        <div className="product-page-details" key={name} item={item}>
            <div className="product-image">
                <img src={imageUrl} alt="product" />
            </div>
            <div className="product-page-details-head">
                <h1 className="product-name">{name}</h1>
                <hr />
                <div className="product-shortinfo">
                    <p className="product-price">{price} {currency}</p>
                    <p className="product-rarity">{rarity}</p>
                    <p className="product-type">{type}</p>
                </div>
                <p className="product-effects">{effects}</p>
                {/* <CustomButton onClick={() => addItem(item)} isATB>Add to bag</CustomButton> */}
                {console.log("Item PDP: " + item.location.state.item)}
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItemDetail);