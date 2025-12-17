/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import TrackPlayer from 'react-native-track-player';
import service from './src/services/service';

AppRegistry.registerComponent('MusicPlayer', () => App);
TrackPlayer.registerPlaybackService(() => service);
