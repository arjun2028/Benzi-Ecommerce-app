import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
//import { initialState } from "../reducer";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6GgoBGH7h8pxMJcJ7NeranAa-LcaYIdiXng&usqp=CAU"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/Login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <img src="https://t4.ftcdn.net/jpg/01/08/25/01/240_F_108250155_sKVpCG1nUBx3Dc7P2LV5cBCYcvDn1psk.jpg" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
