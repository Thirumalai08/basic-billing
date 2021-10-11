import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Logo from "../assets/logo.jpg";
import "./scss/invoice.scss";

function NewInvoice() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <>
            <div className="container" ref={componentRef}>
                <div className="invoice-outer">
                    <div className="invoice-header">
                        <div className="left">
                            <div className="d-flex align-items-center justify-content-center flex-column p-3">
                                <div className="logo">
                                    <img src={Logo} alt="logo" />
                                </div>
                                <div className="text-center">
                                    <h3>Velan Tires</h3>
                                    <p>No. 9/3 C,Puthu Road,Dharasuram,Thanjavur - 612 702.</p>
                                </div>
                                <h6>
                                    CELL: <b>9585155669,9585055669</b>
                                </h6>
                            </div>
                        </div>
                        <div className="right">
                            <div className="top">
                                <h4>GSTIN:33BVHPR129M1Z4</h4>
                                <h5>
                                    Invoice Date: <b>09/10/2021</b>
                                </h5>
                            </div>
                            <div className="bottom">
                                <div className="customer-details d-flex align-items-center justify-content-between">
                                    <div>
                                        <p>A. Thirumalai Nambi</p>
                                        <p>Thanjavur</p>
                                    </div>
                                    <div>
                                        <p>TN49BH1780</p>
                                        <p>8189958658</p>
                                    </div>
                                </div>
                                <div className="car-types">
                                    <h6>car type: hatch back / sedan / suv / commercial</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-body">
                        <div className="invoice-right">
                            <div className="right-header">
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "55%",
                                        height: "100%",
                                        borderRight: "1px solid #222",
                                    }}
                                >
                                    <h5 className="text-center pt-3" style={{ fontSize: "16px" }}>
                                        Particular
                                    </h5>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "55%",
                                        width: "15%",
                                        height: "100%",
                                        borderRight: "1px solid #222",
                                    }}
                                >
                                    <h5 className="text-center pt-3" style={{ fontSize: "16px" }}>
                                        Quantity
                                    </h5>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "70%",
                                        width: "15%",
                                        height: "100%",
                                        borderRight: "1px solid #222",
                                    }}
                                >
                                    <h5 className="text-center pt-3" style={{ fontSize: "16px" }}>
                                        Cost
                                    </h5>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "85%",
                                        width: "15%",
                                        height: "100%",
                                    }}
                                >
                                    <h5 className="text-center pt-3" style={{ fontSize: "16px" }}>
                                        Amount
                                    </h5>
                                </div>
                            </div>
                            <div className="right-body">
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        width: "55%",
                                        height: "100%",
                                        borderRight: "1px solid #222",
                                    }}
                                >
                                    <ul className="list-unstyled p-4">
                                        <li className="mb-4">Wheel Alignment</li>
                                        <li className="mb-4">Wheel Balancing</li>
                                    </ul>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "55%",
                                        width: "15%",
                                        height: "100%",
                                        borderRight: "1px solid #222",
                                    }}
                                >
                                    <ul className="list-unstyled p-4">
                                        <li className="mb-4">1</li>
                                        <li className="mb-4">2</li>
                                    </ul>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "70%",
                                        width: "15%",
                                        height: "100%",
                                        borderRight: "1px solid #222",
                                    }}
                                >
                                    <ul className="list-unstyled p-4">
                                        <li className="mb-4">350</li>
                                        <li className="mb-4">75</li>
                                    </ul>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "0",
                                        left: "85%",
                                        width: "15%",
                                        height: "100%",
                                    }}
                                >
                                    <ul className="list-unstyled p-4">
                                        <li className="mb-4">350</li>
                                        <li className="mb-4">150</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="right-footer">
                                <p>Footer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className="btn btn-primary" onClick={handlePrint}>
                    Print
                </button>
            </div>
        </>
    );
}

export default NewInvoice;
