import Image from 'next/image';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import About from '../../components/Devpage/About';
import Main from '../../components/Devpage/Main';
import * as data from '../../../data.json';
const data_json = JSON.stringify(data)
const data_obj = JSON.parse(data_json)

function Waje() {
  return (
    <>
      <Nav></Nav>
      <Main name={data_obj.devs.mayo.name} img={data_obj.devs.mayo.img} description={data_obj.devs.mayo.description}></Main>
      <About general={data_obj.devs.mayo.general} education={data_obj.devs.mayo.education} interest={data_obj.devs.mayo.interest}></About>
      <Footer></Footer>
    </>
  )
}

export default Waje;