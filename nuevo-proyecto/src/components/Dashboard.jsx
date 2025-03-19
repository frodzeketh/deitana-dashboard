"use client"

import { useState, useEffect } from "react"
import {
  Menu,
  Home,
  MessageCircle,
  Phone,
  FileIcon as FileInvoice,
  FileTextIcon as FileText2,
  ChevronRight,
  AlertCircle,
  Truck,
  Package,
  ClipboardList,
  UserCheck,
  Store,
  History,
  ShoppingBag,
  Bell,
  Users,
  Bot,
} from "lucide-react"
import Seedling from "./icons/Seedling"
import ChatGlobal from "./ChatGlobal"
import CardsMain from "./CardsMain"
import "../global.css"

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
      if (window.innerWidth <= 768) {
        setSidebarOpen(false)
      }
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="dashboard-container">
      {/* Botón flotante para móviles */}
      {isMobile && !sidebarOpen && (
        <button className="mobile-menu-trigger" onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <button className="menu-button" onClick={toggleSidebar}>
            <Menu size={20} />
            {sidebarOpen && <span>Menu</span>}
            <ChevronRight className={`arrow ${sidebarOpen ? "" : "rotated"}`} size={16} />
          </button>
        </div>

        <div className="sidebar-section">
          <div className="section-title">{sidebarOpen && "PERSONAL"}</div>
          <ul className="nav-links">
            <li className="nav-link active">
              <Home size={20} />
              {sidebarOpen && <span>Dashboard</span>}
              {sidebarOpen && <div className="badge">4</div>}
            </li>
            <li className="nav-link">
              <Bot size={20} />
              {sidebarOpen && <span>Chat IA</span>}
              {sidebarOpen && <ChevronRight size={16} />}
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <div className="section-title">{sidebarOpen && "APPS"}</div>
          <ul className="nav-links">
            <li className="nav-link">
              <FileInvoice size={20} />
              {sidebarOpen && <span>Facturación</span>}
            </li>
            <li className="nav-link">
              <FileText2 size={20} />
              {sidebarOpen && <span>Registro de facturas emitidas</span>}
            </li>
            <li className="nav-link">
              <AlertCircle size={20} />
              {sidebarOpen && <span>Control de incidencias</span>}
            </li>
            <li className="nav-link">
              <Users size={20} />
              {sidebarOpen && <span>Clientes</span>}
            </li>
            <li className="nav-link">
              <Truck size={20} />
              {sidebarOpen && <span>Orden de recogida</span>}
            </li>
            <li className="nav-link">
              <Seedling size={20} />
              {sidebarOpen && <span>Encargos de siembra</span>}
            </li>
            <li className="nav-link">
              <Package size={20} />
              {sidebarOpen && <span>Partidas</span>}
            </li>
            <li className="nav-link">
              <ClipboardList size={20} />
              {sidebarOpen && <span>Resumen partidas</span>}
            </li>
            <li className="nav-link">
              <UserCheck size={20} />
              {sidebarOpen && <span>Partidas cliente</span>}
            </li>
            <li className="nav-link">
              <Store size={20} />
              {sidebarOpen && <span>Almacenes de venta</span>}
            </li>
            <li className="nav-link">
              <History size={20} />
              {sidebarOpen && <span>Historial de sucesos</span>}
            </li>
            <li className="nav-link">
              <Phone size={20} />
              {sidebarOpen && <span>Telefonos</span>}
            </li>
            <li className="nav-link">
              <ShoppingBag size={20} />
              {sidebarOpen && <span>Artículos</span>}
            </li>
            <li className="nav-link">
              <Bell size={20} />
              {sidebarOpen && <span>Orden avisos</span>}
            </li>
            <li className="nav-link">
              <MessageCircle size={20} />
              {sidebarOpen && <span>Mensajería interna</span>}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? "" : "expanded"}`}>
        <h1 className="page-title">Dashboard</h1>

        {/* Componente de tarjetas de estadísticas */}
        <CardsMain />

        {/* Chat Global */}
        <div className="chat-wrapper">
          <ChatGlobal />
        </div>
      </div>

      {/* Overlay para dispositivos móviles */}
      {isMobile && sidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </div>
  )
}

export default Dashboard

