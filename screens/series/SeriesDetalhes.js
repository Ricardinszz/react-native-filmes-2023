import { useNavigation } from '@react-navigation/native'

import React, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { FlatList, ScrollView, View, Image } from 'react-native' 


const CardActor = ({ item }) => {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Content style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Image
          source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }}
          style={{ width: 50, height: 50, borderRadius: 25 }} 
        />
        <Text style={{ marginLeft: 10, flex: 1 }}>{item.name}</Text>
        
      </Card.Content>
    </Card>
  )
}

export const SeriesDetalhes = ({ navigation, route }) => {
  const navigateToActorDetails = (actorId) => {
    navigation.navigate('ActorDetails', { id: actorId })
  }
  const [serie, setSerie] = useState([])
  const [atores, setAtores] = useState([])

  useEffect(() => {
    const id = route.params.id

    apiFilmes.get(`/tv/${id}`).then((resultado) => {
      setSerie(resultado.data)
    })

    apiFilmes.get(`/tv/${id}/credits`).then((resultado) => {
      setAtores(resultado.data.cast)
    })
  }, [])

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        <Card style={{ marginBottom: 15 }}>
          <Card.Cover
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + serie.backdrop_path }}
            resizeMode="contain"
          />
          <Card.Content>
            <Text variant="titleLarge">{serie.name}</Text>
            <Text variant="bodyMedium">{serie.overview}</Text>
          </Card.Content>
        </Card>
        <Card mode="outlined" style={{ marginBottom: 15 }}>
          <Card.Content>
            <Text variant="bodyMedium">Voto: {serie.vote_average}</Text>

            <Text variant="bodyMedium">Duração: {serie.episode_run_time} min.</Text>

            <Text variant="bodyMedium">Lançamento: {serie.first_air_date}</Text>
          </Card.Content>
        </Card>

        
        <View style={{ marginBottom: 15 }}> 
          
          <Text variant='titleLarge' style={{ color: 'black', textAlign: 'left' }}>Atores</Text>
        </View>
        <Card mode="outlined" style={{ marginBottom: 15 }}>
          <Card.Content>
            <FlatList
              data={atores}
              horizontal={false}
              renderItem={({ item }) => (
                
                <CardActor item={item} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </>
  )
}

export default SeriesDetalhes
