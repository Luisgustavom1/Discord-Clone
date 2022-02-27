import WrappedComponent from "src/HOC/WrappedComponentAuth";
import Authenticated from "src/layouts/Authenticated";

const Channels = () => {
  return (
    <div>
      <Authenticated />
    </div>
  );
};

export default WrappedComponent(Channels);
