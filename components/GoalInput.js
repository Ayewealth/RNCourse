import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
const GoalInput = ({ addGoalHandler, showModal, closeModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (e) => {
    setEnteredGoal(e.nativeEvent.text);
  };

  handleAddGoal = () => {
    addGoalHandler(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your Course Goal!"
          style={styles.textInput}
          onChange={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={handleAddGoal} color="#5e0acc" />
          <Button title="Cancel" color="#f31282" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 50,
    marginBottom: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "100%",
    padding: 10,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 16,
  },
});
