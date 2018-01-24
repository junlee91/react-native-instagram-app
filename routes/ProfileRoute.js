import { StackNavigator } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import sharedRoutes, { sharedOptions } from "./sharedRoutes";

const ProfileRoute = StackNavigator(
  {
    Home: {
      screen: ProfileScreen
    },
    ...sharedRoutes
  },
  {
    ...sharedOptions
  }
);

export default ProfileRoute;
