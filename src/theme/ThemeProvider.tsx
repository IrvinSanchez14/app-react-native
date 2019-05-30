import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import getTheme from '_theme/native-base-theme/components';
import material from '_theme/native-base-theme/variables/material';
interface Props {}

const ThemeProvider = (WrappedComponent: any) => {
  class HOC extends Component<Props> {
    render() {
      return (
        <StyleProvider style={getTheme(material)}>
          <WrappedComponent/>
        </StyleProvider>
      )
    }
  }
    
  return HOC;
};
export default ThemeProvider;
