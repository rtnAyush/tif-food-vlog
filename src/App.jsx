import { Hero } from './components/Hero'
import { About } from './components/About'
import { ArticleCards } from './components/ArticleCards'


function App() {

  return (
    <div className='text-blueish font-open mx-auto'>
      <Hero />
      <About />
      <ArticleCards />
    </div>
  )
}

export default App
