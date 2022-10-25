import { useState } from 'react';
import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem
  from './components/TodoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { description: "todo 1", id: 1 }
  ]);

  const pressHandler = (key) => {
    setTodos((prevDatas) => {
      return prevDatas.filter(todo => todo.id !== key);
    });
  };

  const submitHandler = (newTodo) => {
    if (newTodo.length < 3) {
      Alert.alert("Ooops", "The new todo most be more than 3 characteres ", [
        { text: "Understood", onPress: (() => console.log("Alert closed !!!")) }
      ])
    } else {
      setTodos((prevDatas) => {
        return [
          { description: newTodo, id: prevDatas.length + 1 },
          ...prevDatas
        ]
      });
    }
  };


  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>

            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
