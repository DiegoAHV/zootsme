import React, {Component} from 'react';
import {View, Text, Image , Linking} from 'react-native';
import {Card, CardSection, Button} from './common';
import axios from 'axios';
import firebase from 'firebase'

class VotingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {pic: ''};
  }

  componentWillMount() {
    //fetch and do logic to find the recent ones

    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // .then( response => this.setState({ pic: 'http://www.royalfashionist.com/wp-content/uploads/2014/12/kate-upton.jpg'}));
    const { currentUser} = firebase.auth();

    firebase.database().ref(`/users/${currentUser.uid}/pics`)
      .on('value', snapshot => {
        const snapshotValue = snapshot.val();
        console.log('######SNAPSHOT VALUE@@@@@',snapshotValue);
        const base64Image = `data:png;base64,${snapshotValue}`;

        this.setState({pic: base64Image})
      })
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
