import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Avatar, HStack, Center, NativeBaseProvider, Box, AddIcon, StatusBar, Text, Divider, FlatList, View, Switch, IconButton, Button } from "native-base";
import { Platform } from 'react-native';

export default function AddAlarme(){
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
  
    const onChange = (event:any, selectedDate:any) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const showMode = () => {
      setShowDatePicker(true);
    };
    return(
        <NativeBaseProvider>
        <Box flex={1} bg="#fff" flexDirection="column" padding="2.5">


        <HStack mx={{
          base: "auto",
          md: "0"
        }} space={2}>
          <HStack flex={1} justifyContent="space-between" alignItems="center" flexDirection="row" width="100%" marginTop="2" marginBottom="5">
            <Text fontSize="4xl">Criar Alarme</Text>
          </HStack>

          <View>
        <Button onPress={showMode}>
            <Text>Hora</Text>
        </Button>
      </View>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="clock"
          onChange={onChange}
        />
      )}

        </HStack>


      </Box>
      </NativeBaseProvider>
    )

}