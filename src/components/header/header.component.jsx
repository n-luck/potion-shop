import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors";
import "./header.style.scss";

const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <img src="https://i.imgur.com/EanOveR.png" class="logo" alt="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            {currentUser ? (
                <div>
                  <span className="greeting">
                    Greetings, <span className="displayname">{currentUser.displayName}</span>
                  </span>
                  <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                  </div>
                </div>
              ) : (
                <Link className='option' to='/signin'>
                  SIGN IN
                </Link>
              )}
              <CartIcon />
        </div>
        {
          hidden ? null :
          <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);