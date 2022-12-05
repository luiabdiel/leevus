import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../pages'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pagina-inicial' element={<Home />} />
                <Route path='/carrinho' element={<h1>Página de carrinho</h1>} />

                <Route path='/' element={<Navigate to="/pagina-inicial" replace />} />

                <Route path='*' element={<h1>Essa página não existe</h1>} />
            </Routes>
        </BrowserRouter>
    )
}