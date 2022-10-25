import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

function AddTodo(props) {
    const [text, setText] = useState("");

    const changeHandler = async (val) => {
        setText(val);
        val = "";
    };

    return (
        <View>
            <TextInput
                placeholder='Enter a new todo'
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button onPress={() => props.submitHandler(text)} title="Ajouter" color="coral" />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 10,
        borderBottomColor: "#ddd",
    }
})
export default AddTodo;