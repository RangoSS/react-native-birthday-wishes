import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardGallery = ({ cards }) => (
  <View style={styles.gallery}>
    {cards.map((card, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.name}>{card.name}</Text>
        <Text style={styles.message}>{card.message}</Text>
        {card.image && <Image source={{ uri: card.image }} style={styles.image} />}
        {card.decoration && <Text style={styles.decoration}>{card.decoration}</Text>}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  gallery: { flexDirection: 'row', flexWrap: 'wrap' },
  card: {
    width: 300, // Approx. 18 rem
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    margin: 10,
  },
  name: { fontSize: 20, fontWeight: 'bold' },
  message: { fontSize: 16, marginVertical: 10 },
  image: { width: '100%', height: 100, resizeMode: 'cover', borderRadius: 8 },
  decoration: { fontSize: 24, textAlign: 'center', marginTop: 10 },
});

export default CardGallery;
