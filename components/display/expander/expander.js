import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Expander = (props) => {
    const {children, title, showTitleBorder, showContentBorder, titleSize, iconSize, containerStyle, titleStyle, contentStyle, titleContainerStyle} = props;
    const [expanded, expandedChanged] = React.useState(false);

    const titleBorder = { borderWidth: Boolean(showTitleBorder) && showTitleBorder === true ? 1 : 0 };
    const expanderTitleContainerStyle = Object.assign({}, componentStyles.expander.titleContainer, titleBorder, titleContainerStyle);

    const titleFontSize = {fontSize: Boolean(titleSize) ? titleSize : 14 };
    const titleTextStyle = Object.assign({}, componentStyles.expander.title, titleFontSize, titleStyle);

    const contentBorder = { borderWidth: Boolean(showContentBorder) && showContentBorder === true ? 1 : 0 };
    const titleContentStyle = Object.assign({}, componentStyles.expander.content, contentBorder, contentStyle);

    const expanderContainerStyle = Object.assign({}, componentStyles.expander.container, containerStyle);

    return (
        <View style={expanderContainerStyle}>
            <TouchableOpacity onPress={() => expandedChanged(!expanded)}>
                <View style={expanderTitleContainerStyle}>
                    <View>
                        <FontAwesomeIcon icon={ expanded ? faMinus : faPlus } size={ Boolean(iconSize) ? iconSize : titleFontSize.fontSize }/>
                    </View>
                    <View>
                        <Text style={titleTextStyle}>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {
                expanded &&
                    <View style={titleContentStyle}>
                        {children}
                    </View>
            }
        </View>
    );
};

Expander.propTypes = {
    title: PropTypes.string,
    titleSize: PropTypes.number,
    iconSize: PropTypes.number,
    showTitleBorder: PropTypes.bool,
    showContentBorder: PropTypes.bool,
    containerStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    contentStyle: PropTypes.object,
    titleContainerStyle: PropTypes.object
};

export { Expander };
