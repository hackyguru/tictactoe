import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Hero from '@/components/Hero'
import Header from '@/components/Header'


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Tic Tac Toe</title>
        <meta name="description" content="Tic Tac Toe game created with Waku" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-black h-screen'>
        <Header />
        <Hero />
      </main>
    </>
  )
}
