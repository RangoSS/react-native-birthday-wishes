import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const decorationsList = ['🎉', '🎂', '🎈', '🎁'];

const Decorations = ({ selectedDecoration, onSelectDecoration }) => (
  <View style={styles.container}>
    {decorationsList.map((decoration) => (
      <TouchableOpacity
        key={decoration}
        style={[styles.decoration, selectedDecoration === decoration && styles.selected]}
        onPress={() => onSelectDecoration(decoration)}
      >
        <Text style={styles.decorationText}>{decoration}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 20 },
  decoration: { padding: 10, marginRight: 10, borderRadius: 8, backgroundColor: '#eee' },
  decorationText: { fontSize: 24 },
  selected: { backgroundColor: '#ddd' },
});

export default Decorations;
