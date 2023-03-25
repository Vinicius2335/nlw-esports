import 'react-toastify/dist/ReactToastify.css';

import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import logo from './assets/logo.svg';
import { CreateAdBanner } from './components/CreatAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { GameBanner } from './components/GameBanner';
import { Game } from './models/Game';

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios.get<Game[]>("http://localhost:8080/games").then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={logo} alt="logo nlw e-sports" />

        <h1 className="text-6xl text-white font-black mt-20">
          Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
        </h1>

        <div className="grid grid-cols-6 gap-6 mt-16">
          {games.map(game => {
            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game.ads}
              />
            )
          })}
        </div>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </>
  )
}

export default App
