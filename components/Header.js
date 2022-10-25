import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        height: 90,
        justifyContent: "flex-end",
        paddingBottom: 10,
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",

    }
})

export default Header;