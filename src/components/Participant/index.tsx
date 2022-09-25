import { Text, View, TouchableOpacity } from "react-native";
import { Participants } from "../../screens/Home";

import { styles } from "./styles";

interface ParticipantProps {
  data: Participants;
  handleRemove: (id: string, name: string) => void;
}

export function Participant({ data, handleRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRemove(data.id, data.name)}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
