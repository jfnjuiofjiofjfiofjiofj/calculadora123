import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('0');

  const calcular = (operacao) => {
    const n1 = Number(valor1) || 0;
    const n2 = Number(valor2) || 0;

    switch (operacao) {
      case 'somar':
        setResultado(String(n1 + n2));
        break;
      case 'subtrair':
        setResultado(String(n1 - n2));
        break;
      case 'multiplicar':
        setResultado(String(n1 * n2));
        break;
      case 'dividir':
        setResultado(n2 !== 0 ? String(n1 / n2) : '0');
        break;
    }
  };

  return (
    <View style={styles.cont}>
      <View style={styles.container}>

        <Text style={styles.titulo}>CALCULADORA</Text>

        <TextInput
          style={styles.numero}
          placeholder="valor 01"
          placeholderTextColor="#ff7f7f"
          keyboardType="numeric"
          value={valor1}
          onChangeText={setValor1}
        />

        <TextInput
          style={styles.numero}
          placeholder="valor 02"
          placeholderTextColor="#ff7f7f"
          keyboardType="numeric"
          value={valor2}
          onChangeText={setValor2}
        />

        <View style={styles.butCont}>
          <View style={styles.butao}>
            <Button title="SOMAR" onPress={() => calcular('somar')} color="green" />
          </View>

          <View style={styles.butao}>
            <Button title="SUBTRAIR" onPress={() => calcular('subtrair')} color="pink" />
          </View>

          <View style={styles.butao}>
            <Button title="MULTIPLICAR" onPress={() => calcular('multiplicar')} color="darkred" />
          </View>

          <View style={styles.butao}>
            <Button title="DIVIDIR" onPress={() => calcular('dividir')} color="blue" />
          </View>
        </View>

        <View style={styles.resultadocont}>
          <Text style={styles.resultado}>{resultado}</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    backgroundColor: '#c9d6e8',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  numero: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
  },
  butCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  butao: {
    flex: 1,
    marginHorizontal: 2,
  },
  resultadocont: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  resultado: {
    color: '#fff',
    fontSize: 28,
    textAlign: 'center',
  },
});