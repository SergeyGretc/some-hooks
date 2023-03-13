import React from "react";

import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogout, isAuth }) => {
    const handleClick = () => {
        isAuth ? onLogout() : onLogin();
    };
    return (
        <button className="btn btn-primary" onClick={handleClick}>
            {!isAuth ? "Войти" : "Выйти из системы"}
        </button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.string
};
export default SimpleComponent;
