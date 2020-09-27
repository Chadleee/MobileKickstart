import React from 'react';
import { Modal } from 'react-native';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";

const TextBox = (props) => {
    const {visible, style, animationType, children, ...restProps} = props;
    const modalStyle = Object.assign({}, componentStyles.modal, style);
    return (
    <Modal
        animationType={ Boolean(animationType) ? animationType : undefined}
        transparent={false}
        visible={visible}
        style={modalStyle}
        {...restProps}
    >
        {children}
    </Modal>
    );
};

TextBox.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    isPassword: PropTypes.bool,
    style: PropTypes.object
};

export { TextBox };
