import React from 'react';
import PropTypes from 'prop-types';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {componentStyles} from "../../../constants/styles";

// this is not a stock component, documentation -----> https://openbase.io/js/react-native-simple-radio-button

const RadioButtonList = (props) => {
    const {onChange, value, options, verticalButtons, verticalLabels, buttonProps, labelProps, ...restProps} = props;
    const {buttonStyle, buttonWrapStyle, ...restButtonProps} = Boolean(buttonProps) ? buttonProps : {};
    const {labelStyle, labelWrapStyle, ...restLabelProps} = Boolean(labelProps) ? labelProps : {};
    const [selection, selectionChanged] = React.useState(Boolean(value) ? value : undefined);
    const onSelectionChanged = (newSelection) => {
        if(onChange){
            onChange(newSelection);
        }
        selectionChanged(newSelection);
    };

    return (
        <RadioForm
            formHorizontal={verticalButtons === false}
            animation={true}
        >
            {
                options.map((option, i) => (
                    <RadioButton labelHorizontal={true} key={i} >
                        <RadioButtonInput
                            {...componentStyles.radiobuttonlist.radiobuttoninput}
                            obj={option}
                            index={i}
                            isSelected={selection === option.value}
                            onPress={(value) => onSelectionChanged(value === selection ? undefined : value)}
                            buttonStyle={Object.assign({}, componentStyles.radiobuttonlist.radiobuttoninput.buttonStyle, buttonStyle)}
                            buttonWrapStyle={Object.assign({}, componentStyles.radiobuttonlist.radiobuttoninput.buttonWrapStyle, buttonWrapStyle)}
                            {...restButtonProps}

                        />
                        <RadioButtonLabel
                            {...componentStyles.radiobuttonlist.radiobuttonlabel}
                            obj={option}
                            index={i}
                            labelHorizontal={verticalLabels !== true}
                            onPress={(value) => onSelectionChanged(value === selection ? undefined : value)}
                            labelStyle={Object.assign({}, componentStyles.radiobuttonlist.radiobuttonlabel.labelStyle, labelStyle)}
                            labelWrapStyle={Object.assign({}, componentStyles.radiobuttonlist.radiobuttonlabel.labelWrapStyle, labelWrapStyle)}
                            {...restLabelProps}
                        />
                    </RadioButton>
                ))
            }
    </RadioForm>
    );
};

RadioButtonList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string,
        value: PropTypes.number
    })).isRequired,
    formHorizontal: PropTypes.bool,
    labelHorizontal: PropTypes.bool,
    value: PropTypes.number,
    onChange: PropTypes.func
};

export { RadioButtonList };
