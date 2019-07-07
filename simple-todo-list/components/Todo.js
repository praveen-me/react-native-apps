import React from 'react';
import { TouchableOpacity, Text, Switch, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { removeTodo, todoToggleComplete } from '../store/actions/todoActions';

const Todo = ({ text, isCompleted, i, dispatch }) => {
	const handleRemoveTodo = (index) => {
		dispatch(removeTodo(index));
	} 
	
	const handleTodoCompleteToggle = (index) => {
		dispatch(todoToggleComplete(index));
	}
	
	return(
		<TouchableOpacity 
		style={styles.item}
		onPress={() => handleRemoveTodo(i)}>
			<Text>{text}</Text>
			<Switch 
			style={styles.toggle}
			value={ isCompleted }
			onValueChange={ () => handleTodoCompleteToggle(i) }
			/>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item : {
    backgroundColor: 'whitesmoke',
    marginBottom : 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggle : {
    marginLeft: "auto"
  },
})

export default connect()(Todo);