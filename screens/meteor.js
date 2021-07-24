import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

export default class Meteor extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>
                    ThirdScreen
                </Text>
            </View>
        )
    }
}