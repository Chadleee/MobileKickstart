import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Expander } from "../components/display";
import {
    Button,
    CheckBox,
    DatePicker,
    Dropdown,
    NumericTextBox,
    RadioButtonList, TextArea,
    TextBox,
    TimePicker
} from "../components/inputs";

const TabOneScreen = () => {
    const radio_props = [
        {label: 'param1', value: 0 },
        {label: 'param2', value: 1 }
    ];
    const items = [
        { label: 'Football', value: 'football' },
        { label: 'Baseball', value: 'baseball' },
        { label: 'Hockey', value: 'hockey' }
    ];
    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        >
            <Expander title={'Tab One'} titleSize={35} iconSize={25} showTitleBorder={true}>
                <Text style={styles.title}>Tab One</Text>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <View style={{ paddingHorizontal:20 }}><Button text={'Click me'}/></View>
                <CheckBox text={'Check Me'}/>
                <View style={{ paddingHorizontal:20 }}><RadioButtonList options={radio_props}/></View>
                <View style={{ paddingHorizontal:20 }}><DatePicker/></View>
                <View style={{ paddingHorizontal:20 }}><TimePicker/></View>
                <View style={{ paddingHorizontal:20 }}><Dropdown items={items}/></View>
                <View style={{ paddingHorizontal:20 }}><TextBox/></View>
                <View style={{ paddingHorizontal:20 }}><NumericTextBox/></View>
                <View style={{ paddingHorizontal:20 }}><TextArea/></View>
            </Expander>
        </KeyboardAwareScrollView>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
