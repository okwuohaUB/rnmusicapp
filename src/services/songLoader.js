import RNFS from 'react-native-fs';

export async function loadSongs() {
  const musicDir = RNFS.ExternalStorageDirectoryPath; // Android path

  const audioExtensions = ['mp3', 'wav', 'aac', 'm4a', 'ogg'];
  let songs = [];

  async function scanFolder(path) {
    const items = await RNFS.readDir(path);

    for (let item of items) {
      if (item.isDirectory()) {
        await scanFolder(item.path);
      } else {
        const ext = item.name.split('.').pop().toLowerCase();
        if (audioExtensions.includes(ext)) {
          songs.push({
            id: item.path,
            url: 'file://' + item.path,
            title: item.name.replace(/\.[^/.]+$/, ''),
          });
        }
      }
    }
  }

  await scanFolder(musicDir);
  return songs;
}
