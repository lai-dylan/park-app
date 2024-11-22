import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import useUserStore from "@/store/userStore.tsx";

type Params = {
  requireLogin?: boolean,
  to?: string,
  children: React.ReactNode
}

function RequireAuth({requireLogin = true, to = "/login", children}: Params) {
  const navigate = useNavigate();
  const isLogin = !!useUserStore((state) => state.token);

  useEffect(() => {
    if (requireLogin && !isLogin) {
      navigate(to, {replace: true});
    }
  }, [requireLogin, to, isLogin]);

  return <>{!requireLogin || isLogin ? children : null}</>;
}

export default RequireAuth;
