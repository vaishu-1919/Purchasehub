import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Purchase from "./pages/Purchase";
import PurchaseDetails from "./pages/PurchaseDetails";
import Suppliers from "./pages/Suppliers";
import SupplierDetails from "./pages/SupplierDetails";
import Reports from "./pages/Reports";


function App() {
  return (
    <Routes>

      {/* Login Page */}
      <Route
        path="/login"
        element={<Login />}
      />


      {/* Main Application Layout */}
      <Route element={<Layout />}>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* Purchase */}
        <Route
          path="/purchase"
          element={<Purchase />}
        />

        <Route
          path="/purchase-details"
          element={<PurchaseDetails />}
        />


        {/* Suppliers */}
        <Route
          path="/suppliers"
          element={<Suppliers />}
        />

        <Route
          path="/supplier-details"
          element={<SupplierDetails />}
        />


        {/* Reports */}
        <Route
          path="/reports"
          element={<Reports />}
        />

      </Route>

    </Routes>
  );
}


export default App;