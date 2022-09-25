import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  title: {
    marginTop: 48,
    fontSize: 24,
    color: "#fff",
    fontWeight: 'bold'
  },
  date: {
    color: '#6b6b6b',
    fontSize: 16
  },
  form:{
    flexDirection: 'row',
    marginTop: 36
  },
  input:{
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    marginRight: 8
  },
  text:{
    color: '#fff',
    fontSize: 24
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#31cf67',
    width: 56,
    height: 56
  },
  titleParticipant:{
    marginTop: 48,
    marginBottom: 20,
    fontSize: 24,
    color: "#fff",
    fontWeight: 'bold'
  },
  listEmpytText:{
    textAlign: 'center',
    color: "#fff",
    fontSize: 14
  },
  containerList:{
    paddingBottom:32
  }
})