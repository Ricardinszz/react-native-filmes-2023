import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const SeriesPopulares = ({ navigation }) => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    
    apiFilmes.get('/tv/popular?language=pt-BR').then(resultado => {
      setSeries(resultado.data.results)
    })
  }, [])

  return (
    <>
      <ScrollView style={{ padding: 15 }}>
        {series.map(item => (
          <Card style={{ marginTop: 5, margin: 5 }} key={item.id}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} resizeMode="contain"/>
            <Card.Content>
              
              <Text variant="titleLarge">{item.name}</Text>
              <Text variant="bodyMedium">{item.overview}</Text>
            </Card.Content>
            <Card.Actions>
              
              <Button icon="application" mode="contained" onPress={() => navigation.push('series-detalhes', { id: item.id })}>
                Detalhes
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </>
  )
}

export default SeriesPopulares
