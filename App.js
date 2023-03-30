import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isVisible, toggleIsVisible] = useState(false);
  const [goalList, updateGoalList] = useState([]);
  const setGoal = (enteredGoal) => {
    updateGoalList(previousGoals => [...previousGoals, {text: enteredGoal, key: Math.random().toString()}]);
    setNotVisible();
  }
  const removeGoal = (key) => {
    updateGoalList(previousGoals => {
      return previousGoals.filter((goal) => goal.key !== key);
    });
  }
  const setVisible = () => {
    toggleIsVisible(true);
  }
  const setNotVisible = () => {
    toggleIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add new goal' color="#5e0acc" onPress={setVisible} />
      <GoalInput isVisible={isVisible} setGoal={setGoal} setNotVisible={setNotVisible}/>
      <View style={styles.goalsContainer}>
        <FlatList data={goalList} renderItem={(itemData) => <GoalItem id={itemData.item.key} text={itemData.item.text} removeGoal={removeGoal}/>}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#1e085a",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer:{
    flex: 3,
  }
});
