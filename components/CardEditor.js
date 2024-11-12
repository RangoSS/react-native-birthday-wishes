import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Decorations from './Decorations';

const CardEditor = ({ onSave }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [decoration, setDecoration] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) setImage(result.uri);
  };

  const saveCard = () => {
    onSave({ name, message, image, decoration });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Reader's Name:</Text>
      <TextInput style={styles.input} placeholder="Enter name" value={name} onChangeText={setName} />

      <Text style={styles.label}>Message:</Text>
      <TextInput style={styles.input} placeholder="Enter message" value={message} onChangeText={setMessage} multiline />

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : <Text>Select an Image</Text>}
      </TouchableOpacity>

      <Text style={styles.label}>Decorations:</Text>
      <Decorations selectedDecoration={decoration} onSelectDecoration={setDecoration} />

      <Button title="Save Card" onPress={saveCard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontSize: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 15 },
  imagePicker: { marginBottom: 20, height: 100, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 8 },
  image: { width: '100%', height: '100%' },
});

export default CardEditor;
