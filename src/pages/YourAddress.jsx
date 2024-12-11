import MainAddress from "../components/AddressComponents/MainAddress/MainAddress";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function YourAddress() {
  return (
    <div className="your-address">
      <Navbar />
      <MainAddress />
      <Footer />
    </div>
  );
}

export default YourAddress;
