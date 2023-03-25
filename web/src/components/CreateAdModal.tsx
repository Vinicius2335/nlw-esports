import * as Checkbox from "@radix-ui/react-checkbox"
import * as Dialog from "@radix-ui/react-dialog"
import * as Select from "@radix-ui/react-select"
import * as ToggleGroup from "@radix-ui/react-toggle-group"
import axios, { AxiosResponse } from "axios"
import { CaretDown, CaretUp, Check, GameController } from "phosphor-react"
import { useEffect, useState, FormEvent } from "react"
import { toast } from "react-toastify"

import { Game } from "../models/Game"
import { Input } from "./Form/Input"

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault()
    console.log("Envio o form")

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    try {
      await axios.post(`http://localhos:8080/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        weekDays: weekDays.map(Number),
        voiceChannel: useVoiceChannel
      })

      toast.success("Anúncio criado com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Erro ao criar um anúncio")
    }
  }

  function setBackgroundWeekDays(value: string): string {
    return weekDays.includes(value) ? "bg-violet-500" : "bg-zinc-900"
  }

  function handleOnChecked(checked: boolean) {
    if (checked === true) {
      setUseVoiceChannel(true)
    } else {
      setUseVoiceChannel(false)
    }
  }

  useEffect(() => {
    axios.get<Game[]>("http://localhost:8080/games").then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[500px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">Publique Seu Anúncio</Dialog.Title>

        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <div>
            {/* NOTE criar um componente */}
            <Select.Root name="game">
              <Select.Trigger
                aria-label="game"
                className="bg-zinc-900 py-3 px-4 rounded text-sm text-zinc-500 w-full flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634]"
              >
                <Select.Value placeholder="Selecione o game que deseja jogar" />
                <Select.Icon>
                  <CaretDown />
                </Select.Icon>
              </Select.Trigger>

              <Select.Portal>
                <Select.Content>
                  <Select.ScrollUpButton className=" text-gray-700">
                    <CaretUp />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="bg-zinc-900 p-2 rounded-lg shadow-lg">
                    <Select.Group>
                      {games.map((game: Game) => (
                        <Select.Item
                          key={game.id}
                          value={game.id}
                          className="relative flex items-center px-8 py-2 rounded-md text-sm text-gray-300 font-semibold focus:bg-zinc-700 focus:outline-none select-none"
                        >
                          <Select.ItemText>{game.title}</Select.ItemText>
                          <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                            <Check className="w-4 h-4 text-emerald-500" />
                          </Select.ItemIndicator>
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">
              Seu nome (ou nickname)
            </label>
            <Input id="name" name="name" type="text" placeholder="Como te chamam dentro do game?" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying" className="font-semibold">
                Joga há quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                name="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord" className="font-semibold">
                Qual seu Discord?
              </label>
              <Input id="discord" name="discord" type="text" placeholder="Usuario#0000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays" className="font-semibold">
                Quando costuma jogar?
              </label>
              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-1 "
                onValueChange={setWeekDays}
                value={weekDays}
              >
                <ToggleGroup.Item
                  value="0"
                  title="Segunda"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("0")}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="1"
                  title="Terça"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("1")}`}
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="2"
                  title="Quarta"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("2")}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="3"
                  title="Quinta"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("3")}`}
                >
                  Q
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="4"
                  title="Sexta"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("4")}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="5"
                  title="Sabado"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("5")}`}
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="6"
                  title="Domingo"
                  className={`w-8 h-8 rounded focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634] ${setBackgroundWeekDays("6")}`}
                >
                  D
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart" className="font-semibold">
                Qual horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" name="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" name="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <label className="font-semibold mt-2 flex items-center gap-2 text-sm cursor-pointer">
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked: boolean) => handleOnChecked(checked)}
              className="w-6 h-6 p-1 rounded bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-[#2A2634]"
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz?
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 px-5 h-12 rounded-md font-semibold flex items-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>

      </Dialog.Content>
    </Dialog.Portal>
  )
}
