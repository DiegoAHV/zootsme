import React from 'react'
import { Text, Image } from 'react-native'
import {Card, CardSection} from './common'
import firebase from 'firebase'

const ResultsScreen = () => {
  return (
  <Card>
    <CardSection>
      <Image
        style={styles.imageStyle}
        source={ require('../config/elbuenodeChuck.jpg') }
      />
    </CardSection>
    <CardSection>
      <Text>Chart, Pie here</Text>
    </CardSection>
  </Card>
  )
}
const styles = {
  imageStyle: {
    height: 400,
    width: null,
    flex: 1
  }
}


export default ResultsScreen;
