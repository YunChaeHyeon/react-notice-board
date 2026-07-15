import { ROUTES } from '@/consts/route';
import Board from '@/pages/Board/Board';
import BoardDetail from '@/pages/Board/BoardDetail';
import BoardWrite from '@/pages/Board/BoardWrite';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Login/Login';
import SignUp from '@/pages/SignUp/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/Route/Layout';
import ProtectedRoute from '@/Route/ProtectedRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.BOARD} element={<Board />} />
            <Route path={ROUTES.BOARD_WRITE} element={<BoardWrite />} />
            <Route path="/board/:postId" element={<BoardDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
