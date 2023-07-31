import Image from 'next/image';
import { Inter } from 'next/font/google';
import App from './App.jsx';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      <div className={`flex flex-col items-center ${inter.className} p-24`}
    >
      <App />
      </div>
      <div className={'flex flex-col items-end justify-between'}>
        <img src="meatball.png" alt="Meatball Man" width="128" height="128" style={{opacity:"0.4"}}/>
      </div>
    </main>
  )
}
