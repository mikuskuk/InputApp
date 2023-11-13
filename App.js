import React, { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

const App = () => {
  const [name, setName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const addName = () => {
    if (name.trim() !== '') {
      setNamesList([...namesList, name]);
      setName('');
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 24, margin: 10 }}>Input your name!</Text>

      <TextInput
        style={{ fontSize: 20, borderWidth: 2, borderColor: 'blue', margin: 10, borderRadius: 10, paddingLeft: 5 }} 
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Button 
        title="Add name" 
        onPress={addName}
      />

      <FlatList
        data={namesList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 24, marginLeft: 10 }}>{item}</Text>
        )}
      />
    </View>
  );
};

export default App;