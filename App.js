import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

var array = ["", "", "", "", "", "", "", "", ""];
const App = () => {
  const [getScore1, setScore1] = useState(0);
  const [getScore2, setScore2] = useState(0);
  const [getResult, setResult] = useState("");
  const [getTurn, setTurn] = useState(1);

  const checkTurn = (num) => {
    if (array[num] == "") {
      if (getTurn % 2 == 1) {
        array[num] = 'X';
        setTurn(getTurn + 1)
      } else {
        array[num] = 'O';
        setTurn(getTurn + 1)
      }
    }
  }

  const checkSequence = () => {

    const sequence = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],];

    for (var i = 0; i < sequence.length; i++) {
      const [x, y, z] = sequence[i];
      if(array[x] != '' && array[y] != '' && array[z] != ''){
        if (array[x] == array[y] && array[y] == array[z] ) {
          checkWinner();
          setResult(array[x]);
          break;
        }
      }
    }
  }

  const checkWinner = () => {
    if (getResult == "X") {
      setScore1(getScore1 + 1);
      resetArray();
      setResult("");
    } else if (getResult == "O") {
      setScore2(getScore2 + 1);
      resetArray();
      setResult("");
    }
  }

  const resetArray = () => {
    array = ["", "", "", "", "", "", "", "", ""];
  }

  return (
    <View style={styles.container}>
      <Text style={{ transform: [{ rotate: '180deg' }], fontSize: 35, color: '#ff82c1', fontWeight: 'bold' }}>Player 2: {getScore2}</Text>

      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(0);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[0]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(1);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[1]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(2);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[2]}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(3);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[3]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(4);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[4]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(5);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[5]}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(6);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[6]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(7);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[7]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(8);
            checkSequence();
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[8]}</Text>
        </Pressable>
      </View>

      <Text style={{ fontSize: 35, color: '#ff82c1', fontWeight: 'bold' }}>Player 1: {getScore1}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#78c4d4'
  },
  row: {
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-evenly',
    marginVertical: 2
  },
  text: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#ffd880',
    width: 90,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2
  }
});

export default App;