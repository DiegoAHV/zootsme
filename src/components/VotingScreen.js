import React, {Component} from 'react';
import {View, Text, Image , Linking} from 'react-native';
import {Card, CardSection, Button} from './common';
import axios from 'axios';

class VotingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {pic: ''};
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then( response => this.setState({ pic: 'http://www.royalfashionist.com/wp-content/uploads/2014/12/kate-upton.jpg'}));
  }

  render() {
    if (!this.state.pic) return <Text>Loading...</Text>
    return (
      <Card>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{uri:this.state.pic}}
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Linking.openURL('http://www.mundodeportivo.com')}>
            YES
          </Button>
          <Button>
            NO
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imageStyle: {
    height: 400,
    width: null,
    flex: 1
  },
}
export default VotingScreen;
