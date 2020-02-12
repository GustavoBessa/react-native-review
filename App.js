import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Precione o botão para exibir um alerta!</Text>
      <Button
            title="Enviar"
            onPress={() => Alert.alert('Olá sou um alerta')}
          />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
