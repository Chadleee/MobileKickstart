import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";

const FormField = (props) => {
    const {title, titleStyle, titleContainerStyle, containerStyle, children} = props;

    const formFieldContainerStyle = Object.assign({}, componentStyles.formField.container, containerStyle);
    const formFieldTitleStyle = Object.assign({}, componentStyles.formField.title, titleStyle);
    const formFieldTitleContainerStyle = Object.assign({}, componentStyles.formField.titleContainer, titleContainerStyle);

    return (
        <View style={formFieldContainerStyle}>
            <View style={formFieldTitleContainerStyle}>
                <Text style={formFieldTitleStyle}>{title}</Text>
            </View>
            <View>
                {children}
            </View>
        </View>
    );
};

FormField.propTypes = {
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    titleContainerStyle: PropTypes.object
};

export { FormField };
