import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const colors = ['#FFDDC1', '#C1E1FF', '#C1FFD7', '#FFD1C1'];  // Example colors
const decorations = ['🎂', '🎉', '🎈', '🎁'];  // Simple decoration emojis for demonstration

const CardEditor = ({ onSave }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');  // Default white background
  const [selectedDecoration, setSelectedDecoration] = useState(null);

  // Image picker function
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setBackgroundImage(result.uri);
    }
  };

  const saveCard = () => {
    const newCard = { name, message, backgroundImage, backgroundColor, decoration: selectedDecoration };
    onSave(newCard);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter the recipient's name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter a message"
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        multiline
      />

      {/* Background Image Preview */}
      {backgroundImage && (
        <Image source={{ uri: backgroundImage }} style={styles.backgroundImage} />
      )}
      
      {/* Background Color Selection */}
      <Text>Select a Background Color:</Text>
      <View style={styles.colorOptions}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorCircle, { backgroundColor: color }]}
            onPress={() => { setBackgroundColor(color); setBackgroundImage(null); }}
          />
        ))}
      </View>

      {/* Decoration Selection */}
      <Text>Select a Decoration:</Text>
      <View style={styles.decorations}>
        {decorations.map((decor) => (
          <TouchableOpacity key={decor} onPress={() => setSelectedDecoration(decor)}>
            <Text style={styles.decoration}>{decor}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Buttons with spacing */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpacing}>
          <Button title="Pick Background Image" onPress={pickImage} />
        </View>
        <View style={styles.buttonSpacing}>
          <Button title="Save Card" onPress={saveCard} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  backgroundImage: { width: '100%', height: 200, marginVertical: 10, borderRadius: 5 },
  colorOptions: { flexDirection: 'row', marginVertical: 10 },
  colorCircle: { width: 30, height: 30, borderRadius: 15, marginHorizontal: 5 },
  decorations: { flexDirection: 'row', marginVertical: 10 },
  decoration: { fontSize: 24, marginHorizontal: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  buttonSpacing: { flex: 1, marginHorizontal: 5 },
});

export default CardEditor;
