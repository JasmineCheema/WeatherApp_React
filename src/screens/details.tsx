import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import axios from "axios";
//gitimport {API_KEY} from '@env'
interface MyState {
  data: any;
  apikey?: string;
}
interface MyProps {
  route?: any;
  navigation?: any;
}

export default class Details extends React.Component<MyProps, MyState> {
  state: MyState = {
    data: this.props.route.params.data,
    apikey:'2832fba1df63bbe8f60cef4d728a5fb6'
  };
  constructor(props: MyProps) {
    super(props);
  }

  getWeatherData(index: number): void {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=
          ${this.state.apikey}
          &query=
          ${this.state.data[index].capital}`
      )
      .then((response) => {
        console.log(response.data);
        this.props.navigation.navigate("WeatherScreen", {
          data: response.data,
        });
      });
  }
  render() {
    return (
      <View>
        {this.state.data.map((data: any, index: number) => {
          console.log(data.capital);
          return (
            <View>
              <Text style={styles.textStyle}>Capital :{data.capital}</Text>
              <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                  this.getWeatherData(index);
                }}
              >
                <Text style={styles.buttonTextStyle}>Check Weather</Text>
              </TouchableOpacity>
            </View>
          );
        })}
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
