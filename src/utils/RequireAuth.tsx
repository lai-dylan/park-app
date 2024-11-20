import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

type Params = {
  requireLogin?: boolean,
  to?: string,
  children: React.ReactNode
}

function RequireAuth({requireLogin = true, to = "/login", children}: Params) {
  const navigate = useNavigate();
  const isLogin = !!localStorage.getItem("token");

  useEffect(() => {
    if (requireLogin && !isLogin) {
      navigate(to, {replace: true});
    }
  }, [requireLogin, to, isLogin]);

  return <>{!requireLogin || isLogin ? children : null}</>;
}

export default RequireAuth;
