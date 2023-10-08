import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SeriesPopulares from './SeriesPopulares';
import SeriesDetalhes from './SeriesDetalhes';



const Stack = createNativeStackNavigator();

const SeriesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='series-populares' component={SeriesPopulares} options={{ title: 'Populares' }} />
                <Stack.Screen name='series-detalhes' component={SeriesDetalhes} options={{ title: 'Detalhes' }} />
                
            </Stack.Navigator>
        </>
    )
}

export default SeriesStack