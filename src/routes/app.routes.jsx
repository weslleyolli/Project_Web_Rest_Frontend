import { Routes, Route } from 'react-router-dom';

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    )
}
