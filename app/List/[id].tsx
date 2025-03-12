import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Details = () => {
    //extract params
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Budget history Details: {id} </Text>
    </View>
  )
}

export default Details