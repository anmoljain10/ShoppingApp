// CustomTabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import HomeScreen from './screens/home';
import Cart from './screens/cart';
import {theme} from './utils/theme';
import {
  faHome,
  faHeart,
  faEllipsisV,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './tabNavStyle';

const Tab = createBottomTabNavigator();

const CustomTabbar = ({state, descriptors, navigation}) => {
  const icons = [faHome, faBars, faHeart, faEllipsisV];

  return (
    <View style={styles.tabbarWrapper}>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = route.name;
          console.log(state, 'options');
          const isCurrentTabFocused = state.index === index; // Check if the tab is focused

          if (isCurrentTabFocused) {
            return (
              <Pressable
                key={index}
                onPress={() => navigation.navigate(route.name)}
                style={{
                  flex: 1,
                  borderBottomEndRadius: index === 3 ? 30 : 0,
                  borderTopEndRadius: index === 3 ? 30 : 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                  borderTopLeftRadius: isCurrentTabFocused ? 20 : 0,
                  borderTopRightRadius: isCurrentTabFocused ? 20 : 0,
                  borderTopStartRadius: index === 0 ? 30 : 0,
                  borderBottomStartRadius: index === 0 ? 30 : 0,
                  height: 70,
                  width: 70,
                  backgroundColor: theme.greyLight,
                  borderRadius: 60,
                }}>
                <View style={styles.iconWrapper}>
                  <FontAwesomeIcon
                    icon={icons[index]}
                    size={24}
                    color={theme.darkYellow}
                  />
                </View>
              </Pressable>
            );
          }
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate(route.name)}
              style={{
                flex: 1,
                borderBottomEndRadius: index === 3 ? 30 : 0,
                borderTopEndRadius: index === 3 ? 30 : 0,
                borderTopStartRadius: index === 0 ? 30 : 0,
                borderBottomStartRadius: index === 0 ? 30 : 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isCurrentTabFocused
                  ? 'transparent'
                  : theme.greyLight,
                padding: 10,
                borderTopLeftRadius: isCurrentTabFocused ? 20 : 0,
                borderTopRightRadius: isCurrentTabFocused ? 20 : 0,
                overflow: 'hidden',
              }}>
              <FontAwesomeIcon icon={icons[index]} size={24} />
              <Text style={{fontSize: 12}}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const CustomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabbar {...props} />}
      tabBarOptions={{
        showLabel: false, // Hide tab labels
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon title="Home" focused={focused} icon={faHome} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon title="Categories" icon={faBars} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon title="Favourite" focused={focused} icon={faHeart} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon title="More" focused={focused} icon={faEllipsisV} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const TabIcon = ({title, focused, icon}) => {
  if (focused) {
    return (
      <View style={styles.iconWrapper}>
        <FontAwesomeIcon
          icon={icon || faHome}
          size={24}
          color={theme.darkYellow}
        />
      </View>
    );
  }
  return (
    <View style={styles.justifyCenter}>
      <FontAwesomeIcon icon={icon || faHome} size={24} />
      <Text style={{fontSize: 12}}>{title}</Text>
    </View>
  );
};

export default CustomTabNavigator;
