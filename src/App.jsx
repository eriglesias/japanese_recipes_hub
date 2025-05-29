import './styles/App.css'
import RecipeTitle from './components/RecipeTitle'

function App() {

  return (
    <>
      <div className="card">
        <RecipeTitle title="Tonkatsu"/>
        <RecipeTitle title="Okonomiyaki"/>
      </div>
    </>
  )
}

export default App
