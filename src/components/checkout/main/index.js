import { endsWith } from "lodash";
import Contact from "./contact";
import DataForm from "./dataForm";
import ShippingForm from "./shippingForm";



const Main = () => {
    return(<>
            <div className="col p-4">
                <Contact />
                <DataForm />
                <ShippingForm />
                <div className="d-flex" style={{
                    justifyContent: 'end'
                }}>
                    <button className="btn btn-dark"> Continue to Shipping </button>
                </div>
            </div>
          </>);
}

export default Main;