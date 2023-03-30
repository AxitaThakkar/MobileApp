import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import ButtonFace from '../components/button';
import {AuthContext} from '../components/AuthContext';
import {useContext} from 'react';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState('');
  const [Error, setError] = useState({});

  const {signIn} = useContext(AuthContext);

  // const isValid = () => {
  //   var emailValid = false;
  //   if (!email) {
  //     setEmailError('Email is required');
  //     emailValid = true;
  //   } else {
  //     setEmailError('');
  //   }
  //   var passValid = false;
  //   if (!password) {
  //     setPasswordError('Password is required');
  //     passValid = true;
  //   } else {
  //     setPasswordError('');
  //   }
  // };

  const isValid = () => {
    let isError = false;
    let error = {};
    if (email === '') {
      error.email = 'Email is required';
      isError = true;
    }
    if (password === '') {
      error.password = 'Password is required';
      isError = true;
    }

    setError(error);
    return isError;
  };
  const loginApi = () => {
    fetch('https://api.storerestapi.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        // email: email,
        // password: password,
        email: 'marklyan@gmail.com',
        password: 'simple_password',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(json => {
        signIn(json.data);
        console.log('data', json.data);
      })
      .catch(e => console.log('error', e));
  };
  const onLogin = () => {
    console.log('thisuser', email, password);
    const isvalid = isValid();
    console.log('hhh', isvalid);
    if (!isvalid) {
      loginApi();
    } else {
      console.log('erroe');
    }
    // if (loginApi.status) {
    //   signIn();
    // }

    // if (!isValid()) {
    //   try {
    //     const user = loginApi();
    //     if (user) {
    //       signIn();
    //     }
    //   } catch (error) {
    //     console.log('error', error);
    //   }
    // }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>duolingo</Text>
      <Text style={styles.text1}>Login to {'\n'} your Account</Text>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Enter Email"
          onChangeText={text => setEmail(text)}
          placeholderTextColor="white"
          style={styles.TextInput}
          value={email}
        />
        {console.log('thisuser', email, password)}
        <Text style={styles.errormessage}>{Error.email}</Text>
        <TextInput
          value={password}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />

        <Text style={styles.errormessage}>{Error.password}</Text>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.Button}>
        <TouchableOpacity style={styles.loginBtn} onPress={onLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText1}>or log in with</Text>
      <ButtonFace />
      <Text style={styles.bottomText}>
        By using duolingo you agree to our {''}
        <Text style={{fontWeight: 500, color: 'white'}}>
          Term and Condition
        </Text>{' '}
        {''}
        and
        <Text style={{fontWeight: 500, color: 'white'}}> Private Policy</Text>
      </Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#091a2f',
  },

  inputView: {
    padding: 25,
    top: 30,
    // marginLeft: 20,
    // backgroundColor: '#3a4859',
    // borderRadius: 10,
    // height: 45,
    // width: 320,
  },
  TextInput: {
    color: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a4859',
    // color: 'white',
    // height: 50,
    // padding: 20,
    // marginLeft: 20,
  },
  forgot_button: {
    textAlign: 'right',
    color: 'white',
    padding: 10,
    paddingRight: 25,
    justifyContent: 'center',
    top: 15,
  },
  bottomText: {
    padding: 0.5,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#79828e',
    marginTop: 30,
  },
  bottomText1: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    marginBottom: 15,
  },
  Button: {
    padding: 20,
  },
  loginBtn: {
    color: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbb718',
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  FaceButton: {
    borderRadius: 10,
    height: 50,
    width: 158,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3a4859',
  },
  errormessage: {
    color: 'white',
  },
  imageBanner: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Bold',
    marginTop: 80,
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 400,
    textAlign: 'center',
  },
  text1: {
    marginTop: 40,
    fontFamily: 'Roboto-Bold',
    padding: 5,
    display: 'flex',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  fixToText: {
    paddingTop: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icontouch: {
    backgroundColor: '#3A4859',
    width: 200,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icontouch2: {
    backgroundColor: '#3A4859',
    width: 200,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Login;
