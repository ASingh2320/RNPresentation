import { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList, Modal, Image } from 'react-native';

function GoalInput(props){
    const [enteredGoal, setEnteredGoal] = useState('');
    const updateEnteredGoal = (goal) => {
        setEnteredGoal(goal);
    }

    const setGoalHandler = () => {
        props.setGoal(enteredGoal);
        setEnteredGoal('');
    }

    return(
        <Modal visible={props.isVisible} animationType="slide">
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/goal.png")}/>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={updateEnteredGoal} value={enteredGoal}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={setGoalHandler} color="#b180f0"/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.setNotVisible} color="#f31282"/>
                </View>
            </View>
        </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 24,
      borderBottomWidth: 1,
      padding: 10,
      backgroundColor: '#311b6b'
    },
    image:{
        width: 100,
        height: 100,
        margin: 20
    },
    textInput:{
      borderWidth: 1,
      borderColor: '#e4d0ff',
      backgroundColor: '#e4d0ff',
      borderRadius: 6,
      color: "#120438",
      width: '100%',
      padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    }
  });