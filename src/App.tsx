import './App.css'
import LatestNews from './components/latest-news/LatestNews'
import { Navbar } from './components/navbar/Navbar'

function App() {
  return (
    <>
      <LatestNews />

      <div id="content">
        <Navbar />

        <div id='main-content'>
          <div>Hello</div>
          <div>World</div>
          <div>I Am Mert Akdemir.</div>
        </div>
      </div>

    </>
  )
}

export default App
