# react-native-one-day-review
<b>English:</b><br>
Review studies of front-end development using react-native in one day
Before everything, Us need install all dependences to use react-native.
```
npm install -g expo-cli
```
```
expo init react-native-one-day-review
```

In this moment choose blank project for continue the progress:
```
cd react-native-one-day-review
npm start 
```
Now us already has a project on react native, but us need creat a Hello world mensage.

To this, open the `app.js` to change mensage
```Open up App.js to start working on your app!``` to ```Hello World```

This tutorial is on this <a href="https://facebook.github.io/react-native/docs/getting-started">link</a><br>

From now on we will include web components
on this <a href="https://facebook.github.io/react-native/docs/components-and-apis.html">link</a> you find examples of components and yours code exemples.<br> 

At the end of this tutorial, your `app.js` should look like this code:
```
import React from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
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
```

<hr>
<b>Portuguese:</b><br>
Revisão de estudos sobre desenvolvimento usando react-native em um dia
Antes de tudo, precisamos instalar todas as dependências para usar react-native.
```
npm install -g expo-cli
```
Agora iremos iniciar um projeto utilizando o `expo`
```
expo init react-native-one-day-review
```

Neste momento, escolha o projeto em branco para continuar o progresso:
```
cd react-native-one-day-review
npm init
```
Agora já temos um projeto em react-native, mas precisamos criar uma mensagem de Hello World(afinal temos que manter a tradição, não é?).

Para isso, abra o `app.js` para alterar a mensagem
```Open up App.js to start working on your app!``` para ```Hello World```

Este tutorial está no <a href="https://facebook.github.io/react-native/docs/getting-started"> link </a> <br>

A partir de agora, incluiremos componentes web
neste <a href="https://facebook.github.io/react-native/docs/components-and-apis.html"> link </a>, você encontra exemplos de componentes e exemplos de código. <br>

No final deste tutorial, seu `app.js` deve se parecer com este código:
```
importar Reagir de 'reagir';
import {StyleSheet, Text, View, Button, Alert} de 'react-native';

exportar a função padrão App () {
  Retorna (
    <View style = {styles.container}>
      <Text> Olá Mundo! </Text>
    </View>
  );
}

estilos de const = StyleSheet.create ({
  contêiner: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
```
