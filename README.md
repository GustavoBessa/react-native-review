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
cd AwesomeProject
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

