import Slider from '../components/Slider';
import NavBar from '../components/NavBar';
import MenuIcon from '../components/MenuIcon';

const Persons = () => (
  <div className="flex">
    <div className="lg:drawer-open flex flex-col">
      {/* eslint-disable jsx-a11y/label-has-associated-control */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle my_toggle" />
      {/* <div className="drawer-content">
      </div> */}
      <NavBar />
    </div>
    <div className="sliderWrapper w-full h-full flex flex-col">
      <MenuIcon />
      <Slider />
    </div>
  </div>
);

export default Persons;
