import { StyleSheet, Text, View } from "react-native";
import ToDoForm from "../Components/ToDoForm";
import ToDoList from "../Components/ToDoList";
import { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState(
    [
      'Do laundry', 
      'Go to gym', 
      'Walk dog'
    ]
  );

  const addTask = (task) => {
    if (task && !tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
});
