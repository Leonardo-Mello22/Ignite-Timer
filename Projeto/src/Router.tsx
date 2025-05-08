import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Index'
import { History as HistoryPage } from './Pages/History'
import { DefaultLayout } from './layouts/DefaultLayout/Index'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='history' element={<HistoryPage />} />
      </Route>
    </Routes>
  )
}
