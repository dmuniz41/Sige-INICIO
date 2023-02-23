import Navbar from "./Navbar";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { MdLock } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdBusiness } from "react-icons/md";
import { IoMdDocument } from "react-icons/io";

const DashboardScreen = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard_wrapper">
        <div className="sidebar">
          <Sidebar width="280px">
            <Menu>
              <SubMenu label="Seguridad" icon={<MdLock />}>
                <MenuItem> Usuarios </MenuItem>
              </SubMenu>
              <SubMenu label="Nomencladores">
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
              <SubMenu label="Oficina" icon={<MdBusiness />}>
                <MenuItem> Gastos de oficina </MenuItem>
              </SubMenu>
              <SubMenu label="Almacén">
                <MenuItem> Almacén </MenuItem>
                <MenuItem> Almacén de vales </MenuItem>
              </SubMenu>
              <SubMenu label="Proyecto">
                <MenuItem> Proyectos </MenuItem>
                <MenuItem> Gastos de proyectos </MenuItem>
              </SubMenu>
              <MenuItem icon={<IoMdDocument />}> Reportes </MenuItem>
            </Menu>
          </Sidebar>
        </div>
        {/* DASHBOARD MAIN CONTENT */}
        <div className="dashboard_main">
          <span>Main Content</span>
        </div>
      </div>
    </>
  );
};

export default DashboardScreen;
