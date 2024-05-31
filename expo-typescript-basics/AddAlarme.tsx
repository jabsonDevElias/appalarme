import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Avatar, HStack, Center, NativeBaseProvider, Box, AddIcon, StatusBar, Text, Divider, FlatList, View, Switch, IconButton, Button, Input } from "native-base";
import { Platform } from 'react-native';
import { Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function AddAlarme(dateTimeStr: any) {


  function formata_hora(dateStr: any) {
    const dateObj = new Date(dateStr);

    const hours = String(dateObj.getUTCHours()).padStart(2, '0');
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');
    const seconds = String(dateObj.getUTCSeconds()).padStart(2, '0');

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
  }

  function formata_data(dateStr: any) {

    const dateObj = new Date(dateStr);

    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

  const [date, setDate] = useState(new Date());

  const [data, setData] = useState("");
  const [time, setTime] = useState("");

  const [mode, setMode] = useState();
  const [display, setDisplay] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);



  const onChange = (event: any, selectedDate: any) => {

    const currentDate = selectedDate || date;

    setShowDatePicker(Platform.OS === 'ios');

    setDate(currentDate);
    
    if(mode == "date"){
      const filtro_data = formata_data(currentDate);
      setData(filtro_data);
    }else{
      const filtro_hora = formata_hora(currentDate);
      setTime(filtro_hora);
    }
  };

  const showMode = (mode: any, display: any) => {
    setMode(mode);
    setDisplay(display);
    setShowDatePicker(true);
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" flexDirection="column" padding="5">


        <HStack mx={{
          base: "auto",
          md: "0"
        }} space={2}>
          <HStack flex={1} justifyContent="space-between" alignItems="center" flexDirection="row" width="100%" marginTop="2" marginBottom="5" >
            <Text fontSize="4xl" margin="auto"><MaterialCommunityIcons name="clock" size={40} color="black" /> Criar Alarme</Text>
          </HStack>

          <View>

          </View>

        </HStack>

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            data-mode={mode}
            is24Hour={true}
            display={display}
            onChange={onChange}
          />

        )}



        <Box flex={1} flexDirection="column" width="100%" flexWrap="wrap" marginTop="59">
          <Box flexDirection="row" justifyContent="space-between" >
            <Input type="text" width="75%" isDisabled value={data} placeholder="dd/mm/aaaa" fontSize="25"></Input>
            <Button onPress={() => showMode('date', 'calendar')} backgroundColor="#ffcc00" width="20%" data-mode="time" data-display="clock">
              <MaterialCommunityIcons name="clock" size={30} color="black" />
            </Button>
          </Box>

          <Box flexDirection="row" justifyContent="space-between" marginTop="5">
            <Input type="text" width="75%" isDisabled value={time} placeholder="hh:mm" fontSize="25"></Input>
            <Button onPress={() => showMode('time', 'clock')} backgroundColor="#ffcc00" width="20%" data-mode="date" data-display="calendar">
              <MaterialCommunityIcons name="calendar" size={30} color="black" />
            </Button>
          </Box>

          <Box flexDirection="row" justifyContent="space-between" width="100%" marginTop="10">
            <Button backgroundColor="#ffcc00" width="80%" margin="auto">
              <Text>Salvar</Text>
            </Button>
          </Box>
        </Box>



      </Box>
    </NativeBaseProvider>
  )

}