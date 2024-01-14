import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

//<Route path="/" element={<Hmoe />} />
//<Route path="/last-queries" element={<LastQueriesName />} />
//<Route path="/last-queries/:name" element={<CurrentLastQueryPage />} />

// const CurrentLastQueryPage = () => {
//     const { name } = useParams();
//     return useGetCurrentAccount(name, {skip: !name})

//     return <div>....</div>
// }
