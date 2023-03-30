import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList, Pressable } from 'react-native';

function GoalItem(props){
    const removeItem = () => {
        props.removeGoal(props.id);
    }
    return (
        <Pressable onPress={removeItem}>
            <View style={styles.goalItem}> 
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
      )
}

export default GoalItem;


const styles = StyleSheet.create({
    goalItem:{
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    goalText:{
      color: 'white',
      padding: 8
    }
  });
  