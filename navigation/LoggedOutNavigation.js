import { StackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";

const LoggedOutNavigation = StackNavigator({
  Login: {
    screen: LoginScreen,
  }
});

export default LoggedOutNavigation;
