import WrappedComponent from "src/HOC/WrappedComponentAuth";

const Channels = (): JSX.Element => {
  return (
    <div>
      <h1>OOOIIII</h1>
      <p>Tamo no canal</p>
    </div>
  );
};

export default WrappedComponent(Channels);
