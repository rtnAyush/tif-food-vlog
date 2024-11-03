import { Hero } from './components/Hero'
import { About } from './components/About'
import { ArticleCards } from './components/ArticleCards'
import { Footer } from './components/Footer'


function App() {

  return (
    <div className='text-blueish font-open mx-auto'>
      <Hero />
      <About />
      <ArticleCards />
      <Footer />
    </div>
  )
}

export default App
