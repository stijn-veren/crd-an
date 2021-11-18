// modules
import { Switch, Route } from 'react-router-dom'

// components
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

// styles
import './App.sass'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
