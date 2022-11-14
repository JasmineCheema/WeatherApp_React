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
interface MyState {
  country?: string;
  disable: boolean;
}
interface MyProps {
  navigation?: any;
}

export default class Home extends React.Component<MyProps, MyState> {
  state: MyState = {
    disable: true,
    country: undefined,
  };
  constructor(props: MyProps) {
    super(props);
  }
  getData(): void {
    axios
      .get("https://restcountries.com/v3.1/name/" + this.state.country)
      .then((response) => {
        this.props.navigation.navigate("DetailsScreen", {
          data: response.data,
        });
      })
      .catch((e) => {
        console.log(e + "ERROR");
      })
      .finally(() => {
        this.setState({
          country: undefined,
          disable: true,
        });
      });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Country"
          style={styles.inputStyle}
          keyboardType={"default"}
          onChangeText={(t1?: string) => {
            if (t1 && t1 !== "" && typeof t1 === "string") {
              this.setState({
                country: t1,
                disable: false,
              });
            } else {
              this.setState({
                disable: true,
              });
            }
          }}
          value={this.state.country}
        />
        <TouchableOpacity
          disabled={this.state.disable}
          style={[
            styles.buttonStyle,
            { backgroundColor: this.state.disable ? "red" : "green" },
          ]}
          onPress={() => {
            this.getData();
          }}
        >
          <Text>Find</Text>
        </TouchableOpacity>
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
});
