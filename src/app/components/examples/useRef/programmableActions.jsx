import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    const handleClickWidthHeight = () => {
        inputRef.current.style.width = "80px";
        inputRef.current.style.height = "80px";
        inputRef.current.value = "text";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                Фокус input
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Изменить ширину объекта
            </button>
            <button
                className="btn btn-secondary"
                onClick={handleClickWidthHeight}
            >
                Ширина 80, высота 150
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
