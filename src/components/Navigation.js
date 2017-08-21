
import {StackNavigator, TabNavigator} from 'react-navigation';
import PeopleList from './PeopleList';
import UserSettings from './UserSettings';
import HubbleHomeView from './HubbleHomeView';


const Navigation = TabNavigator({
  PeopleList : { screen : PeopleList},
  HubbleHomeView : { screen : HubbleHomeView },
  UserSettings : {screen : UserSettings },
}, {
    tabBarOptions : {
      activeTintColor : 'white',
      inactiveTintColor : "#117ead",
      swipeEnabled : true,
      swipeEnabled : true,
      showLabel : false,
      style : {
        backgroundColor : "#03a9f4"
      },
    },
});


export default Navigation;
