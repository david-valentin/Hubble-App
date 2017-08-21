/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 // TODO:
 // Display a view of all the responses of the donorschoose
 // Create more middleware/redux stuf for it
 // Be able to handle those requests on a pull refresh
 // Look at what your parsing 

import React, { Component } from 'react';
import {
 Text,
 View,
 StyleSheet,
 ListView,
 ActivityIndicator,
 ScrollView,
 Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import DonationItem from './DonationItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor : 'white'
  },
  welcome : {
    fontSize : 20,
    textAlign : 'center',
    textAlignVertical : 'center',
    margin : 10,
  },
  icon : {
    paddingBottom : 2
  },
  spinner : {
    position : 'absolute',
    height : Dimensions.get('window').height,
    width : Dimensions.get('window').width,
  }
});

class HubbleHomeView extends Component {

  constructor() {
    super()
    this.state = {
      proposals: null,
      fetchingData : false
    }

  }

  // need to add navigation options
  static navigationOptions = {
      tabBarLabel : 'Donation Details',
      tabBarIcon : ({tintColor}) => (
        <Icon name = {'rocket'} size={45} style={{color: tintColor}} />
      )
  }

  componentWillMount() {

      this.setState({fetchingData : true})
      // Make REST API Calls here
      fetch('https://api.donorschoose.org/common/json_feed.html?subject4=6&APIKey=DONORSCHOOSE')
        .then(response => response.json())
        .then(projects => projects.proposals.map((project) => {
            console.log("This project: " + project.city)
            console.log("City: " + project.title)
            console.log(project)
            var currentObj = project;
            const projectArray = [];
            projectArray.push(currentObj)
            this.setState({proposals : projectArray})
            this.setState({fetchingData : false})
      }))
      .catch(err => console.error('error fetching products', err))

      // before the component mounts - will execute the code
        const ds = new ListView.DataSource({
          rowHasChanged : (r1, r2) => r1 !== r2,
        })
        this.dataSource = ds.cloneWithRows(this.props.people)

  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <ActivityIndicator size= "large"
          style={styles.spinner}
          animating = {this.state.fetching}
        />
        <ListView
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) =>
            <DonationItem people={rowData} />
          }
        />
      </ScrollView>
    );

  }
}

// map props to the state
const mapStateToProps = (state) => {
  return { people: state.people }
};

export default connect(mapStateToProps)(HubbleHomeView);
