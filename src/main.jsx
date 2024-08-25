import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "./framework.css"
import { CartProvider } from './context/CartContext.jsx'
import { Provider } from 'react-redux'
import store from './store.js'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CartProvider>
      <App />
    </CartProvider>
  </Provider>,
)
