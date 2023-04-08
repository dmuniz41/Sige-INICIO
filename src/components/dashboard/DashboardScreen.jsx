import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import { MdLock } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";
import { HiOfficeBuilding } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";
import { FaWarehouse } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import inicio from "../../assets/inicio.svg";

const DashboardScreen = () => {
  // cont menuItemStyle
  const { collapsed } = useProSidebar();

  return (
    <div className="dashboard_wrapper">
      <div className="sidebar">
        <Sidebar width="260px" transitionDuration={500}>
          <Menu
            transitionDuration={500}
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0 || level === 1)
                  return {
                    color: disabled ? "rgba(0, 0, 0, 0.54);" : "rgba(0, 0, 0, 0.54)",
                    backgroundColor: active ? "#eecef9" : undefined,
                  };
              },
            }}
          >
            {collapsed ? <h1 className="dashboard_collapsed_logo">INC</h1> : <img src={inicio} alt="inicioLogo" className="dashboard_logo" />}
            {/* </MenuItem> */}
            <SubMenu label="Seguridad" icon={<MdLock className="menuItem" />}>
              <MenuItem component={<Link to="user" />}> Usuarios </MenuItem>
            </SubMenu>
            <SubMenu label="Nomencladores" icon={<IoMdSettings className="menuItem" />}>
              <MenuItem component={<Link to="area" />}>Área</MenuItem>
              <MenuItem component={<Link to="unitmeasure" />}> Unidad de Medida </MenuItem>
              <MenuItem component={<Link to="supplier" />}> Proveedores </MenuItem>
              <MenuItem component={<Link to="product_category" />}>Categoría del producto</MenuItem>
              <MenuItem component={<Link to="product_variation" />}>Variación del producto</MenuItem>
              <MenuItem component={<Link to="hiring_stages" />}>Estado de la contratación</MenuItem>
              <MenuItem component={<Link to="hiring" />}> Contratación </MenuItem>
              <MenuItem component={<Link to="client" />}> Cliente </MenuItem>
              <MenuItem component={<Link to="price_rates" />}> Tarifas </MenuItem>
              <MenuItem component={<Link to="expense" />}> Configuración de gastos </MenuItem>
              <MenuItem component={<Link to="proyect_state" />}> Estado del proyecto </MenuItem>
              <MenuItem component={<Link to="activity" />}> Actividades </MenuItem>
              <MenuItem component={<Link to="subcontract" />}> Subcontrataciones </MenuItem>
              <MenuItem component={<Link to="roles" />}> Cargos </MenuItem>
            </SubMenu>
            <SubMenu label="Recursos Humanos" icon={<MdPeople className="menuItem" />}>
              <MenuItem component={<Link to="worker" />}> Trabajador </MenuItem>
            </SubMenu>
            <SubMenu label="Oficina" icon={<HiOfficeBuilding className="menuItem" />}>
              <MenuItem component={<Link to="office_expenses" />}> Gastos de oficina </MenuItem>
            </SubMenu>
            <SubMenu label="Almacén" icon={<FaWarehouse className="menuItem" />}>
              <MenuItem component={<Link to="warehouse" />}> Almacén </MenuItem>
              <MenuItem component={<Link to="tickets_warehouse" />}> Almacén de vales </MenuItem>
            </SubMenu>
            <SubMenu label="Proyecto" icon={<FaProjectDiagram className="menuItem" />}>
              <MenuItem component={<Link to="projects" />}> Proyectos </MenuItem>
              <MenuItem component={<Link to="project_expenses" />}> Gastos de proyectos </MenuItem>
            </SubMenu>
            <MenuItem component={<Link to="reports" />} icon={<IoMdDocument className="menuItem" />}>
              Reportes
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
      <div className="dashboard_content">
        <Navbar />
        {/* DASHBOARD MAIN CONTENT */}
        <div className="dashboard_main">
          <span></span>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
