import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends Component{



  
  constructor(props){
  
    super(props)
    this.state={
      isLoading:true,
      dataSource:[]
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response)=> response.json())
    .then((responseJson)=>{
      this.setState({
        isLoading:false,
        dataSource:responseJson
      })
    })
  }
  _renderItem=({item,index})=>{
  
    return(
      
      <TouchableOpacity>
      <View style={styles.item} onPress={()=> Navigation.navigate('DetailScreen')} >
        <Text>{item.title}</Text>
  
      </View>
      </TouchableOpacity>
    )
  }
  render(){
    <AppContainer/>
  
    let{container,item}=styles
    let{dataSource,isLoading}=this.state
    if(isLoading){
     <View style={styles.container}>
      <ActivityIndicator size='large' animating/>
     </View>
      }else{
  
        return(
          
          <View style={container}>
            <FlatList data={dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item,index) =>index.toString()}
        
            />
      
  
          </View>
        )
      }
    return(
  
      <View style={container}>
  
        <FlatList
        data={dataSource}
        renderItem={this._renderItem}
        keyExtractor={(item,index)=>index.toString()}
        />
      </View>
    )
  }
  }

  const AppNavigator = createStackNavigator({
    Detail: {
      screen: DetailScreen
    }
  });
  
  const AppContainer = createAppContainer(AppNavigator);
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      paddingTop:50
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
    }
  });
  