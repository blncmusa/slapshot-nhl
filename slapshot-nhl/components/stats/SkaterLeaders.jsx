import * as React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import PointsLeaders from './categories/PointsLeaders';
import AssistLeaders from './categories/AssistLeaders';
import GoalLeaders from './categories/GoalLeaders';

const FirstRoute = () => (
  <PointsLeaders />
);

const SecondRoute = () => (
  <GoalLeaders />
)

const ThirdRoute = () => (
  <AssistLeaders />
);



const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function SkaterLeaders() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Points' },
    { key: 'second', title: 'Goals' },
    { key: 'third', title: 'Assists' },
  ]);

  return (
    <TabView
      style={styles.tabView}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ height: 50, width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
    tabView: {
        marginTop: hp('5%'),
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white',
        marginBottom: hp('1%')
    }
});