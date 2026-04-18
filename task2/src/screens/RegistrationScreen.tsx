import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  View, Text, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView,
  Keyboard, TouchableWithoutFeedback
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa'
  },
  scrollContent: {
    padding: 20
  },
  headerArea: {
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  },
  inputGroup: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16
  },
  inputError: {
    borderColor: '#ff0000'
  },
  errorText: {
    color: '#ff0000',
    fontSize: 14,
    marginTop: 5
  },
  btn: {
    backgroundColor: '#0066cc',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  btnDisabled: {
    backgroundColor: '#ccc'
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default function RegistrationScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const validateEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setForm({ ...form, email: text });

    if (!emailRegex.test(text) && text.length > 0) {
      setErrors({ email: 'Invalid Student Email format' });
    } else {
      setErrors({ email: '' });
    }
  };

  const handleRegister = () => {
    Keyboard.dismiss();

    if (!errors.email && form.email && form.password) {
      console.log('Registration Payload:', form);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}

        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>

          <View style={styles.headerArea}>
            <Text style={styles.title}>Welcome Abroad</Text>
            <Text style={styles.subtitle}>
              Enter your details to register
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Askar Almatov"
              value={form.name}
              onChangeText={(t) => setForm({ ...form, name: t })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, errors.email ? styles.inputError : null]}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={form.email}
              onChangeText={validateEmail}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={form.password}
              onChangeText={(t) => setForm({ ...form, password: t })}
            />
          </View>

          <TouchableOpacity
            style={[
              styles.btn,
              (!form.email || !form.password || errors.email)
                ? styles.btnDisabled
                : null
            ]}
            disabled={!form.email || !form.password || !!errors.email}
            onPress={handleRegister}
          >
            <Text style={styles.btnText}>Create Account</Text>
          </TouchableOpacity>

        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}