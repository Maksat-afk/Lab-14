import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import ContactsScreen from '../task1/src/screens/ContactsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';

export default function App() {
  const [screen, setScreen] = useState<'contacts' | 'register'>('contacts');

  return (
    <View style={styles.container}>
      
      <View style={styles.switcher}>
        <Button title="Contacts" onPress={() => setScreen('contacts')} />
        <Button title="Register" onPress={() => setScreen('register')} />
      </View>

      <View style={{ flex: 1 }}>
        {screen === 'contacts' ? <ContactsScreen /> : <RegistrationScreen />}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  switcher: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#eee',
  },
});