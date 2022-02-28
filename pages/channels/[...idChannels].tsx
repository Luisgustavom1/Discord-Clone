import SideBar from "src/components/UI/SideBar";
import WrappedComponent from "src/HOC/WrappedComponentAuth";
import Authenticated from "src/layouts/Authenticated";

const Channels = () => {
  return (
    <Authenticated>
      <SideBar />
    </Authenticated>
  );
};

export default WrappedComponent(Channels);
