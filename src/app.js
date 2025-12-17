import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { requestStoragePermission } from './services/permissions';
import { loadSongs } from './services/songLoader';
import { playSong } from './services/player';

export default function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function init() {
      const permission = await requestStoragePermission();
      if (!permission) return;

      await TrackPlayer.setupPlayer();
      const loadedSongs = await loadSongs();
      setSongs(loadedSongs);
    }

    init();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Music Library</Text>

      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => playSong(item)}
            style={{ paddingVertical: 10 }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
