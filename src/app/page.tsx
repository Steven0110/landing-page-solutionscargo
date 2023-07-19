import Image from 'next/image'
import Banner from '../components/Banner'
import Introduction from '../components/Introduction'

export default function Home() {
  return (
    <main>
      <Banner></Banner>
      <Introduction/>
    </main>
  )
}
