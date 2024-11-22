import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Suspense, useEffect, useState} from "react";
import {Spin} from "antd";
import {getMenu} from "@/api/user.ts";
import {generateRoutes} from "@/utils/generateRoutes.tsx";
import {routes} from "@/router";
import useSystemStore from "@/store/systemStore.tsx";

function App() {

  const [generatedRouter, setGeneratedRouter] = useState<any>(null);
  // const menuList = useSystemStore((state) => state.menuList);
  const setState = useSystemStore((state) => state.setState);

  const initMenu = async () => {
    const result = await getMenu();
    const generatedRoutes = generateRoutes(result.data);

    setState({
      menuList: result.data
    });

    const rootRoute = routes.find((route) => route.path === "/");
    rootRoute!["children"] = generatedRoutes;

    const buildRouter = createBrowserRouter(routes);
    setGeneratedRouter(buildRouter);
  };

  useEffect(() => {
    initMenu();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Spin/>}>
        {/*<RouterProvider router={generatedRouter}/>*/}

        {generatedRouter ? (
          <RouterProvider router={generatedRouter}/>
        ) : (
          <Spin/>
        )}
      </Suspense>
    </div>
  );
}

export default App;
