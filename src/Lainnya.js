import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { PureComponent } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Lainnya extends PureComponent {
  render() {
    return (
        <SafeAreaView>
            <ScrollView>

                <View style={{flex: 1}}>
                    <View style={styles.topContainer}>
                        <View>
                            <Text style={styles.FonttopContainer}>Inspiring Belitung Timur</Text>
                            <Text style={styles.FonttopContainer}>Belitung Timur</Text>
                        </View>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='logo-electron' size={60} color='green'/>
                    </View>
                </View>
                </View>

                <View style={{flex: 1}}>
                    <View style={styles.Container}>
                        <View style={{flex:1}}>
                            <Text style={styles.FontContainer}>Tentang</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <View style={styles.Container}>
                        <View style={{flex:1}}>
                            <Text style={styles.FontContainer}>Favorit Destinasi</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <View style={styles.Container}>
                        <View style={{flex:1}}>
                            <Text style={styles.FontContainer}>Kritik dan Saran</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1}}>
                    <View style={styles.Container}>
                        <View style={{flex:1}}>
                            <Text style={styles.FontContainer}>Nilai Aplikasi</Text>
                        </View>
                    </View>
                </View>

                <View style={{padding: 10}}>
                    <Text style={{color: 'black', textAlign: 'center'}}>App Version</Text>
                    <Text style={{color: 'gray', textAlign: 'center'}}>Hak Cipta @2022</Text>
                </View>

            </ScrollView>
        </SafeAreaView>        
    )
  }
}

const styles = StyleSheet.create({
    topContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: '5%', 
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    FonttopContainer: {
        fontSize: 20,
        color: 'black',
    },
    Container: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: '5%', 
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    FontContainer: {
        fontSize: 18,
        color: 'black',
    },
  });