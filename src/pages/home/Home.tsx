import React from 'react'
import {View, Text} from 'react-native'
import styles from './Home.scss'

type Props = {}

const Home = (props: Props) => {
  return (
    <View testID="Home" style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home