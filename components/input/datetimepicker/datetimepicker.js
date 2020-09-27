import React from 'react';
import { View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {componentStyles} from "../../../constants/styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

// this is not a stock component, documentation -----> https://openbase.io/js/react-native-modal-datetime-picker
// assuming that utc value is being passed in

const DateTimePicker = (props) => {
    const {onChange, value, mode, style, ...restProps} = props;
    const [date, dateChanged] = React.useState(Boolean(value) ? new Date(value) : new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (newDate) => {
        if(onChange){
            onChange(newDate);
        }
        dateChanged(newDate);
        hideDatePicker();
    };

    const parseDate = () => {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();

        return month + "/" + day + "/" + year;
    };

    const parseTime = () => {
        const hours = date.getHours();
        const period = (hours/12) < 1 ? 'AM' : 'PM';
        const hour = hours % 12 === 0 ? 12 : hours % 12;
        const minutes = date.getMinutes();

        return hour + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period;
    };

    return (
        <View>
            <TouchableOpacity onPress={showDatePicker} style={Object.assign({}, componentStyles.datetimepicker, style)}>
                <Text style={{ fontSize: 16}} {...restProps}>{mode === 'date' ? parseDate() : parseTime()}</Text>
                <FontAwesomeIcon icon={ faCalendarAlt } size={ 14 }/>
            </TouchableOpacity>
            <DateTimePickerModal
                date={date}
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                mode={mode}
            />
        </View>
    );
};

export { DateTimePicker };
