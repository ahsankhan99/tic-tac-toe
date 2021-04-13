import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const array = ["", "", "", "", "", "", "", "", ""];
const App = () => {
  const [getPlayer1, setPlayer1] = useState(0);
  const [getPlayer2, setPlayer2] = useState(0);
  const [getTurn, setTurn] = useState(1);

  const checkTurn = (num) => {
    if (array[num] == "") {
      if (getTurn % 2 == 1) {
        array[num] = 'X';
      } else {
        array[num] = 'O';
      }
    } else {
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{ transform: [{ rotate: '180deg' }], fontSize: 35, color: '#ff82c1', fontWeight: 'bold' }}>Player 2: {getPlayer2}</Text>

      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(0);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[0]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(1);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[1]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(2);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[2]}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(3);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[3]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(4);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[4]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(5);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[5]}</Text>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(6);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[6]}</Text>
        </Pressable>
        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(7);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[7]}</Text>
        </Pressable>

        <Pressable style={styles.button}
          onPress={() => {
            checkTurn(8);
            setTurn(getTurn + 1)
          }}
        >
          <Text style={{ fontSize: 80, color: '#ffa1d0' }}>{array[8]}</Text>
        </Pressable>
      </View>

      <Text style={{ fontSize: 35, color: '#ff82c1', fontWeight: 'bold' }}>Player 1: {getPlayer1}</Text>
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