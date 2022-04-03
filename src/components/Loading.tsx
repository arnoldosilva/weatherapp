import React from 'react'
import {StyleSheet} from 'react-native'
import {MotiView} from 'moti'
import ShapeA from './ShapeA'
import ShapeB from './ShapeB'
import ShapeC from './ShapeC'



export default function Loading() {
  return (
    <MotiView style={styles.container} testID="loading">
      {ShapeA(300, 300, styles.shape1)}
      {ShapeA(500, 500, styles.shape3)}
      {ShapeB(200, 200, styles.shape2)}
      {ShapeC(800, 400, styles.shape4)}
    </MotiView>
  )
}

const styles = StyleSheet.create({
  shape1: {
    justifyContent: 'center',
    height: 30,
    width: 30,
    left: 70,
    top: -50,
    marginRight: 10,
    backgroundColor: '#FECC00',
  },
  shape2: {
    justifyContent: 'center',
    height: 60,
    width: 60,
    top: -35,
    left: 40,
    marginRight: 10,
  },
  shape3: {
    justifyContent: 'center',
    height: 30,
    width: 30,
    top: 20,
    left: 110,
    marginRight: 10,
    backgroundColor: '#FECC00',
  },
  shape4: {
    justifyContent: 'center',
    height: 60,
    width: 60,
    top: 5,
    right: 80,
    marginRight: 10,
    transform: [{rotateX: "60deg"},],
  },

  icon: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
})