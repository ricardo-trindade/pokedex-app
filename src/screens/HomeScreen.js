import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../services/api';

export default function HomeScreen({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('pokemon?limit=20') // Pega os primeiros 20
      .then(res => {
        setPokemon(res.data.results);
        setLoading(false);
      })
      .catch(err => alert("Erro ao carregar Pokémons"));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#EF5350" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Details', { pokemonName: item.name })}
          >
            <Text style={styles.title}>{item.name.toUpperCase()}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 10, elevation: 2 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' }
});