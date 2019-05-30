import {
  NavigationActions,
  NavigationContainerComponent,
  NavigationParams
} from 'react-navigation';

let navigator: NavigationContainerComponent;

const setTopLevelNavigator = (
  navigatorRef: NavigationContainerComponent | null
) => {
  if (navigatorRef) {
    navigator = navigatorRef;
  }
};

const navigate = (routeName: string, params?: NavigationParams) => {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
};

export default {
  setTopLevelNavigator,
  navigate
};