import React from 'react'
import {StyleSheet, Image} from 'react-native'
import {MotiView} from 'moti'


function Shape() {
  return (
    <MotiView
      from={{
        translateY: -100,
        rotate: -45,
      }}
      animate={{
        translateY: 0,
        rotate: 0,
      }}
      transition={{
        loop: true,
        type: 'timing',
        duration: 1500,
        delay: 100,

      }}
      style={styles.shape}
      children={<Image source={require('../../assets/icon.png')} style={styles.icon} />
      }
    />
  )
}

export default function Loop() {
  return (
    <MotiView style={styles.container}>
      <Shape />
    </MotiView>
  )
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 100,
    width: 100,
    marginRight: 10,
    backgroundColor: 'white',
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