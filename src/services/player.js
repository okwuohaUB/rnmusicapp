import TrackPlayer from 'react-native-track-player';

export async function playSong(song) {
  await TrackPlayer.reset();
  await TrackPlayer.add(song);
  await TrackPlayer.play();
}
