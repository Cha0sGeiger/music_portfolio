import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import { withRouter, Link } from "react-router-dom";
import { Hamburger } from "../menu/Hamburger";

const Header = ({ history }) => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const [disabled, setDisabled] = useState(false);

  //use effect for page changes

  useEffect(() => {
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  });

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  // if menu button should be disabled

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div>
      <section className={classes.section_container}>
        <div className={classes.header}>
          <div className="flex-center space-between">
            <div>
              <Link to="/" className={classes.logo}>
                Synthetic
              </Link>
            </div>
            <div className={classes.menu}>
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Hamburger state={state} />
    </div>
  );
};

export default withRouter(Header);
