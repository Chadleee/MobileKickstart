import React from 'react';
import { TextBox } from './textbox';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";

// iPhone doesn't auto adjust the height to the number of lines, doing math to set height of the box
// iPhones height seems to be just a shade bigger than android. will set height to android size

const TextArea = (props) => {
    const {numberOfLines, style, ...restProps} = props;

    return (
        <TextBox
            multiline={true}
            numberOfLines={numberOfLines}
            style={Object.assign({}, componentStyles.textarea, style)}
            {...restProps}
        />
    );
};

TextArea.propTypes = {
    numberOfLines: PropTypes.number,
    value: PropTypes.string,
    onChange: PropTypes.func,
    isPassword: PropTypes.bool,
    style: PropTypes.object
};

export { TextArea };
