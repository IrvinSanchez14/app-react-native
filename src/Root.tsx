import React from 'react';

import { StoreProvider } from '_modules/store/';
import NavigationService from '_navigation/NavigationService';
import AppNavigator from '_navigation/AppNavigator';
import ThemeProvider from '_theme/ThemeProvider';

function Root(){
  return(
    <StoreProvider>
      <AppNavigator ref={ navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}/>
    </StoreProvider>
  )
}

export default ThemeProvider(Root);
