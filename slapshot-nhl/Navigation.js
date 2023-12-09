import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Component from './Imports';
import { Entypo, Ionicons, Fontisto, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ArticleDetailsScreen from './components/ArticleDetailsScreen';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabLabel = ({ label, focused }) => {
  return (
    <Text style={{ fontWeight: focused ? '500' : '300', color: focused ? 'black' : '#aaaaaa' }}>{label}</Text>
  );
};

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        headerRight: () => (
          <Image
            source={require('./assets/logo.png')}
            style={{
              width: 30,
              height: 30,
              marginRight: 20,
            }}
          />
        ),
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          return <FontAwesome5 name={iconName} size={size} color={focused ? color : 'green'} />;
        },
        tabBarStyle: {
          paddingTop: 5
        },
        tabBarLabel: ({ focused }) => <CustomTabLabel label={route.name} focused={focused} />,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Component.HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="home" size={22} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Stats"
        component={Component.StatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="stats-chart" size={22} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Component.StandingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Fontisto name="list-1" size={22} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="Scores"
        component={Component.ScoresScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="scoreboard-outline" size={22} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName={Component.HomeScreen}
      screenOptions={{
        headerShown: false
      }} 
    >
      <Stack.Screen 
        name="Main" 
        component={MainNavigator}
        />
      <Stack.Screen 
        name="ArticleDetails" 
        component={Component.ArticleDetailsScreen}
        options={{
          presentation: "card",
          title: 'Details',
          headerShown: false,
          gestureEnabled: true,
          // gestureDirection: "horizontal",
          gestureResponseDistance: 200
        }}
        />
    </Stack.Navigator>
  );
}

export default Navigation;
