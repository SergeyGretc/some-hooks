import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
    const isLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const isAuth = localStorage.getItem("auth");
    const isLogout = () => {
        localStorage.removeItem("auth");
    };
    return (
        <>
            <CardWrapper>
                <SimpleComponent
                    isAuth={isAuth}
                    onLogin={isLogin}
                    onLogout={isLogout}
                ></SimpleComponent>
            </CardWrapper>
        </>
    );
};

export default withFunctions;
