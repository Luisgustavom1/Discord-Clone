import React from "react";
import { useRouter } from "next/router";

import useAuth from "src/hooks/auth";

function areInBrowser() {
  return typeof window !== "undefined";
}

const WrappedComponentAuth = <T extends React.FunctionComponent>(
  Component: React.FunctionComponent
) => {
  const AuthComponent = ({ ...props }: React.ComponentProps<T>) => {
    const { auth } = useAuth();
    const router = useRouter();

    if (!auth && areInBrowser()) {
      router.push("/login");
      return <div>Carregando...</div>;
    }

    return <Component {...props} />;
  };

  return AuthComponent;
};

export default WrappedComponentAuth;
