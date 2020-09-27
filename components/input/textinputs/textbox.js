import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";

const TextBox = (props) => {
    const {onChange, value, isPassword, style, ...restProps} = props;
    const [textValue, textValueChanged] = React.useState(Boolean(value) ? value : '');
    const onTextValueChanged = (newText) => {
        if(onChange){
            onChange(newText);
        }
        textValueChanged(newText);
    };

    return (
        <TextInput
            value={textValue}
            onChangeText={text => onTextValueChanged(text)}
            secureTextEntry={ isPassword === true}
            style={Object.assign({}, componentStyles.textbox, style)}
            placeholder={'Type here...'}
            {...restProps}
        />
    );
};

TextBox.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    isPassword: PropTypes.bool,
    style: PropTypes.object
};

export { TextBox };
