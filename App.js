import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FloorStack = createStackNavigator();

const FloorScreen = ({ navigation }) => {
  const floors = [
    { id: 1, name: 'Book Bank - 3rd Floor', image: require('./assets/floor-4.png') },
    { id: 2, name: 'Library - 2nd Floor', image: require('./assets/floor-3.png') },
    { id: 3, name: 'Examination Cell/HOD Room - 1st Floor', image: require('./assets/floor-2.png') },
    { id: 4, name: 'Faculty Rooms & Reception - Ground Floor', image: require('./assets/floor-1.png') },
  
    
    ,
   // { id: 5, name: 'Floor 5', image: require('./assets/floor-5.jpg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.containerMain}>
      {floors.map(floor => (
        <TouchableOpacity
          key={floor.id}
          style={styles.floorItem}
          onPress={() => navigation.navigate('FloorDetails', { floor })}
        >
          <Image source={floor.image} style={styles.floorImageMain} />
          <Text style={styles.floorName}>{floor.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const FloorDetailsScreen = ({ route }) => {
  const { floor } = route.params;

  return (
    <View style={styles.container}>
      <Image source={floor.image} style={styles.floorImage} />
      <Text style={styles.floorName}>{floor.name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <FloorStack.Navigator>
        <FloorStack.Screen name="Floor" component={FloorScreen} />
        <FloorStack.Screen name="FloorDetails" component={FloorDetailsScreen} />
      </FloorStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerMain: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  floorItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
  floorImage: {
    width: 340,
    height: 300,
  },
  floorImageMain: {
    width: 230,
    height: 200
  },
  floorName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left'
  },
});
