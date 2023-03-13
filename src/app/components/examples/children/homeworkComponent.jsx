import React from "react";
import PropTypes from "prop-types";
const HomeworkComponents = (props) => {
    return (
        <div>
            <span>
                {"Текст "}
                {props.id + 1}
            </span>
        </div>
    );
};

HomeworkComponents.propTypes = {
    id: PropTypes.number
};
export default HomeworkComponents;
