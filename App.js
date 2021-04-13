import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [getPlayer1, setPlayer1] = useState(0);
  const [getPlayer2, setPlayer2] = useState(0);
  const [getTurn, setTurn] = useState(1);


  

  return (
    <View style={styles.container}>
      <Text style={{transform: [{rotate: '180deg'}], fontSize: 30, color: '#ffa1d0'}}>Player 2: {getPlayer2}</Text>

      <View style={styles.row}>
        <Pressable style={styles.button}>
        </Pressable>
        <Pressable style={styles.button}>
        </Pressable>
        <Pressable style={styles.button}>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}>
        </Pressable>
        <Pressable style={styles.button}>
        </Pressable>
        <Pressable style={styles.button}>
        </Pressable>
      </View>

      <View style={styles.row}>
        <Pressable style={styles.button}>
        </Pressable>
        <Pressable style={styles.button}>
        </Pressable>
        <Pressable style={styles.button}>
        </Pressable>
      </View>
      <Text style={{fontSize: 30, color: '#ffa1d0'}}>Player 1: {getPlayer1}</Text>
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
    width: '25%',
    height: '100%',
    textAlign: 'center',
    marginHorizontal: 2 
  }
});

export default App;