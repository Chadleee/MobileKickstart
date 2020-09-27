import React from 'react';
import { View }from 'react-native';
import RNPickerSelect  from 'react-native-picker-select';
import PropTypes from "prop-types";
import {componentStyles} from "../../../constants/styles";
import { Platform } from 'react-native';

// this is not a stock component, documentation -----> https://openbase.io/js/react-native-picker-select
// not trying to use a multiselect or searchable list, use checkbox list instead

const Dropdown = (props) => {
    const {items, value, onChange, containerStyle, ...restProps} = props;
    const sortedItems = Boolean(items) ? items.sort((a, b) => a.label > b.label ? 1 : -1) : [];
    const [selection, selectionChanged] = React.useState(Boolean(value) ? value : undefined);
    const onItemSelectedChanged = (newSelection) => {
        if(onChange){
            onChange(newSelection);
        }
        selectionChanged(newSelection);
    };

    return (
        <View style={Object.assign(Platform.OS === 'ios' ? { height: 50, justifyContent: 'center' } : {}, componentStyles.dropdown.containerStyle, containerStyle)}>
            <RNPickerSelect
                value={selection}
                placeholder={{label: 'Select an item', value: undefined}}
                onValueChange={(value) => onItemSelectedChanged(value)}
                items={sortedItems}
                style={{ inputAndroid: {color: 'black'} }}
                {...restProps}
            />
        </View>
    );
};

Dropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        label: PropTypes.string,
        value: PropTypes.string
    })).isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.object,
    containerStyle: PropTypes.object
};

export { Dropdown };
