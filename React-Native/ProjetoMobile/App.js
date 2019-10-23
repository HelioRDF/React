import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {  Image,StyleSheet } from 'react-native';

import HomeL from './src/screens/Home';
import Contato from './src/screens/Contato';
import Horario from './src/screens/Horario';
import Sobre from './src/screens/Sobre';

const Navegador = createBottomTabNavigator({
  Home:{
    screen:HomeL,
    navigationOptions: {
      title: 'Restaurante X',
      tabBarLabel: 'Home',
      tabBarIcon: (focused, tintColor) => {
        if (focused) {
            return (
                <Image source={require('./src/screens/images/home_azul.png')} style={styles.icone} />
            );
        } else {
            return (
                <Image source={require('./src/screens/images/home_preto.png')} style={styles.icone} />
            );
        }
    }
    }
  },
  Contato:{
    screen:Contato
  },
  Horario:{
    screen:Horario
  },
  Sobre:{
    screen:Sobre
  },
  
},
{
  tabBarOptions:{
    showIcon:true
  }

});

export default createAppContainer(Navegador);


const styles = StyleSheet.create({
  icone: {
      width: 26,
      height: 26
  }
});