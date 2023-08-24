
import ProductsTable from './containers/ProductsBody/productsTable.js';
import ProductPreview from './components/ProductPreview/ProductPreview.js';
import Login from './containers/Login/login.js';
import PrivateRoute from './privateRoutes.js';
import ProductId from './components/productId/productId.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login/>}/>

        <Route element={<PrivateRoute/>}>
          <Route path="/table" element={<ProductsTable/>}/>
          <Route path="/preview" element={<ProductPreview/>}/>
          <Route path='/product/:id' element={<ProductId/>}/>
        </Route>
        <Route path="*" element={<div>404 not found</div>}/>
    </Routes>
    </BrowserRouter>
)
export default AppRouter
