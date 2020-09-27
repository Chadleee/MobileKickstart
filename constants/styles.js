import React from 'react';
import Dimensions from '../utilities/Layout'


const primaryColor = '#FFFFFF';
const secondaryColor = '#000000';
const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

const colors =  {
    light: {
        text: '#000',
        background: '#fff',
        tint: tintColorLight,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#fff',
        background: '#000',
        tint: tintColorDark,
        tabIconDefault: '#ccc',
        tabIconSelected: tintColorDark,
    },
};

const componentStyles = {
    material: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
        padding: 14,
        paddingVertical: 7
    },
    button: {
        buttonStyle: {
            backgroundColor: '#E4E4E4',
        },
        containerStyle: {

        },
        titleStyle: {
            color: 'black',
            fontSize: 16
        }
    },
    checkbox: {
        textStyle: {
            fontSize: 16,
            fontWeight: "normal",
        },
        containerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'white',
            borderWidth: 0
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
            labelStyle: {
                fontSize: 16
            },
            labelWrapStyle: {}
        }
    },
    datetimepicker: {
        borderBottomWidth: 1,
        padding: 5,
        margin: 5,
        width: 150,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    datepicker: {
    },
    timepicker: {
    },
    dropdown: {
        containerStyle: {
            width: 200,
            borderWidth: 1,
            borderRadius: 10,
            height: 50,
            justifyContent: 'center',
            padding: 5
        }
    },
    textbox: {
        width: 200,
        borderBottomWidth: 1,
        padding: 5,
        fontSize: 16
    },
    textarea: {
        height: 125, // 25 pixels per line (32ish for iPhone) + top and bottom padding
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 10
    },
    numerictextbox: { //shares base styles with textbox

    },
    expander: {
        container: {
            padding: 20
        },
        titleContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 5
        },
        title: {
            fontWeight: 'bold'
        },
        content: {

        }
    },
    formField: {
        container: {

        },
        title: {
            fontWeight: 'bold'
        },
        titleContainer: {

        }
    },
    modal: {

    }
};

export { colors, componentStyles };
