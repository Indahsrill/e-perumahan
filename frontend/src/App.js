import Footer from "./components/features/Footer.js";
import Footer_u from "./components/features/Footer_u.js";
import Header_u from "./components/features/Header_u.js";
import Sidebar from "./components/features/Sidebar.js";
import Berita from "./components/features/Berita.js";
import Datauser from "./components/features/Datauser.js";
import Transaksi from "./components/features/Transaksi.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/features/Dashboard.js";
import Pembayaran from "./components/features/Pembayaran.js";
import Profil from "./components/features/Profil.js";

import Formtambahberita from "./components/features/Formtambahberita.js";
import Formtambahuser from "./components/features/Formtambahuser.js";

import Formupdateberita from "./components/features/Formupdateberita.js";
import Formupdateuser from "./components/features/Formupdateuser.js";
import Formupdatetransaksi from "./components/features/Formupdatetransaksi.js";
import Formupdateprofil from "./components/features/Formupdateprofil.js";
import Formpembayaran from "./components/features/Formpembayaran.js";


import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss?v1.1.0";

import Landing from "./components/views/examples/Landing.js";

import Login from "./components/features/Login.js";
import Alogin from "./components/features/Alogin.js";


function App() {
  return (
    <Router>
      <Routes>



      <Route path="/" element={
          <div>
            <Landing />
          </div>
        } />

        <Route path="/login" element={
          <div>
            <Login />
          </div>
        } />


        <Route path="/alogin" element={
          <div>
            <Alogin />
          </div>
        } />

        <Route path="/berita" element={
          <div>
            <Sidebar />
            <Berita />
            <Footer />
          </div>
        } />

        <Route path="/tambah-berita" element={
          <div>
            <Sidebar />
            <Formtambahberita />
            <Footer />
          </div>
        } />

        <Route path="/berita/edit/:id" element={
          <div>
            <Sidebar />
            <Formupdateberita />
            <Footer />
          </div>
        } />

        <Route path="/berita/delete/:id" element={
          <div>
            <Sidebar />
            <Berita />
            <Footer />
          </div>
        } />

        <Route path="/warga" element={
          <div>
            <Sidebar />
            <Datauser />
            <Footer />
          </div>
        } />

        <Route path="/tambah-warga" element={
          <div>
            <Sidebar />
            <Formtambahuser />
            <Footer />
          </div>
        } />

        <Route path="/warga/edit/:id" element={
          <div>
            <Sidebar />
            <Formupdateuser />
            <Footer />
          </div>
        } />

        <Route path="/warga/delete/:id" element={
          <div>
            <Sidebar />
            <Datauser />
            <Footer />
          </div>
        } />

        <Route path="/transaksi" element={
          <div>
            <Sidebar />
            <Transaksi />
            <Footer />
          </div>
        } />

        <Route path="/transaksi/edit/:id" element={
          <div>
            <Sidebar />
            <Formupdatetransaksi />
            <Footer />
          </div>
        } />

        <Route path="/transaksi/delete/:id" element={
          <div>
            <Sidebar />
            <Transaksi />
            <Footer />
          </div>
        } />

        <Route path="/dashboard" element={
          <div>
            <Header_u />
            <Dashboard />
            <Footer_u />
          </div>
        } />

        <Route path="/pembayaran" element={
          <div>
            <Header_u />
            <Pembayaran />
            <Footer_u />
          </div>
        } />

        <Route path="/form-pembayaran" element={
          <div>
            <Header_u />
            <Formpembayaran />
            <Footer_u />
          </div>
        } />

        <Route path="/profil" element={
          <div>
            <Header_u />
            <Profil />
            <Footer_u />
          </div>
        } />

        <Route path="/form-updateprofil" element={
          <div>
            <Header_u />
            <Formupdateprofil />
            <Footer_u />
          </div>
        } />

      </Routes>
    </Router>
  );
}

export default App;
