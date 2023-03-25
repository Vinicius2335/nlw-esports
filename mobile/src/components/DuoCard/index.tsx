import { View, TouchableOpacity, Text } from "react-native"
import { THEME } from "../../theme"
import { convertMinutesToHourString } from "../../utils/convert-minutes-to-hour-string"
import { DuoInfo } from "../DuoInfo"
import { GameController } from "phosphor-react-native"

import { styles } from "./styles"

export interface DuoCardProps {
  hourEnd: number
  hourStart: number
  id: string
  name: string
  voiceChannel: boolean
  yearsPlaying: number
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  const horaStart = convertMinutesToHourString(data.hourStart)
  const horaEnd = convertMinutesToHourString(data.hourEnd)

  function usaCanalVoz(): string {
    return data.voiceChannel ? "Sim" : "Não"
  }

  function corCampoCanalVoz(): string {
    return data.voiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
  }

  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={data.name} />
      <DuoInfo label="Tempo de Jogo" value={`${data.yearsPlaying} anos`} />
      <DuoInfo label="Disponibilidade" value={`\u2022 ${horaStart}h - ${horaEnd}h`} />
      <DuoInfo label="Chamada de Áudio" value={usaCanalVoz()} colorValue={corCampoCanalVoz()} />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}
