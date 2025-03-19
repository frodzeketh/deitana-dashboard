// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx'; // Importa el Dashboard
import ChatIA from './pages/ChatIA.jsx';
import Facturacion from './pages/Facturacion.jsx';
import RegistroDeFacturasEmitidas from './pages/RegistroDeFacturasEmitidas.jsx';
import ControlDeIncidencias from './pages/ControlDeIncidencias.jsx';
import Clientes from './pages/Clientes.jsx';
import OrdenDeRecogida from './pages/OrdenDeRecogida.jsx';
import EncargosDeSiembra from './pages/EncargosDeSiembra.jsx';
import Partidas from './pages/Partidas.jsx';
import ResumenPartidas from './pages/ResumenPartidas.jsx';
import PartidasCliente from './pages/PartidasCliente.jsx';
import AlmacenesDeVenta from './pages/AlmacenesDeVenta.jsx';
import HistorialDeSucesos from './pages/HistorialDeSucesos.jsx';
import Telefonos from './pages/Telefonos.jsx';
import Articulos from './pages/Articulos.jsx';
import OrdenAvisos from './pages/OrdenAvisos.jsx';
import MensajeriaInterna from './pages/MensajeriaInterna.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Ruta del Dashboard */}
        <Route path="/chat-ia" element={<ChatIA />} />
        <Route path="/facturacion" element={<Facturacion />} />
        <Route path="/registro-de-facturas-emitidas" element={<RegistroDeFacturasEmitidas />} />
        <Route path="/control-de-incidencias" element={<ControlDeIncidencias />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/orden-de-recogida" element={<OrdenDeRecogida />} />
        <Route path="/encargos-de-siembra" element={<EncargosDeSiembra />} />
        <Route path="/partidas" element={<Partidas />} />
        <Route path="/resumen-partidas" element={<ResumenPartidas />} />
        <Route path="/partidas-cliente" element={<PartidasCliente />} />
        <Route path="/almacenes-de-venta" element={<AlmacenesDeVenta />} />
        <Route path="/historial-de-sucesos" element={<HistorialDeSucesos />} />
        <Route path="/telefonos" element={<Telefonos />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/orden-avisos" element={<OrdenAvisos />} />
        <Route path="/mensajeria-interna" element={<MensajeriaInterna />} />
      </Routes>
    </Router>
  );
};

export default App;