import React from 'react';
import * as Elements from 'react-native-elements'
import PropTypes from "prop-types";
import { componentStyles } from "../../../constants/styles";

// this is not a stock component, documentation -----> https://react-native-elements.github.io/react-native-elements/docs/checkbox

const CheckBox = (props) => {
    const {onChange, value, text, textStyle, containerStyle, ...restProps} = props;
    const [checked, checkedChanged] = React.useState(Boolean(value) ? value : false);
    const onCheckedChanged = () => {
        if(onChange){
            onChange(!checked);
        }
        checkedChanged(!checked);
    };

    return (
        <Elements.CheckBox
            {...componentStyles.checkbox}
            title={text}
            checked={checked}
            onPress={onCheckedChanged}
            textStyle={Object.assign({}, componentStyles.checkbox.textStyle, textStyle)}
            containerStyle={Object.assign({}, componentStyles.checkbox.containerStyle, containerStyle)}
            {...restProps}
        />
    );
};

CheckBox.propTypes = {
    text: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
    checkedColor: PropTypes.string,
    uncheckedColor: PropTypes.string,
    textStyle: PropTypes.object,
    containerStyle: PropTypes.object
};

export { CheckBox };
