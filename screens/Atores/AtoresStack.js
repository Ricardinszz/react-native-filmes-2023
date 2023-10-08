import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AtoresPopulares from './AtoresPopulares';

const Stack = createNativeStackNavigator();

const AtoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='Atores-populares' component={AtoresPopulares} options={{ title: 'Populares' }} />
            </Stack.Navigator>
        </>
    )
}

export default AtoresStack