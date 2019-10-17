import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [goals, setGoals] = useState([]);

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputContainer}
          onChangeText={text => setEnteredGoal(text)}
        />
        <Button
          title="ADD"
          onPress={() =>
            setGoals(currentGoals => [...currentGoals, enteredGoal])
          }
        />
      </View>
      <View>
        {goals.map((goal, i) => (
          <Text key={i}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
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
