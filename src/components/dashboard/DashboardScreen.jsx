import Navbar from "./Navbar";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { MdLock } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import inicio from "../../assets/inicio.svg";

const DashboardScreen = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  return (
    <div className="dashboard_wrapper">
      <div className="sidebar">
        <Sidebar width="280px">
          <Menu>
            <MenuItem
              style={{
                padding: "2rem",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <img src={inicio} alt="inicioLogo" />
            </MenuItem>
            <SubMenu label="Seguridad" icon={<MdLock />}>
              <MenuItem> Usuarios </MenuItem>
            </SubMenu>
            <SubMenu label="Nomencladores" icon={<IoMdSettings />}>
              <MenuItem> Área </MenuItem>
              <MenuItem> Unidad de Medida </MenuItem>
              <MenuItem> Proveedores </MenuItem>
              <MenuItem> Categoría del producto </MenuItem>
              <MenuItem> Variación del producto </MenuItem>
              <MenuItem> Estado de la contratación </MenuItem>
              <MenuItem> Contratación </MenuItem>
              <MenuItem> Cliente </MenuItem>
              <MenuItem> Tarifas </MenuItem>
              <MenuItem> Configuración de gastos </MenuItem>
              <MenuItem> Estado del proyecto </MenuItem>
              <MenuItem> Actividades </MenuItem>
              <MenuItem> Subcontrataciones </MenuItem>
              <MenuItem> Cargos </MenuItem>
            </SubMenu>
            <SubMenu label="Recursos Humanos" icon={<MdPeople />}>
              <MenuItem> Trabajador </MenuItem>
            </SubMenu>
            <SubMenu label="Oficina" icon={<HiOfficeBuilding />}>
              <MenuItem> Gastos de oficina </MenuItem>
            </SubMenu>
            <SubMenu label="Almacén" icon={<FaWarehouse />}>
              <MenuItem> Almacén </MenuItem>
              <MenuItem> Almacén de vales </MenuItem>
            </SubMenu>
            <SubMenu label="Proyecto" icon={<FaProjectDiagram />}>
              <MenuItem> Proyectos </MenuItem>
              <MenuItem> Gastos de proyectos </MenuItem>
            </SubMenu>
            <MenuItem icon={<IoMdDocument />}> Reportes </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div className="dashboard_content">
        <Navbar />
        {/* DASHBOARD MAIN CONTENT */}
        <div className="dashboard_main">
          <span>Main Content</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
