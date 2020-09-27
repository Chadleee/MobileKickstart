import React from 'react';
import { DateTimePicker } from "./datetimepicker";
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";

const DatePicker = (props) => {
    const {style, ...restProps} = props;

    return (
        <DateTimePicker
            mode={'date'}
            placeholder={'mm/dd/yyyy'}
            style={Object.assign({}, componentStyles.datepicker, style)}
            {...restProps}
        />
    );
};

DatePicker.propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func
};

export { DatePicker };
