import { createStackNavigator, createAppContainer, NavigationContainerComponent } from 'react-navigation';
import App from '_components/baseApp';
import Orders from '_components/orders';
import DetailOrder from '_components/detailOrder';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: App,
      navigationOptions: {
        header: null,
      }
    },
    Orders: {
      screen: Orders,
      navigationOptions: {
        header: null,
      }
    },
    Detail: {
      screen: DetailOrder,
      navigationOptions: {
        header: null,
      }
    },
  },
  
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
