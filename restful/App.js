import React, { Component } from 'react';
import { Title, Paragraph, Card, Button } from 'react-native-paper';
import { StyleSheet, Text, View, DatePickerIOS } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: 8,
      wakeHour: 7,
      wakeMinute: 0,
      sleepHour: 11,
      sleepMinute: 0,
      sleepOk: '#22b344',
      sleepMsg: 'Great job!',
      chosenDate: new Date(),
      chosenSleepDate: new Date(),
      chosenWakeDate: new Date(),
      viewState: false,
    }
    this.setSleepDate = this.setSleepDate.bind(this);
    this.setWakeDate = this.setWakeDate.bind(this);
  }

  setWakeDate(newDate) {
    this.setState({chosenWakeDate: newDate});
  }

  setSleepDate(newDate) {
    this.setState({chosenSleepDate: newDate});
  }

  sleepRenderBottomComponent(){
    if(this.state.viewSection) {
        return (
          <View style={{backgroundColor:'white'}}>
          <Button labelStyle={{color:'black'}} onPress={this.sleepDoneOnTap}>Done</Button>
          <DatePickerIOS
            mode='time'
            date={this.state.chosenSleepDate}
            onDateChange={this.setSleepDate}/>
          </View>
        )
    }
    else {
      return (
        <View></View>
      )
    }
  }

  wakeRenderBottomComponent(){
    if(this.state.viewSection) {
        return (
          <View style={{backgroundColor:'white'}}>
          <Button labelStyle={{color:'black'}} onPress={this.wakeDoneOnTap}>Done</Button>
          <DatePickerIOS
            mode='time'
            date={this.state.chosenWakeDate}
            onDateChange={this.setWakeDate}/>
          </View>
        )
    }
    else {
      return (
        <View></View>
      )
    }
  }

  onTap() {
    console.log("pressed");
  }

  wakeDoneOnTap=() =>{
    this.setState({viewSection: false});
    console.log(this.state.chosenWakeDate.getHours());
    this.setState({wakeHour:this.state.chosenWakeDate.getHours()});
    console.log(this.state.chosenWakeDate.getMinutes());
    this.setState({wakeMinute:this.state.chosenWakeDate.getMinutes()});
    console.log('done');
  }

  sleepDoneOnTap=() =>{
    this.setState({viewSection: false});
    console.log(this.state.chosenSleepDate.getHours());
    this.setState({sleepHour:this.state.chosenSleepDate.getHours()});
    console.log(this.state.chosenSleepDate.getMinutes());
    this.setState({sleepMinute:this.state.chosenSleepDate.getMinutes()});
    console.log('done');
  }

  sleepButtonPress=() =>{
    console.log('sleep pressed');
    this.setState({viewSection:true});
  }

  wakeButtonPress=() =>{
    console.log('wake pressed');
    this.setState({viewSection:true});
  }

  render() {
    return (
      <View style={[styles.indigo, {flex:1, paddingVertical: 10}]}>
        <View style={styles.top}></View>
        <View style={styles.title}>
          <Title style={{fontSize: 40, paddingTop: 18, color:'white'}}>restful.</Title>
          <Paragraph style={{color:'white', fontSize: 18}}>Sleep better. Live better.</Paragraph>
        </View>
        <View>
        <View style={{padding: 20, paddingVertical: 20}}>
          <View style={{paddingVertical:5}}>
          <Card style={styles.orange}>
            <Card.Content>
              <View style={{justifyContent:'center'}}>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                  <Text style={{color: 'white', fontSize: 20}}>Wake up at   </Text>
                  <Button color='#f78c5e' onPress={this.wakeButtonPress} mode='contained'>{this.state.wakeHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} {this.state.wakeMinute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} AM</Button>
                </View>
                <View style={styles.lineStyle}/>
                <Button onPress={this.onTap} labelStyle={{fontSize:16}} color='white'>Set alarm</Button>
              </View>
            </Card.Content>
          </Card>
          </View>
          <View style={{paddingVertical:5}}>
          <Card style={styles.blue}>
            <Card.Content>
              <View style={{justifyContent:'center'}}>
                <View style={{flexDirection: 'row', justifyContent:'center'}}>
                <Text style={{color: 'white', fontSize: 20}}>Sleep at   </Text>
                <Button color='#59abd9' onPress={this.sleepButtonPress} mode='contained'>{this.state.sleepHour.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} {this.state.sleepMinute.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})} PM</Button>
                </View>
                <View style={styles.lineStyle}/>
                <Button onPress={this.onTap} labelStyle={{fontSize:16}} color='white'>Set reminder</Button>
              </View>
            </Card.Content>
          </Card>
          </View>
          <View style={{paddingVertical:5}}>
          <Card style={{backgroundColor: this.state.sleepOk, borderRadius: 16}}>
            <Card.Content>
              <View style={{alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 20}}>Sleep for {this.state.hours} hour(s) tonight</Text>
                <Text style={{color: 'white', fontSize: 16}}>{this.state.sleepMsg}</Text>
              </View>
            </Card.Content>
          </Card>
          </View>
        </View>
      </View>
      {this.sleepRenderBottomComponent()}
      {this.wakeRenderBottomComponent()}
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
