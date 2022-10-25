import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";

function TodoItem(props) {

    return (
        <TouchableOpacity style={styles.item} >
            <TouchableOpacity><MaterialIcons name='delete' size={30} color="coral" onPress={() => props.pressHandler(props.item.id)} /></TouchableOpacity>
            <Text style={styles.text}>{props.item.description}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        borderColor: "#bbb",
        borderRadius: 20,
        padding: 15,
        marginVertical: 10,
        borderWidth: 1,
        borderStyle: 'dashed',
        flexDirection: "row",
        alignItems: 'center',
    },
    text: {
        marginLeft: 10,
    }
})
export default TodoItem;