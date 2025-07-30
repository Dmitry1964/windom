import { StrictMode } from 'react'
import App from 'src/app/app';
import { createRoot } from 'react-dom/client'
import 'src/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
