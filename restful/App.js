import React, { Component } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Title, Paragraph, Card, TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 8,
      wakeHour: 7,
      wakeMin: 0,
      sleepHour: 11,
      sleepMin: 0,
      sleepOk: '#22b344',
      sleepMsg: 'Great job!',
      show: false,
      mode: 'time',
      date: new Date('2020-01-01T01:01:01'),
    }
  }

  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }

  showTimepicker = () => {
    this.show('time');
  }

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }


  onTap() {
    console.log("pressed");
  }

  render() {
    return (
      <View style={[styles.indigo, {flex:1, paddingVertical: 20}]}>
        <View style={styles.top}></View>
        <View style={styles.title}>
          <Title style={{fontSize: 40, paddingTop: 20, color:'white'}}>restful.</Title>
          <Paragraph style={{color:'white', fontSize: 18}}>Sleep better. Live better.</Paragraph>
        </View>
        <View>
        <View style={{padding: 20, paddingVertical: 20}}>
          <View style={{paddingVertical:5}}>
          <Card style={styles.orange}>
            <Card.Content>
              <View style={{justifyContent:'center'}}>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                  <Text style={{color: 'white', fontSize: 22}}>Wake up at   </Text>
                  <Button color='#f78c5e' onPress={this.showTimepicker} mode='contained'>{this.state.wakeHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} {this.state.wakeMin.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} AM</Button>
                </View>
                <View style = {styles.lineStyle} />
                <Button onPress={this.onTap} labelStyle={{fontSize:18}} color='white'>Set alarm</Button>
              </View>
            </Card.Content>
          </Card>
          </View>
          <View style={{paddingVertical:5}}>
          <Card style={styles.blue}>
            <Card.Content>
              <View style={{justifyContent:'center'}}>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Text style={{color: 'white', fontSize: 22}}>Sleep at   </Text>
                <Button color='#59abd9' onPress={this.showTimepicker} mode='contained'>{this.state.sleepHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} {this.state.sleepMin.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} PM</Button>
                </View>
                <View style = {styles.lineStyle} />
                <Button onPress={this.onTap} labelStyle={{fontSize:18}} color='white'>Set reminder</Button>
              </View>
            </Card.Content>
          </Card>
          </View>
          <View style={{paddingVertical:5}}>
          <Card style={{backgroundColor: this.state.sleepOk, borderRadius: 16}}>
            <Card.Content>
              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 22}}>Sleep for {this.state.hours} hour(s) tonight</Text>
                <Text style={{color: 'white', fontSize: 18}}>{this.state.sleepMsg}</Text>
              </View>
            </Card.Content>
          </Card>
          </View>
        </View>
      </View>
      { this.state.show && <DateTimePicker
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    onChange={this.setDate}/>
      }
    </View>
    
    )
  };
  
}

const styles = StyleSheet.create({
  top: {
    height: 20,
  },
  title: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purple: {
    color: '#5800b5',
  },
  orangeLight: {
    backgroundColor: '#ff804a',
    
  },
  orange: {
    backgroundColor: '#ff720d',
    borderRadius: 16,
    
  },
  blueLight: {
    backgroundColor: '#59abd9',
  },
  blue: {
    backgroundColor: '#2377a5',
    borderRadius: 16,
  },
  indigo: {
    backgroundColor: '#2c284e',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'white',
    margin:10,
  }
});
