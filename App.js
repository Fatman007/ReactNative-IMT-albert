

// import React, {Component} from 'react';
// import { AppState, View, Text } from "react-native";
// import PushController from './src/components/Push';
// import PushNotification from 'react-native-push-notification';

// class App extends Component {
//   constructor() {
//     super();
//     this.handleAppStateChange = 
//     this.handleAppStateChange.bind(this);
//     this.state = {ms:5000};
//   }

//   componentDidMount(){
//     AppState.addEventListener(
//       'change', this.handleAppStateChange);
//   }

//   handleAppStateChange(appState) {
//     if(appState === 'background') {
//       PushNotification.localNotificationSchedule({
//         title: 'Pesan Masuk',
//         message: 'Haik kak, ada pesan masuk nih',
//         date: new Date(Date.now() + (this.state.ms)),
//       });
//     }
//   }

//   render() {
//     return (
//       <View>
//         <Text> Halo </Text>
//         <PushController/>
//       </View>
//     );
//   }
// }

// export default App;




// import React, { Component } from 'react';
// import { Container, Header, Content, Footer, Spinner, Thumbnail, Icon, Button, Text, Form, Item, Image, Label, Input, Fab, View, FooterTab, Body, Left, Right} from 'native-base';

// import AlbumList from './src/components/AlbumList';

// class App extends Component {

//   constructor() {
//     super();
//     this.state = {active: true};
//   }

//  render() { 
//   return (
//       <Container>
        
//         <Header searchBar rounded>
//           <Item>
//               <Input placeholder="Cari" />
//               <Button transparent><Icon name="search" /></Button>
//           </Item>
//         </Header>

//         <Content>

//         <AlbumList />
        
// {/* 
//           <Icon name='share' style={{fontSize:40, color:'red'}} type='FontAwesome' />
//           <Thumbnail square source={{uri:''}}/>
          
//           <Button iconLeft light>
//           <Icon name='arrow-back' />
//           <Text>Back</Text>
//           </Button>
//      */}
//         </Content>

//         <Footer>
//         <FooterTab>

//         <Left>
//             <Button vertical><Icon name="home" />
//             <Text> Kami </Text></Button>
//         </Left>
          
        
//             <Button vertical active><Icon name='menu' />
//             <Text> Menu </Text></Button>
        

//         <Right>
//             <Button vertical><Icon name="cart" />
//             <Text> Cart </Text></Button>
//         </Right>
        
//         </FooterTab>
//         </Footer>
//       </Container>
//       );
//   }
// }

// export default App;


// import React, { Component } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { Header, Container, Content, Body } from 'native-base';

// class App extends Component {
//  constructor(){
//   super();
//   this.state={input:'', input2:'', total:''}
//  }

//  cekTotal = () => {
//   const { input, input2 } = this.state;

//   this.setState({
//     total: Number(input) / Math.pow(Number((input2)/100),2)
//   });
// }

// //  cekimt() {

// //  }

//  render() {

//   let deskripsi ;
//   // if (this.state.total < 18.5 ) {
//   // deskripsi = "BB ANDA KURANG"
//   // } 
//   // if  (18.5 <= this.state.total <24.9 ) {
//   // deskripsi = "BB ANDA IDEAL"  
//   // }
//   // if  (25 <= this.state.total <29.9 ) {
//   //   deskripsi = "BB ANDA BERLEBIH"  
//   // }
//   // if  (30.0 <= this.state.total <=39.9 ) {
//   //   deskripsi = "BB ANDA SANGAT BERLEBIH"  
//   // }
//   // if  (this.state.total > 39.9 ) {
//   //   deskripsi = "BB ANDA OBESITAS"  
//   // }
//   // else {deskripsi = 'salah masuk'}

//   switch(true){
//       case(this.state.total<18.5):
//         deskripsi = 'BB ANDA KURANG';
//         break;
//       case(this.state.total>=18.5 && this.state.total<=24.9):
//         deskripsi = 'BB ANDA IDEAL';
//         break;
//       case(this.state.total>=25.0 && this.state.total<=29.9):
//         deskripsi = 'BB ANDA BERLEBIH';
//         break;
//       case(this.state.total>=30.0 && this.state.total<=39.9):
//         deskripsi = 'BB ANDA SANGAT BERLEBIH'
//         break;
//       case(this.state.total>=39.9):
//         deskripsi = 'BB ANDA OBESITAS'
//         break;
//   }

