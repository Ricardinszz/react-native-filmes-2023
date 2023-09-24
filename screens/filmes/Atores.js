import React, { useEffect, useState } from 'react'
import { Avatar, Card, List, Text } from 'react-native-paper'
import { useRoute } from '@react-navigation/native'
import apiFilmes from '../../services/apiFilmes'
import { FlatList, ScrollView } from 'react-native'



export const Atores = ({ navigation, route }) => {

  const [ator, setAtor] = useState([])
  const [filmes, setFilmes] = useState([])

  const renderItem = ({ item }) => (
    <Card mode='outlined' style={{ marginBottom: 15 }}>
      <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Card.Title
          title={item.title}
          subtitle={item.release_date.slice(0, 4)}
        />
        <Text variant="bodyMedium" style={{ marginLeft: 'auto' }}>{item.character}</Text>
      </Card.Content>
    </Card>
  )




  useEffect(() => {
    const id = route.params.actorId
    apiFilmes.get(`/person/${id}`).then(resultado => {
      setAtor(resultado.data)
    })
    apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
    setFilmes(resultado.data.cast)
  })
  }, [])
  


  return (
    <ScrollView style={{ padding: 15 }}>
      <Card style={{ marginBottom: 15 }}>
        <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} resizeMode="contain"/>
        <Card.Content>
          <Text variant="titleLarge">{ator.name}</Text>
          <Text variant="bodyMedium">{ator.biography}</Text>
        </Card.Content>
      </Card>
      <Card mode='outlined' style={{ marginBottom: 15 }}>
        <Card.Content>
          <List.Item
            title="Sexualidade"
            description={ator.gender === 1 ? "Feminina" : "Masculina"}
            left={() => <List.Icon icon="gender-male-female" />}
          />
          <List.Item
            title="Data de nascimento"
            description={ator.birthday}
            left={() => <List.Icon icon="calendar" />}
          />
          <List.Item
            title="Lugar de nascimento"
            description={ator.place_of_birth}
            left={() => <List.Icon icon="map-marker" />}
          />
        </Card.Content>
      </Card>

      <Text variant='titleLarge' style={{ color: 'black' }}>Filmes</Text>
      <FlatList
        data={filmes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  )
  
  
}

export default Atores