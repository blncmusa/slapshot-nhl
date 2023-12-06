import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Component from './Imports'

// Icons
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Component.HomeScreen}
        options={{
            tabBarIcon: ({color, size}) => {
                return <Entypo name="home" size={24} color="black" />
            }
        }} />
      <Tab.Screen 
        name="Stats" 
        component={Component.StatsScreen} 
        options={{
            tabBarIcon: ({color, size}) => {
                return <Ionicons name="stats-chart" size={24} color="black" />
            }
        }}/>
      <Tab.Screen 
        name="Standings" 
        component={Component.StandingsScreen} 
        options={{
            tabBarIcon: ({color, size}) => {
                return <Fontisto name="list-1" size={24} color="black" />
            }
        }}/>
      <Tab.Screen 
        name="Scores" 
        component={Component.ScoresScreen} 
        options={{
            tabBarIcon: ({color, size}) => {
                return <MaterialCommunityIcons name="scoreboard-outline" size={24} color="black" />
            }
        }}/>
    </Tab.Navigator>
  );
}

export default Navigation