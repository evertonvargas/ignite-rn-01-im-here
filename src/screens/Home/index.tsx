import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export interface Participants {
  id: string;
  name: string;
}

export default function Home() {
  const [participants, setParticipants] = useState<Participants[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantsAdd() {
    const data = {
      id: String(new Date().getTime()),
      name: participantName,
    };
    setParticipants([...participants, data]);
    setParticipantName("");
    Keyboard.dismiss();
  }

  function handleParticipantsRemove(id: string, name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants(participants.filter((item) => item.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.date}>Sábado, 24 de outubro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantsAdd}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleParticipant}>Participantes</Text>
      <FlatList
        data={participants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Participant data={item} handleRemove={handleParticipantsRemove} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpytText}>Lista de participantes vazia</Text>
        )}
        contentContainerStyle={styles.containerList}
      />
    </View>
  );
}
