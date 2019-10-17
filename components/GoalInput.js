import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

const GoalInput = ({ setGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const addHandler = () =>
    setGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), goal: enteredGoal }
    ]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputContainer}
        onChangeText={text => setEnteredGoal(text)}
      />
      <Button title="ADD" onPress={addHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  }
});

export default GoalInput;
