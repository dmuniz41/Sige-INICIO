import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ProSidebarProvider>
          <AppRouter />;
        </ProSidebarProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
