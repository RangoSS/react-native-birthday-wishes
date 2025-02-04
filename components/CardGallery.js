import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const CardGallery = ({ cards }) => {
  return (
    <FlatList
      data={cards}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
          {item.backgroundImage && (
            <Image source={{ uri: item.backgroundImage }} style={styles.backgroundImage} />
          )}
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.message}>{item.message}</Text>
          
          {/* Decoration Overlay */}
          {item.decoration && <Text style={styles.decoration}>{item.decoration}</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },
  backgroundImage: { width: '100%', height: 200, borderRadius: 8 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  message: { fontSize: 16, marginTop: 5, textAlign: 'center' },
  decoration: { fontSize: 32, position: 'absolute', bottom: 10, right: 10 },
});

export default CardGallery;
