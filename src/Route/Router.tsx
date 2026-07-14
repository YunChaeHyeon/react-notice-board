import { ROUTES } from '@/consts/route';
import FnQ from '@/pages/FnQ/FnQ';
import History from '@/pages/History/History';
import Home from '@/pages/Home/Home';
import Manual from '@/pages/Manual/Manual';
import Notice from '@/pages/Notice/Notice';
import Business from '@/pages/Business/Business';
import Promotion from '@/pages/Promotion/Promotion';
import Service from '@/pages/Service/Service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from '@/pages/Product/Product';
import Guide from '@/pages/Guide/Guide';
import Layout from '@/Route/Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.BUSINESS} element={<Business />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          <Route path={ROUTES.SERVICE} element={<Service />} />
          <Route path={ROUTES.MANUAL} element={<Manual />} />
          <Route path={ROUTES.GUIDE} element={<Guide />} />
          <Route path={ROUTES.FNQ} element={<FnQ />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
          <Route path={ROUTES.NOTICE} element={<Notice />} />
          <Route path={ROUTES.PROMOTION} element={<Promotion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
