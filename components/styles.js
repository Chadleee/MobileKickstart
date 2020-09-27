import React from 'react';

const colors = {
    primary: '#FFFFFF',
    secondary: '#000000'
};

const componentStyles = {
    button: {
        buttonStyle: {
            backgroundColor: '#E4E4E4'
        },
        containerStyle: {

        },
        titleStyle: {
            color: 'black'
        }
    },
    checkbox: {
        textStyle: {
            fontSize: 14,
            fontWeight: "normal"
        },
        containerStyle: {
            backgroundColor:'white',
            borderColor: 'white'
        },
        uncheckedColor: 'black',
        checkedColor: 'black'
    },
    radiobuttonlist: {
        radiobuttoninput: {
            borderWidth: 1,
            buttonInnerColor: '#000000',
            buttonOuterColor: '#000000',
            buttonSize: 15,
            buttonOuterSize: 25,
            buttonStyle: {},
            buttonWrapStyle: {}
        },
        radiobuttonlabel: {
            labelStyle: {},
            labelWrapStyle: {}
        }
    },
    datetimepicker: {
        borderWidth: 1,
        padding: 5
    },
    datepicker: {

    },
    timepicker: {

    },
    dropdown: {
        containerStyle: {
            width: 200,
            borderWidth: 1,
            height:50
        }
    },
    textbox: {
        width: 200,
        borderWidth: 1,
        height: 50,
        padding: 10
    },
    textarea: {
        height: 100 // 20 pixels per line + top and bottom padding...this may change with iPhone
    },
    numerictextbox: { //shares base styles with textbox

    }
};

export { colors, componentStyles };
