// modules
import { Switch, Route } from 'react-router-dom'

// components
import HomePage from './pages/homepage/homepage.component'

// styles
import './App.sass'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
