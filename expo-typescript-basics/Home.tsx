import React, { useEffect } from "react";
// 1. import `NativeBaseProvider` component
import { Avatar, HStack, Center, NativeBaseProvider, Box, AddIcon, StatusBar, Text, Divider, FlatList, View, Switch, IconButton } from "native-base";
import { LogBox } from "react-native";
import { Database } from './basededadoslocal/Database';

export default function App() {

  const bd = new Database();

  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  const generateHours = () => {
    const hours = [];
    for (let i = 0; i < 24; i++) {
      const hour = i < 10 ? `0${i}:00` : `${i}:00`;
      hours.push({ key: hour });
    }
    return hours;
  };

  const hours = generateHours();



const alarmes:any = bd.select("configuraalarme");
const a_alarme = Object.values(alarmes);
const dados_alarme = a_alarme.map(item => item);



  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        translucent={false}
      />

      <Box flex={1} bg="#fff" flexDirection="column" padding="2.5">


        <HStack mx={{
          base: "auto",
          md: "0"
        }} space={2}>
          {/* <HStack flex={1} justifyContent="space-between" alignItems="center" flexDirection="row" width="100%" marginTop="2" marginBottom="5">
            <IconButton icon={<AddIcon />} bg="warning.300" size="lg"/>
            <Text fontSize="2xl">Alarme</Text>
          </HStack> */}




        </HStack>


        <FlatList
          data={dados_alarme}
          renderItem={({ item }) => <Box width="100%" bg="#ccc" mb="1"  padding="3" flexDirection="row" justifyContent="space-between"><Text fontSize="5xl">{item.hora}</Text><Switch fontSize="5xl" size="lg" defaultIsChecked/></Box>}
          keyExtractor={item => item.id}
        />

      </Box>
    </NativeBaseProvider>
  );
}