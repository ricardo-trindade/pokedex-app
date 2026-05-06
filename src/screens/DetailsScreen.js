import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import api from '../services/api';

export default function DetailsScreen({ route }) {
  const { pokemonName } = route.params;
  const [details, setDetails] = useState(null);

  useEffect(() => {
    api.get(`pokemon/${pokemonName}`).then(res => setDetails(res.data));
  }, []);

  if (!details) return <ActivityIndicator style={{flex: 1}} />;

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: details.sprites.other['official-artwork'].front_default }} 
        style={styles.image} 
      />
      <Text style={styles.name}>{details.name.toUpperCase()}</Text>
      <Text>Altura: {details.height / 10} m</Text>
      <Text>Peso: {details.weight / 10} kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  image: { width: 200, height: 200 },
  name: { fontSize: 28, fontWeight: 'bold', marginVertical: 10 }
});