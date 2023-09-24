import { useNavigation } from '@react-navigation/native'
import Atores from './Atores'
import react, { useEffect, useState } from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

export const FilmesDetalhes = ({ navigation, route }) => {

  const navigateToActorDetails = (actorId) => {
    navigation.push('atores-detalhes', { actorId })
  }
  const [filme, setFilme] = useState([])
  const [atores, setAtores] = useState([])

  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/movie/${id}`).then(resultado => {
      setFilme(resultado.data)
    })
    apiFilmes.get(`/movie/${id}/credits`).then(resultado => {
      setAtores(resultado.data.cast)
    })


  }, [])


  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        <Card style={{ marginBottom: 15 }}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} resizeMode="contain"/>
          <Card.Content>
            <Text variant="titleLarge">{filme.title}</Text>
            <Text variant="bodyMedium">{filme.overview}</Text>
          </Card.Content>
        </Card>
        <Card mode='outlined' style={{ marginBottom: 15 }}>
          <Card.Content>
            <Text variant="bodyMedium">Orçamento: {filme.budget}</Text>
            <Text variant="bodyMedium">Voto: {filme.vote_average}</Text>
            <Text variant="bodyMedium">Duração: {filme.runtime} min.</Text>
            <Text variant="bodyMedium">Lançamento: {filme.release_date}</Text>
          </Card.Content>
        </Card>

        <Text variant='titleLarge' style={{ color: 'black' }}>Atores</Text>

        {atores.map(item => (
          <Card mode='outlined' style={{ marginBottom: 15 }} key={item.id}>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar.Image source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} />
              <Card.Title
                title={item.character}
                subtitle={item.name}
              />
              <Button
                mode="text"
                icon="chevron-right"
                onPress={() => navigateToActorDetails(item.id)}
                style={{ marginLeft: 'auto' }}
              />


            </Card.Content>
          </Card>
        ))}


      </ScrollView>

    </>
  )
}

export default FilmesDetalhes