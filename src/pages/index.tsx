import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Translator from '@/components/translator'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [word, setWord] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en");
  const [toLanguage, setToLanguage] = useState("fr");
  const [showTranslation, setShowTranslation] = useState(false);
  const [isClient,setIsClient]=useState(false)
  useEffect(() => {
    if(typeof window != 'undefined'){
      setIsClient(true)
    }
    
  }, [])
  const handleWordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
  };

  const handleFromLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromLanguage(event.target.value);
  };

  const handleToLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToLanguage(event.target.value);
  };

  const handleTranslateClick = () => {
    setShowTranslation(true);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-slate-800 w-full h-screen flex flex-col'>
      <div className=' w-fit h-fit p-10 border-stone-500 border-4 rounded-lg m-auto flex flex-col gap-4'>
      <h1 className='text-center text-3xl font-bold text-slate-400'>Type something!</h1>
      <div className=''>
        <label htmlFor="word-input " className='text-slate-100 mr-1 '>Enter a word to translate:</label>
        <input
          id="word-input"
          type="text"
          value={word}
          onChange={handleWordChange}
          className='focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border   p-2.5 text-sm  shadow-sm  bg-gray-700 text-white placeholder-gray-400  border-gray-600'
        />
      </div>
      <div>
        <label htmlFor="from-language-select" className='text-slate-100 mr-1'>From</label>
        <select
          id="from-language-select"
          value={fromLanguage}
          onChange={handleFromLanguageChange}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div>
        <label htmlFor="to-language-select" className='text-slate-100 mr-1'>To:</label>
        <select
          id="to-language-select"
          value={toLanguage}
          onChange={handleToLanguageChange}
        >
          <option value="fr">French</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
{/*       <button onClick={handleTranslateClick}>Translate</button> 
 */}      <div className='h-4 text-center text-xl text-gray-900'>

    <Translator
          word={word?word:'there is no word now xd xd xd'}
          fromLanguage={fromLanguage}
          toLanguage={toLanguage}
          />
          </div>
      
    </div>
    <div className='mt-auto w-full h-fit  '>
      <p className='text-center text-2xl md:text-3xl text-zinc-700 font-bold mb-2'>Made with  <span>passion</span> buy Hossem edine ali</p>
    </div>
  

      </main>
    </>
  )
}
