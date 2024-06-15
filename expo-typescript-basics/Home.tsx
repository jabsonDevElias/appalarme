import React, { useEffect, useState } from "react";
// 1. import `NativeBaseProvider` component
import { Avatar, HStack, Center, NativeBaseProvider, Box, AddIcon, StatusBar, Text, Divider, FlatList, View, Switch, IconButton } from "native-base";
import { LogBox } from "react-native";
import { Database } from './basededadoslocal/Database';
import { useIsFocused } from "@react-navigation/native";

export default function App() {

  const bd = new Database();

  const alarmes: any = bd.select("configuraalarme");
  const a_alarme = Object.values(alarmes);
  const [dadosAlarme,setDadosAlarme] = useState();


  useEffect(() => {
    LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
  }, []);

  // Função para alterar o objeto com id 4


  function formata_data(dateStr: any) {

    const dateObj = new Date(dateStr);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  const toggleSwitch = (key:any) => {

    const novosValores = {
      status: 'inativo'
    };
 
    bd.insertRow("configuraalarme",novosValores,key).then(( )=> {
      console.log("Cadastro Realizado com Sucesso!");

      let dadosAlarmeAtualizados = dadosAlarme.map(alarme => {
          if (alarme.id === key) {
              return { ...alarme, ...novosValores };
          }
          return alarme;
      });

      setDadosAlarme(dadosAlarmeAtualizados);

    }).catch(err => console.log(err));


    // a_alarme.filter(e => e.id == key).map(item => {
    //   console.log(item);
    //   let novoObjeto = { ...item, ...dados};
    //   setDadosAlarme([novoObjeto]);
    // })








    
  }



  const [data, setData] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setDadosAlarme(a_alarme.reverse().map(item => item))
    }
  }, [isFocused]);



  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000000"
        translucent={false}
      />

{/* <Text>{data}</Text> */}
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
          data={dadosAlarme}
          renderItem={({ item }) => <Box width="100%" bg="#ccc" mb="1" padding="3" flexDirection="row" alignItems="center" justifyContent="space-between" key={item.id}><Text fontSize="5xl">{item.hora.slice(0, -3)}</Text><Text>{formata_data(item.data)}</Text><Switch fontSize="5xl" onToggle={() => toggleSwitch(item.id)} size="lg" isChecked={(item.status == "ativo") ? true : false} /></Box>}
          keyExtractor={item => item.id}
        />

      </Box>
    </NativeBaseProvider>
  );
}