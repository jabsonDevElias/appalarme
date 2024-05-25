import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Avatar, HStack, Center, NativeBaseProvider, Box, AddIcon, StatusBar, Text, Divider, FlatList, View, Switch, IconButton, Button, Input } from "native-base";
import { Platform } from 'react-native';
import { Feather, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function AddAlarme() {
  const [date, setDate] = useState(new Date());
  const [dateTime, setDateTime] = useState(new Date());
  const [showDatePickerTime, setShowDatePickerTime] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeTime = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePickerTime(Platform.OS === 'ios');
    setDateTime(currentDate);
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = () => {
    setShowDatePicker(true);
  };

  const showModeTime = () => {
    setShowDatePickerTime(true);
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
            mode="date"
            is24Hour={true}
            display="calendar"
            onChange={onChange}
          />

        )}

        {showDatePickerTime && (
          <DateTimePicker
            testID="dateTimePicker2"
            value={dateTime}
            mode="time"
            is24Hour={true}
            display="clock"
            onChange={onChangeTime}
            
            
          />

        )}


        <Box flex={1} flexDirection="column" width="100%" flexWrap="wrap" marginTop="59">
          <Box  flexDirection="row" justifyContent="space-between" >
            <Input type="text" width="75%" isDisabled value="dd/mm/aaaa" fontSize="25"></Input>
            <Button onPress={showMode} backgroundColor="#ffcc00" width="20%">
              <MaterialCommunityIcons name="clock" size={30} color="black" />
            </Button>
          </Box>

          <Box flexDirection="row" justifyContent="space-between" marginTop="5">
            <Input type="text" width="75%" isDisabled value="hh:mm" fontSize="25"></Input>
            <Button onPress={showMode} backgroundColor="#ffcc00" width="20%">
              <MaterialCommunityIcons name="calendar" size={30} color="black" />
            </Button>
          </Box>

          <Box flexDirection="row" justifyContent="space-between" width="100%" marginTop="10">
           <Button  backgroundColor="#ffcc00" width="80%" margin="auto">
               <Text>Salvar</Text>
            </Button>
            </Box>
        </Box>



      </Box>
    </NativeBaseProvider>
  )

}