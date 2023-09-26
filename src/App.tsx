import React from 'react';
import {useRoutes} from "react-router-dom";
import {routes} from "./routes";
import withRouter from "./hoc/withRouter";
import withRedux from "./hoc/withRedux";
import MainLayout from "./layouts/mainLayout";
import withAppLoader from "./hoc/appLoader";

function App() {
  const routesController = useRoutes(routes)
  return (
    <MainLayout>
      <main>{routesController}</main>
    </MainLayout>
  );
}

export default withRedux(withRouter(withAppLoader(App)));
