

const DataForm = () => {
    return(<>
            <div className="form">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                </div>
                <input className="form-control my-2" type="text" placeholder="Company (optional)"/>
                <input className="form-control my-2" type="text" placeholder="Address"/>
                <input className="form-control my-2" type="text" placeholder="Apartment suite... (optional)"/>
                <input className="form-control my-2" type="text" placeholder="City"/>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Country"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="State"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Zip Code"/>
                    </div>
                </div>
                <input className="form-control my-2" type="text" placeholder="Phone"/>
            </div>
            </>);
}

export default DataForm;