import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/variable.css";
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"; // DevTools import


const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>  
      <ReactQueryDevtools client={queryClient}/>
       <App />
     </BrowserRouter>
    </QueryClientProvider>
)
