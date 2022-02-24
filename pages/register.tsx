import Button from "src/components/UI/Button";
import Authentication from "src/layouts/Authentication";
import FormContext from "src/components/ReactHookForm/FormContext";
import Card from "src/components/UI/Card";
import { InputForm } from "src/components/ReactHookForm/InputForm";
import { LinkTypograph } from "src/components/UI/Typography";

export default function Register() {
  const submit = (data: any) => {
    console.log(data);
  };

  return (
    <Authentication>
      <Card title="Criar uma conta">
        <FormContext onSubmit={submit} className="flex flex-col gap-20 mb-8">
          <InputForm name="email" label="e-mail" id="email" isRequired />
          <InputForm name="user" label="Nome de usuário" id="user" isRequired />
          <InputForm
            name="password"
            label="Senha"
            id="password"
            type="password"
            isRequired
          />
          <Button type="submit">Continuar</Button>
        </FormContext>
        <LinkTypograph href="/login">Já tem uma conta?</LinkTypograph>
        <p className="text-xs text-gray-400 mt-16 break-all">
          Ao se registrar, você concorda com os{" "}
          <LinkTypograph
            size="xs"
            className="mr-[3px]"
            href="https://discord.com/terms"
          >
            termos de serviço
          </LinkTypograph>
          e a{" "}
          <LinkTypograph size="xs" href="https://discord.com/privacy">
            política de privacidade
          </LinkTypograph>
          do Discord.
        </p>
      </Card>
    </Authentication>
  );
}
