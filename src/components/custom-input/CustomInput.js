import React from 'react';
import {Controller} from 'react-hook-form';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({name, rules, placeholder, control, type, secureTextEntry, onSubmitEditing, width}) => {

    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <View
                        style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}, styles[`width_${width}`]]}>
                        <TextInput
                            keyboardType={type}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            placeholderTextColor='grey'
                            style={styles.input}
                            onSubmitEditing={onSubmitEditing}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                    )}
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        paddingHorizontal: 10,
        marginVertical: 5,
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
    },
    width_80: {
        width: "80%"
    },
    width_50: {
        width: "50%"
    },
    input: {
        padding: 14
    },
});

export default CustomInput;
