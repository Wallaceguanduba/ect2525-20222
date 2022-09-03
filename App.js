import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.texto}>Hello word</Text>
      <Text style={styles.texto}> ECT2525</Text>
      <Image style={styles.imagem}
      source={require('./assets/imagens/pernalonga.jpg')}></Image>'
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f11',

    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {fontSize: 70
  }
});
