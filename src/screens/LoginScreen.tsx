import * as React from "react";
import {Button, Headline, Text, TextInput, Theme, withTheme} from 'react-native-paper';
import {StyleSheet, View} from "react-native";
import {AUTH_STATUS, State as AuthState} from "../redux/reducers/AuthReducer";
import {login} from "../redux/actions/AuthActions";
import {connect} from "react-redux";
import {RootState} from "../redux/reducers";
import {StackNavigationProp} from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props extends AuthState {
  navigation: StackNavigationProp<any>;
  theme: Theme;
  login(user: string, password: string): any;
}

interface State {
  user: string;
  password: string;
}

class LoginScreen extends React.Component<Props, State> {
  readonly state: State = {
    user: "",
    password: ""
  };

  passwordInputRef = React.createRef<any>();

  handleUserChange = (user: string) => {
    this.setState({ user: user });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };



  handleLoginPress = async () => {
    console.log("Login button pressed");
    await this.props.login(this.state.user, this.state.password);
    this.props.navigation.navigate("GamesList");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/*<Image source={imageLogo} style={styles.logo} />*/}
        <Headline>Starborne Assistant</Headline>
        <View style={styles.form}>
          <TextInput
            label="username/email"
            value={this.state.user}
            onChangeText={this.handleUserChange}
            placeholder="username/email"
            enablesReturnKeyAutomatically
            returnKeyType="next"
            onSubmitEditing={()=>this.passwordInputRef.current && this.passwordInputRef.current.focus()}
            error={this.props.auth_status===AUTH_STATUS.FAILURE}
            autoCorrect={false}
            autoCompleteType="username"
            // @ts-ignore
            importantForAutofill="yes"
          />
          <TextInput
            label="password"
            ref={this.passwordInputRef}
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
            enablesReturnKeyAutomatically
            returnKeyType="done"
            error={this.props.auth_status===AUTH_STATUS.FAILURE}
            autoCompleteType="password"
            // @ts-ignore
            importantForAutofill="yes"
          />
          {this.props.auth_status===AUTH_STATUS.FAILURE &&
          <Text style={{color: this.props.theme.colors.error}}>{this.props.error}</Text>}

          {this.props.auth_status===AUTH_STATUS.SUCCESS &&
          <Text style={{color: this.props.theme.colors.accent}}>Logged in as {this.props.auth?.userName}</Text>}

          <Button style={{marginTop: 50}} onPress={this.handleLoginPress} mode="contained" loading={this.props.auth_status===AUTH_STATUS.LOADING}>
            Login
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  form: {
    flex: 1,
    justifyContent: "center",
    width: "80%"
  }
});


const mapStateToProps = (state: RootState) => {
  return {...state.auth};
};

export default withTheme(connect(mapStateToProps, {login})(LoginScreen));