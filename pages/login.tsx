import Head from "next/head";
import { NextPage } from "next";

import { FormValues } from "src/types";

import Authentication from "src/layouts/Authentication";
import FormContext from "src/components/ReactHookForm/FormContext";
import Button from "src/components/UI/Button";
import LogoAndText from "public/assets/svg/logo-and-text.svg";
import Card from "src/components/UI/Card";
import { InputForm } from "src/components/ReactHookForm/InputForm";
import { LinkTypograph } from "src/components/UI/Typography";

const Login: NextPage = () => {
  type values = "identification" | "password";
  const submit = (data: FormValues<values>) => {
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Authentication>
        <Card
          title="Boas-vindas de volta!"
          subtitle="Estamos muito animados em te ver novamente!"
        >
          <div className="absolute top-0 right-1/2 translate-x-1/2 mx-auto mt-20 xs:hidden">
            <LogoAndText />
          </div>
          <FormContext onSubmit={submit}>
            <section className="flex flex-col gap-20">
              <InputForm
                label="E-mail ou número de telefone"
                id="identification"
                name="identification"
                isRequired
              />
              <InputForm
                label="Senha"
                id="password"
                name="password"
                isRequired
              />
            </section>
            <p className="text-sm text-blue mt-4 mb-20 font-medium cursor-pointer hover:underline">
              Esqueceu sua senha?
            </p>
            <div>
              <Button type="submit" className="mb-8">
                Entrar
              </Button>
              <p className="text-sm text-gray-400 font-medium flex gap-4">
                Precisando de uma conta?{" "}
                <LinkTypograph href="/register">Registra-se</LinkTypograph>
              </p>
            </div>
          </FormContext>
        </Card>
      </Authentication>
    </>
  );
};

export default Login;
