import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems:"flex-start"
    },
    w50:{
      width:"50%"
    },
    w100:{
      width:"100%"
    },
    barraMenu:{
      width:"100%"
    },
    opcoes:{
       display:"flex",
       width:"100%",
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"flex-end",
       backgroundColor:"red"
    }
  });

export default styles;