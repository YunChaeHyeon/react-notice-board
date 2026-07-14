import { ROUTES } from '@/consts/route';
import Board from '@/pages/Board/Board';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/Route/Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.BOARD} element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
