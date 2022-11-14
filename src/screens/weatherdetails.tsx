import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ToastAndroid,
  Image,
} from "react-native";
import axios from "axios";
interface MyState {
  data: any;
}
interface MyProps {
  route?: any;
}

export default class Weather extends React.Component<MyProps, MyState> {
  state: MyState = {
    data: this.props.route.params.data,
  };
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const {data}=this.state.data.current
    return (
      <View>
        <View key={this.state.data}>
          <Text style={styles.textStyle}>
            Temperature :{data.temperature}
          </Text>
          <Text style={styles.textStyle}>
            Description :{data.weather_descriptions}
          </Text>
          <Image
            source={data.weather_icons}
            style={{
              width: 200,
              height: 200,
              borderWidth: 2,
              alignSelf: "center",
              marginTop: 50,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  inputStyle: {
    marginTop: 100,
    borderBottomWidth: 2,
    borderBottomColor: "lightred",
    width: 200,
    height: 40,
    alignSelf: "center",
    alignContent: "center",
  },
  buttonStyle: {
    borderWidth: 2,
    width: 200,
    height: 40,
    marginTop: 40,
    alignSelf: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "gray",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 100,
  },
  buttonTextStyle: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
