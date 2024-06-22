import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { TransactionsHistoryData } from "../Data/mockupData";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={styles.image}
            source={require("../assets/profile.png")}
          />
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Michael Bansah</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Image style={styles.search} source={require("../assets/search.png")} />
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
        source={require("../assets/Card.png")}
      />
    </View>
  );
};

const Transactions = () => {
  return (
    <View style={styles.transactions}>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsImageContainer}>
          <Image
            source={require("../assets/send.png")}
            style={styles.transactionImage}
          />
        </View>
        <Text style={{ marginTop: 2 }}>Send</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsImageContainer}>
          <Image
            source={require("../assets/recieve.png")}
            style={styles.transactionImage}
          />
        </View>
        <Text style={{ marginTop: 2 }}>Recieve</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsImageContainer}>
          <Image
            source={require("../assets/loan.png")}
            style={styles.transactionImage}
          />
        </View>
        <Text style={{ marginTop: 2 }}>Loan</Text>
      </View>
      <View style={styles.transactionsContainer}>
        <View style={styles.transactionsImageContainer}>
          <Image
            source={require("../assets/topUp.png")}
            style={styles.transactionImage}
          />
        </View>
        <Text style={{ marginTop: 2 }}>Top Up</Text>
      </View>
    </View>
  );
};

const TransactionHistory = () => {
  return (
    <View style={styles.transactionHistory}>
      <View style={styles.transactionTitleContainer}>
        <Text style={styles.transactionTitle}>Transaction</Text>
        <Text style={[{ color: "blue" }, styles.seeAll]}>See All</Text>
      </View>
      <FlatList
        data={TransactionsHistoryData}
        renderItem={({ item, index }) => (
          <View style={styles.transactionHistoryContainer}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.transactionHistoryImageContainer}>
                <Image
                  source={item.logo}
                  style={styles.transactionHistoryImage}
                />
              </View>
              <View style={styles.transactionHistoryNameContainer}>
                <Text style={styles.transactionHistoryName}>{item.title}</Text>
                <Text style={styles.transactionHistoryCategory}>
                  {item.category}
                </Text>
              </View>
            </View>
            <Text
              style={[styles.transactionHistoryAmount, { color: item.type }]}
            >
              {item.amount}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <Card />
      <Transactions />
      <TransactionHistory />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 45,
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
  transactions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  transactionsContainer: {
    alignItems: "center",
  },
  transactionsImageContainer: {
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  transactionImage: {
    width: 28,
    height: 28,
  },
  transactionHistory: {
    flex: 1,
    marginTop: 30,
    paddingBottom: 10,
  },
  transactionTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    fontSize: 16,
    color: "blue",
    fontWeight: "bold",
  },
  transactionHistoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  transactionHistoryImageContainer: {
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  transactionHistoryNameContainer: {
    marginLeft: 10,
  },
  transactionHistoryImage: {
    width: 28,
    height: 28,
  },
  transactionHistoryName: {
    fontSize: 16,
    fontWeight: "500",
  },
  transactionHistoryCategory: {
    fontSize: 14,
    color: "gray",
  },
  transactionHistoryAmount: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
});
