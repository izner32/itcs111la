import Image from 'next/image';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import About from '../../components/Devpage/About';
import Main from '../../components/Devpage/Main';
import * as data from '../../../data.json';
const data_json = JSON.stringify(data)
const data_obj = JSON.parse(data_json)

function Albios() {
  return (
    <>
      <Nav></Nav>
      <Main name={data_obj.devs.shahid.name} img={data_obj.devs.shahid.img} description={data_obj.devs.shahid.description} ig={data_obj.devs.shahid.ig}></Main>
      <About general={data_obj.devs.shahid.general} education={data_obj.devs.shahid.education} interest={data_obj.devs.shahid.interest}></About>
      <Footer></Footer>
    </>
  )
}

export default Albios;