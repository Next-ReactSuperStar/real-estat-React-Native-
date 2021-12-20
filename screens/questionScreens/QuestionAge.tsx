import { styles } from './styles.js';
import { Image, View, TouchableOpacity, } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import WheelPicker from 'react-native-wheely';
import { Text } from '../../components/Themed';


const QuestionAge = ({ navigation, route }: { navigation: NavigationProp<any>, route: any }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const age = [10, 11, 12, 13, 14, 15]
    return (
        <View style={styles.questionWrap}>
            <View style={styles.questionHeader}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()} >
                    <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../../assets/icons/backBtn.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.subTextView_title}>
                <Text style={styles.title}>What's your age?</Text>
            </View>
            <View style={styles.picker}>
                <View style={styles.pickerWrap}>
                    <View style={{ display: 'flex', justifyContent: 'center' }}>
                        <Text
                            style={{
                                borderBottomColor: '#30C0E9',
                                borderBottomWidth: 1,
                                position: 'absolute',
                                top: '40%',
                                right: '100%',
                                width: '100%',
                            }}
                        ></Text>
                        <WheelPicker
                            selectedIndex={3}
                            options={age}
                            onChange={(index) => setSelectedIndex(index)}
                            itemTextStyle={styles.wheelTitle}
                            selectedIndicatorStyle={styles.selectedWheel}
                        />
                        <Text
                            style={{
                                borderBottomColor: '#30C0E9',
                                borderBottomWidth: 1,
                                position: 'absolute',
                                top: '40%',
                                left: '100%',
                                width: '100%',
                            }}
                        ></Text>
                    </View>
                </View>

            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.questionBtn} >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QuestionId')}
                    >
                        <Text style={styles.btnStyle} >NEXT</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.questionProgress} >
                    <View><Text style={{ textAlign: 'right', color: '#ACB7C2' }}>Completed &nbsp; <Text style={{ color: '#7BC67E' }}>60%</Text></Text></View>
                    <View style={styles.progGender}>
                        <View style={styles.progGenderINAge}></View>
                    </View>
                </View>
                <View style={styles.subTextView1}>
                    <TouchableOpacity
                    // onPress={() => navigation.navigate('ForgotPass', { name: 'Jane' })}
                    >
                        <Text style={styles.subTextSkip} >Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
export default QuestionAge
