import Image from 'next/image'
import Banner from '../components/Banner'
import Introduction from '../components/Introduction'
import SliderSection from '../components/SliderSection'
import Social from '../components/Social'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Introduction/>
      <SliderSection/>
      <Social/>
      <Footer/>
    </main>
  )
}
