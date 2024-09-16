import React from 'react';

import StackRoutes from './stackRoutes';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';

import CustomDrawer from '../components/CustomDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    screenOptions={{
      //headerShown: false,
      
      drawerActiveBackgroundColor: '#00dae4',
      drawerActiveTintColor: '#FFF',

      drawerInactiveBackgroundColor: '#F1F1F1',
      drawerInactiveTintColor: '#000'
    }}
    >
      <Drawer.Screen
      name='HomeStack'
      component={StackRoutes}
      options={{
        title: 'Inicio'
      }}
      />

      <Drawer.Screen
      name='Sobre'
      component={Sobre}
      />

      <Drawer.Screen
      name='Contato'
      component={Contato}
      />
    </Drawer.Navigator>
  );
}
