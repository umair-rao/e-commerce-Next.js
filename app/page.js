import Cart from './components/Cart'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <div>
        <Navbar/>
        <Cart/>
        <HomePage/>
      </div>
    </main>
  )
}
