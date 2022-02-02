import Image from 'next/image';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import About from '../../components/Devpage/About';
import Main from '../../components/Devpage/Main';
import * as data from '../../../data.json';
const data_json = JSON.stringify(data)
const data_obj = JSON.parse(data_json)

function Delgado() {
  return (
    <>
      <Nav></Nav>
      <Main name={data_obj.devs.rudini.name} img={data_obj.devs.rudini.img} description={data_obj.devs.rudini.description} ig={data_obj.devs.rudini.ig}></Main>
      <About general={data_obj.devs.rudini.general} education={data_obj.devs.rudini.education} interest={data_obj.devs.rudini.interest}></About>
      <Footer></Footer>
    </>
  )
}

export default Delgado;