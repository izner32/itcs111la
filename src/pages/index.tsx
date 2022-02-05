import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Main from '../components/Main';
import About from '../components/About';

import * as data from '../../data.json';
const data_json = JSON.stringify(data)
const data_obj = JSON.parse(data_json)

export default function Home() {
  return (
    <>
      <Main name={data_obj.renz.name} img={data_obj.renz.img} description={data_obj.renz.description} li={data_obj.renz.li}></Main>
      <About general={data_obj.renz.general} education={data_obj.renz.education} interest={data_obj.renz.interest}></About>
    </>
  )
}