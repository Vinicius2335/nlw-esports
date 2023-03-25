import {
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
  useFonts
} from "@expo-google-fonts/inter"
import { StatusBar } from "react-native"

import { Background } from "./src/components/Background"
import { Loading } from "./src/components/Loading"
import { Routes } from "./src/routes"
import "./src/services/notificationsConfig"
import { getPushNotificationToken } from "./src/services/getPushNotificationToken"
import { useRef, useEffect } from "react"
import { Subscription } from "expo-modules-core"

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  // Precisa criar uma conta no expo
  // const getNotificationListener = useRef<Subscription>()
  // const responseNotificationListener = useRef<Subscription>()

  // useEffect(() => {
  //   getPushNotificationToken()
  // }, [])

  return (
    <Background>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  )
}
