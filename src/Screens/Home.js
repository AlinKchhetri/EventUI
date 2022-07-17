import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient';


const data = [
  {
    id: '1',
    title: 'Sajjan Raj Vaidya',
    date: 'July 30',
    type: 'Concert',
    image : require('../assets/images/sajjan.jpg')
  },
  {
    id: '2',
    title: 'Albatross LIVE',
    date: 'Dec 08',
    type: 'Concert',
    image : require('../assets/images/albatross.jpg')
  },
  {
    id: '3',
    title: 'Concert',
    date: 'April 03',
    type: 'Concert',
    image : require('../assets/images/event_1.png')
  },
];


const Home = ({navigation}) => {


  const [loaded] = useFonts({
    ProductSans: require('../assets/fonts/ProductSans-Regular.ttf'),
    ProductSansBold: require('../assets/fonts/ProductSans-Bold.ttf'),
    ProductSansBlack: require('../assets/fonts/ProductSans-Black.otf')
  });

  if(!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.WelcomeText}>
      <Text style={styles.WelcomeTitle}>Welcom Back</Text>
      <TouchableOpacity onPress={() => {
        navigation.navigate('Profile')
      }}>
        <Image source={require('../assets/usericon.png')} />
      </TouchableOpacity>
      </View>

      <View style={styles.Title}>
        <Text style={styles.TitleText}>Explore Events</Text>
      </View>

      <View style={styles.searchSection}>
        <TextInput 
        placeholder='Search'
        style={styles.searchInput}/>

        <TouchableOpacity onPress={() => {navigation.navigate('Search')}}>
          <Image source={require('../assets/searchSearchIcon.png')}
          style={{opacity: 0.4}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>FEATURED</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data = {data}
          renderItem = {(event) => {
            return (
              <TouchableWithoutFeedback
                onPress={()=> {
                  navigation.navigate('My Events')
                }}
              >
              <View style={{
                marginBottom: 20,
                overflow: 'hidden'
                // marginRight: -10,
              }}>
                <ImageBackground source={event.item.image}
                resizeMode='cover'
                borderRadius={15}
                style={{
                  width: 210,
                  height: 210,
                  justifyContent: 'space-between',
                  margin: 10,
                }}>
                  <View style={{
                    display: 'flex',
                    margin: 10,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}>
                    <View style={{
                      width: 60,
                      height: 60,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      alignSelf: 'flex-end',
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}>
                      <Text style={{
                        fontFamily: 'ProductSansBold',
                        fontSize: 15,

                      }}>{event.item.date}</Text>
                    </View>
                    <View style={{
                      bottom: -80,
                      padding: 10,
                      width: 193,
                      borderRadius: 10,
                      opacity: 0.8,
                      backgroundColor: '#121212'
                    }}>
                      <Text style={{
                        color: 'white',
                        opacity: 0.7,
                        fontFamily: 'ProductSansBold',
                        fontSize: 13
                      }}>{event.item.type}</Text>
                      <Text style={{
                        color: 'white',
                        fontFamily: 'ProductSansBlack',
                        fontSize: 17,

                      }}>{event.item.title}</Text>
                    </View>
                  </View>

                </ImageBackground>
              </View>
              </TouchableWithoutFeedback>
            )
          }}
        />
      </View>

      <View style ={styles.foryouSection}>
        <Text style={{
          color:'white',
          fontFamily: 'ProductSansBold',
          fontSize:20,
          marginBottom: 10,

        }}>FOR YOU</Text>
        
        <LinearGradient
          colors={['#439DFEE8', '#F687FFE8']}
          start={{x: 0, y:0}}
          end={{x:1, y:1}}
          style={{
            height: 120,
            marginHorizontal: 30,
            borderRadius: 20,
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <View style={{
            width: 50,
            height:50,
            backgroundColor: 'white',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            marginRight: 15,
          }}>
          <Image source={require('../assets/icons/gift_icon.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
          </View>

          <View style={{
          }}>
            <Text style={{
              color: 'white',
              fontFamily: 'ProductSansBold',
              fontSize: 16,
            }}>Claim your 1 free ticket.</Text>
            <Text style={{
              color: 'white',
              fontFamily: 'ProductSans',
              width: 150,
              textAlign: 'left',
            }}>Share an Event to claim 1 ticket for free.</Text>
            <TouchableOpacity style={{
              width: 90,
              height: 32,
              backgroundColor: '#FFF',
              marginVertical: 6,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
              onPress={() => {navigation.navigate('Profile')}}
            >
              <Text style={{
                fontFamily: 'ProductSansBold',
                color: '#121212',
                opacity: 0.6

              }}>Claim Here</Text>
            </TouchableOpacity>
          </View>
          </View>
        </LinearGradient>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 

    // justifyContent: 'center', 
    // alignItems: 'center',
    backgroundColor: '#000'
  },
  WelcomeText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 30,
    marginHorizontal: 15,
  },
  WelcomeTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'ProductSansBold',
    opacity: 0.6
  },

  Title:{
    // backgroundColor: 'grey',
    // top: 35,
    marginVertical: 30,
    marginHorizontal: 15,
  },
  TitleText: {
    color: 'white',
    fontFamily: 'ProductSansBold',
    fontSize: 30,
  },

  searchSection:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    marginHorizontal: 25,
    marginVertical: -18,
    padding: 10,
    borderWidth: 3,
    borderRadius: 16,
  },
  searchInput: {
    marginLeft: 10,
    marginTop: 5,
    width: 270,
    height: 25,
    color: 'white',
    fontSize: 17,
  },
  featuredSection:{
    marginStart: 15,
    marginTop: 40,
  },
  featuredTitle: {
    color: 'white',
    fontFamily: 'ProductSansBold',
    fontSize: 20,

  },
  foryouSection: {
    marginHorizontal: 15,
  }

})

export default Home