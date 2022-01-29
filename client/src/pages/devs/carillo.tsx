import Image from 'next/image';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import About from '../../components/Devpage/About';
import Main from '../../components/Devpage/Main';
import * as data from '../../../data.json';
const data_json = JSON.stringify(data)
const data_obj = JSON.parse(data_json)

function Carillo() {
  return (
    <>
      <Nav></Nav>
      <Main name={data_obj.devs.renz.name} img={data_obj.devs.renz.img} description={data_obj.devs.renz.description}></Main>
      <About general={data_obj.devs.renz.general} education={data_obj.devs.renz.education} interest={data_obj.devs.renz.interest}></About>
      <Footer></Footer>
    </>
  )
}

export default Carillo;