import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const AtoresPopulares = ({ navigation }) => {
  const [atores, setAtores] = useState([])

  useEffect(() => {
    apiFilmes.get('/person/popular?language=pt-BR').then(resultado => {
      setAtores(resultado.data.results)
    })
  }, [])

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        {atores.map(item => (
          <Card style={{ marginTop: 5, margin: 5 }} key={item.id}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} resizeMode="contain"/>
            <Card.Content>
              <Text variant="titleLarge">{item.name}</Text>
              <Text variant="bodyMedium">{item.known_for_department}</Text>
            </Card.Content>
            <Card.Actions>
              
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </>
  )
}

export default AtoresPopulares
