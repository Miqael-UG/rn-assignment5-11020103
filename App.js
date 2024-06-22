import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={styles.image}
            source={require("./assets/profile.png")}
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Michael Bansah</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image style={styles.search} source={require("./assets/search.png")} />
      </View>
    </View>
  );
};

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        resizeMode="contain"
        style={styles.cardImage}
        source={require("./assets/Card.png")}
      />
    </View>
  );
};
export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <Card />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25,
  },
  image: {
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeText: {
    fontSize: 16,
    color: "gray",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    backgroundColor: "#f2f2f2",
    padding: 16,
    borderRadius: 50,
  },
  card: {
    marginTop: 20,
  },
  cardImage: {
    width: "100%",
  },
});
