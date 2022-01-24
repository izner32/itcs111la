import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Homepage/Hero';
import Logo from '../components/Homepage/Logo';
import Stats from '../components/Homepage/Stats';


export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero> 
      <Logo></Logo>
      <Stats></Stats>
      <Footer></Footer>
    </>
  )
}