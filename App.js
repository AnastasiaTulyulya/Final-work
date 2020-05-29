import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

function isPrime(num) {
  let flag = true;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export default function App() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    let number = [];
    for (let i = 1; i < 200; i++) {
      if (isPrime(i)) {
        number.push(<Text key={i} style={styles.number}>{i}</Text>);
      }
    }
    setNumbers(number);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Простые числа от 0 до 200</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.scroll}>
        {
          numbers
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7b426b',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    color: "#fbf5e6"
  },
  scroll: {
    width: "100%",
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 16,
    color: "#fbf5e6"
  }
});
