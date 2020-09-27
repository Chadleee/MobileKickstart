import React from 'react';
import * as Elements from 'react-native-elements';
import { Platform } from 'react-native';
import PropTypes from "prop-types";
import { componentStyles } from "../../../constants/styles";

// this is not a stock component, documentation -----> https://openbase.io/js/react-native-button

const Button = (props) => {
    const {onClick, text, buttonStyle, titleStyle, ...restProps} = props;

    let newButtonStyle = Object.assign({}, componentStyles.material, componentStyles.button.buttonStyle, buttonStyle);
    let newTitleStyle = Object.assign({}, componentStyles.button.titleStyle, titleStyle);

    if(Platform.OS === 'ios'){
        Object.assign({ borderRadius: 50 }, newButtonStyle);
    }

    return (
        <Elements.Button
            onPress={onClick}
            title={text}
            buttonStyle={newButtonStyle}
            titleStyle={newTitleStyle}
            {...restProps}
        />
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    buttonStyle: PropTypes.object,
    titleStyle: PropTypes.object
};

export { Button };
