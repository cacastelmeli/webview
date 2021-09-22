import React from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import { WebView } from 'react-native-webview'

const url = '<URL_A_PROBAR>'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: url
        }}
        onLoad={e => {
          console.log('URL:', e.nativeEvent.url)
        }} />
    </View>
  );
};

export default App;
