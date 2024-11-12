import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CardEditor from '../../components/CardEditor';
import CardGallery from '../../components/CardGallery';

const App = () => {
  const [cards, setCards] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const loadCards = async () => {
      const savedCards = await AsyncStorage.getItem('birthdayCards');
      if (savedCards) setCards(JSON.parse(savedCards));
    };
    loadCards();
  }, []);

  const saveCard = async (newCard) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    await AsyncStorage.setItem('birthdayCards', JSON.stringify(updatedCards));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isEditing ? (
        <CardEditor onSave={(card) => { saveCard(card); setIsEditing(false); }} />
      ) : (
        <>
          <Button title="Create New Card" onPress={() => setIsEditing(true)} />
          <CardGallery cards={cards} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
});

export default App;
