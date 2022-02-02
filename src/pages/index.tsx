import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Homepage/Hero';
import Logo from '../components/Homepage/Logo';
import Stats from '../components/Homepage/Stats';
import * as data from '../../data.json';
const data_json = JSON.stringify(data)
const data_obj = JSON.parse(data_json)

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero> 
      <Logo description={[data_obj.devs.renz.description, data_obj.devs.shahid.description, data_obj.devs.rudini.description, data_obj.devs.mayo.description]}></Logo>
      <Stats></Stats>
      <Footer></Footer>
    </>
  )
}