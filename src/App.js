import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.app}>
      <Text style={styles.name}>Simple Counter App</Text>
      {/* Count  */}
      <Text style={{ fontSize: 100, justifyContent: "center" }}>{count}</Text>

      <View>
        {/* Increament  */}
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          <Text style={styles.commonText}>Increment</Text>
        </TouchableOpacity>

        {/* Reset  */}
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCount(0);
          }}
        >
          <Text style={styles.commonText}>Reset</Text>
        </TouchableOpacity>

        {/* Decrement  */}
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          <Text style={styles.commonText}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.name2}>Made By Tejas Bagul</Text>
    </View>
  );
}

// Styling

const styles = StyleSheet.create({
  app: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
    margin: 10
  },
  commonButton: {
    background: "#ff4931",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
    transition: "all 20ms ease",
    margin: 23,
    padding: 0.2,
    borderRadius: 10
  },
  // commonButton_hover: {
  //   transition: "all 100ms ease",
  //   transform: "scale(1.05)",
  //   boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)"
  // },
  // commonButton_active: {
  //   transition: "all 50ms ease",
  //   transform: "scale(1.03)",
  //   background: "#e5432d"
  // },
  commonText: {
    fontSize: 38,
    display: "flex",
    justifyContent: "space-evenly"
  },
  // title: {
  //   fontWeight: "bold",
  //   fontSize: "1.5rem",
  //   marginVertical: "1em",
  //   textAlign: "center"
  // },
  // text: {
  //   lineHeight: "1.5em",
  //   fontSize: "1.125rem",
  //   marginVertical: "1em",
  //   textAlign: "center"
  // },
  name: {
    fontFamily: "monospace, monospace",
    fontSize: 35,
    margin: 5
  },
  name2: {
    margin: 1,
    flex: 1,
    fontSize: 15,
    marginVertical: 8
  }
});

//---------Second Way To Implement Counter App --------

// import React, { useState } from "react";
// import { View, Text, Button } from "react-native";

// const App = () => {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount(count + 1);
//   };

//   const decrementCount = () => {
//     if(count > 0){
//       setCount(count - 1);
//     }

//   };

//   const reset = () => {
//     setCount(0);
//   }

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ fontSize: 45 }}>Simple Counter App</Text>
//       <Text style={{ fontSize: 50 }}>Counts: {count}</Text>
//       <br/><br/>
//       <Button style={{color: "green"}} title="Increment" onPress={incrementCount} />
//       <br/>
//       <Button title="Decrement" onPress={decrementCount} />
//       <br/>
//       <Button title="Reset" onPress={reset} />
//     </View>
//   );
// };

// export default App;
