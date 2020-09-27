import React from 'react';
import { DateTimePicker } from "./datetimepicker";
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";
import TextBox from "../textinputs/textbox";

const TimePicker = (props) => {
    const {style, ...restProps} = props;

    return (
        <DateTimePicker
            mode={'time'}
            placeholder={'hh:mm'}
            style={Object.assign({}, componentStyles.timepicker, style)}
            {...restProps}
        />
    );
};

TimePicker.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};

export { TimePicker };
