import { StyleSheet, Text, View } from "react-native";
import ToDoForm from "../Components/ToDoForm";
import ToDoList from "../Components/ToDoList";

export default function Page() {
  return (
    <View style={styles.container}>
      <ToDoList/>
      <ToDoForm/>
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
