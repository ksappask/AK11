import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyMatchesScreen from "./MyMatches/MyMatchesScreen";
import HomeScreen from "./HomeScreen";
import WalletScreen from "./Wallet/WalletScreen";
import MoreScreen from "./More/MoreScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

function HomeBottomTab() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: "#662d91",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
        screenOptions={{
          tabBarStyle: { position: "absolute" },
        }}
      />
      <BottomTab.Screen
        name="MyMatches"
        component={MyMatchesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trophy" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-wallet" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="more-vert" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default HomeBottomTab;
