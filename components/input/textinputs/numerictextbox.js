import React from 'react';
import { TextBox } from './textbox';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";

const NumericTextBox = (props) => {
    const {style, ...restProps} = props;

    return (
        <TextBox
            keyboardType={ props.disableDecimal === true ? 'number-pad' : 'decimal-pad' } //this seems to only work on iPhone but adds a '-' when 'disabled'
            style={Object.assign({}, componentStyles.numerictextbox, style)}
            {...restProps}
        />
    );
};

NumericTextBox.propTypes = {
    disableDecimal: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isPassword: PropTypes.bool,
    style: PropTypes.object
};

export { NumericTextBox };