//   return (
    
//     <Container>
//     <Header>
//     <Text> INDEKS MASSA TUBUH </Text>
//     </Header>

//     <Content>

//     <View style={{padding: 10, backgroundColor:'lightblue'}}>
//       <Text style={{fontSize:30}}>Massa (kg)</Text>
//       <TextInput style={{height: 40}} placeholder='Massa (kg)'
//       onChangeText={(input) => this.setState({input})}
//       />
//     </View>

//     <View style={{padding: 10, backgroundColor:'lightblue'}}>
//       <Text style={{fontSize:30}}>Tinggi (cm)</Text>
//       <TextInput style={{height: 40}} placeholder='Tinggi (cm)'
//       onChangeText={(input2) => this.setState({input2})}
//       />
//     </View>

//     <Button
//       onPress={()=>{this.cekTotal()}}
//       title='HITUNG IMT'
//       color='blue'
//       /> 
//     <Body>
//     <Text>{this.state.input + 'kg' }</Text>
//     <Text>{(this.state.input2)/100 + 'm'}</Text>
//     <Text>{this.state.total}</Text>
//     <Text > {deskripsi} </Text>
//     </Body>


//     </Content>

//    </Container>
// );}}

// export default App;













import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Header, Container, Content, Body } from 'native-base';

class App extends Component {
 constructor(){
  super();
  this.state={input:0, input2:0, data:null}
 }

input = 0
input2 = 0

 cekimt(input, input2) {
    let total =  Number(input) / Math.pow(Number(input2),2)
    let deskripsi =''
    switch(true){
      case(total<18.5):
        deskripsi = 'BB ANDA KURANG';
        break;
      case(total>=18.5 && total<=24.9):
        deskripsi = 'BB ANDA IDEAL';
        break;
      case(total>=25.0 && total<=29.9):
        deskripsi = 'BB ANDA BERLEBIH';
        break;
      case(total>=30.0 && total<=39.9):
        deskripsi = 'BB ANDA SANGAT BERLEBIH'
        break;
      case(total>=39.9):
        deskripsi = 'BB ANDA OBESITAS'
        break;
  }
  return {total, deskripsi}
 }

 render() {

  return (
    
    <Container>
    <Header>
    <Text> INDEKS MASSA TUBUH </Text>
    </Header>

    <Content>

    <View style={{padding: 10, backgroundColor:'lightblue'}}>
      <Text style={{fontSize:30}}>Massa (kg)</Text>
      <TextInput style={{height: 40}} placeholder='Massa (kg)'
      onChangeText={(input) => this.input = input}
      />
    </View>

    <View style={{padding: 10, backgroundColor:'lightblue'}}>
      <Text style={{fontSize:30}}>Tinggi (cm)</Text>
      <TextInput style={{height: 40}} placeholder='Tinggi (cm)'
      onChangeText={(input2) => this.input2 = input2/100}
      />
    </View>

    <Button
      onPress={()=>{
        this.setState({
        input: this.input,
        input2: this.input2,
        data: this.cekimt(this.input, this.input2)

      })}}
      title='HITUNG IMT'
      color='blue'/> 

      <Body>
        {
          this.state.data ? 
            <View >
              <View>            
                <Text >Massa Tubuh:</Text>
                <Text >{ this.state.input } kg</Text>
              </View>
              <View>                
                <Text >Tinggi Badan:</Text>
                <Text >{ this.state.input2 } m</Text>
              </View>
              <View>
                <Text >IMT:</Text>
                <Text >{ this.state.data.total }</Text>
              </View>
              <View>
                <Text >Diagnosa:</Text>
                <Text >{ this.state.data.deskripsi }</Text>
              </View>
            </View>
          : null
        }
      </Body>

    </Content>

   </Container>
);}}

export default App;


