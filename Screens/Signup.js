 import React,{useState} from 'react';
 import validator from 'validator';
 import axios from 'axios'
 import {
   SafeAreaView,
   ScrollView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   Image,
   TextInput,
   StatusBar,
   Keyboard,
   Button,
   TouchableOpacity
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 
 const Signup = () => {
    //  alert(validator.isAlphanumeric('VNC216'));
     const [userName,setuserName] = useState('');
     const [firstName,setfirstName] = useState('');
     const [lastName,setlastName] = useState('');
     const [email,setemail] = useState('');
     const [mobileNo,setmobileNo] = useState('');
     const [societyCode,setsocietyCode] = useState('');
     const [flat,setflat] = useState('');
     const [password,setpassword] = useState('');
     const [confirmPassword,setConfirmPassword] = useState('');
     
     
     const validateInputs = () =>{
      Keyboard.dismiss();
      if(userName == ''){
        alert('Enter your Username');
      }
      else if(firstName == ''){
        alert('Enter your firstname')
      }
      else if(lastName == ''){
        alert('Enter your lastname')
      }
      else if(email == ''){
        alert('Enter your email')
      }
      else if(mobileNo == ''){
        alert('Enter your mobile number')
      }
      else if(societyCode == ''){
        alert('Enter your society code')
      }
      else if(flat == ''){
        alert('Enter your flat detail')
      }
      else if(password == ''){
        alert('Enter your password')
      }
      else if(confirmPassword == ''){
        alert('Confirm your password')
      }
      else{
        if(userName.length < 4){
          alert('Username should contain atleast 4 characters');
        }
        else if(!validator.isAlphanumeric(userName)){
          alert('Username should not contain special characters like @,$,etc')
        }
        else if(!validator.isEmail(email)){
          alert('Enter valid email')
        }
        else if(mobileNo.length < 10){
          alert('Enter valid mobile no')
        }
        else if(password.length < 8){
           alert('Password should atleast contain 8 characters')
        }
        else if(password != confirmPassword){
            alert('Confirmed password did not matched with password')
        }
        
      } 
  
     }
   return (
     <View style={styles.logodiv}>
       
       <View >
         <Image style={styles.logo} source={require('../images/logo.png')}></Image>
          {/* <Text style={styles.appName}>SocApp</Text> */}
       </View>
       <TextInput
         style={{
           height: 49,
           marginTop:'6%',
           backgroundColor:"white",
           borderRadius:9,
           width:"88%",
           padding:10,
          
         }}
         autoCapitalize='none'
         autoCorrect={false}
         placeholder="Username"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setuserName(text)}
       />
       <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'88%',marginTop:'6%'}}>
       <TextInput
         style={{
           height: 49,
     
           backgroundColor:"white",
           borderRadius:9,
           width:"48%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         placeholder="Firstname"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setfirstName(text)}
       />
        <TextInput
         style={{
           height: 49,
     
           backgroundColor:"white",
           borderRadius:9,
           width:"48%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         placeholder="Lastname"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setlastName(text)}
       />
       </View>
       <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',width:'88%',marginTop:'6%'}}>
       <TextInput
         style={{
           height: 49,
     
           backgroundColor:"white",
           borderRadius:9,
           width:"48%",
           padding:10
         }}
         placeholder="Email"
         autoCapitalize='none'
         autoCorrect={false}
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setemail(text)}
       />
        <TextInput
         style={{
           height: 49,
     
           backgroundColor:"white",
           borderRadius:9,
           width:"48%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         placeholder="Mobile No"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setmobileNo(text)}
       />
       </View>
       <TextInput
         style={{
           height: 49,
           marginTop:'6%',
           backgroundColor:"white",
           borderRadius:9,
           width:"88%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         placeholder="Society Code"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setsocietyCode(text)}
       />
       <TextInput
         style={{
           height: 49,
           marginTop:'6%',
           backgroundColor:"white",
           borderRadius:9,
           width:"88%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         placeholder="Flat"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setflat(text)}
       />
       <TextInput
         style={{
           height: 49,
           marginTop:'6%',
           backgroundColor:"white",
           borderRadius:9,
           width:"88%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         secureTextEntry={true}
         placeholder="Password"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setpassword(text)}
       />
       <TextInput
         style={{
           height: 49,
           marginTop:'6%',
           backgroundColor:"white",
           borderRadius:9,
           width:"88%",
           padding:10
         }}
         autoCapitalize='none'
         autoCorrect={false}
         secureTextEntry={true}
         placeholder="Confirm Password"
         placeholderTextColor='rgba(0,0,0,0.7)'
         onChangeText={(text) => setConfirmPassword(text)}
       />
       
       <TouchableOpacity  style={styles.button} onPress={validateInputs}>
        <Text style={{color:'white',fontWeight:'bold'}}>Register</Text>
      </TouchableOpacity>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   logo:{
     width:80,
     height:90
   },
   logodiv:{
    flex:1,
    backgroundColor:"#F3EFF2",
    alignItems:'center',
    marginTop:'16%'
   },
   button: {
    alignItems: "center",
    backgroundColor: "#3540A5",
    padding: 10,
    width:'88%',
    marginTop:'9%',
    height: 49,
    justifyContent:'center',
    alignContent:'center',
    borderRadius:9
  },
  
 });
 
 export default Signup;
 