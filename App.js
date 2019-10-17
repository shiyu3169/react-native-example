import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  // delete goal
  const deleteHandler = id => {
    setGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput setGoals={setGoals} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            title={itemData.item.goal}
            onDelete={deleteHandler.bind(this, itemData.item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
