import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import FilmesPopulares from './FilmesPopulares';
import FilmesDetalhes from './FilmesDetalhes';
import Atores from './Atores';

const Stack = createNativeStackNavigator();

const FilmesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name='filmes-populares' component={FilmesPopulares} options={{ title: 'Populares' }} />
                <Stack.Screen name='filmes-detalhes' component={FilmesDetalhes} options={{ title: 'Detalhes' }} />
                <Stack.Screen name='atores-detalhes' component={Atores} options={{ title: 'Atores' }} />
            </Stack.Navigator>
        </>
    )
}

export default FilmesStack