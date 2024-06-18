import { Route, Routes } from "react-router-dom";
import AddProduct from "../../Components/AddProduct/AddProduct";
import ListProducts from "../../Components/ListProducts/ListProducts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./Admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProducts />} />
      </Routes>
    </div>
  );
};

export default Admin;
