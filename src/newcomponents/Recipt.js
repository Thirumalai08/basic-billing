import { StyleSheet } from "@react-pdf/renderer";
import React, { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { GlobalContext } from "../store/GlobalState";
import "./scss/recipt.scss";

const styles = StyleSheet.create({
    page: {
        // flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

function Recipt() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const { item, customerDetails, totalAmount } = useContext(GlobalContext);
    console.log(">>>>>>>>>>>>>>>>", item);
    return (
        <>
            {/* <Document>
                <Page size="A4" style={styles.page}></Page>
            </Document> */}
            <div className="container d-flex align-items-center justify-content-center flex-column pt-5">
                <div className="receipt-box" ref={componentRef}>
                    <div>
                        <p>Bill Details</p>
                        <p>{customerDetails.customerName}</p>
                        <p>{customerDetails.customerVehicleNumber}</p>
                        <p>{customerDetails.customerLocation}</p>
                    </div>

                    <ul className="list-unstyled">
                        {item.length > 0 ? (
                            <>
                                {item.map((i, index) => (
                                    <li className="list-group-item" key={index}>
                                        Particular:{i.serviceName},Quantity:{i.quantity},Cost:{i.price},Amount:{i.quantity * i.price}
                                    </li>
                                ))}
                            </>
                        ) : (
                            <li className="list-group-item">No Items</li>
                        )}
                    </ul>
                    <div className="alert alert-primary" role="alert">
                        {totalAmount}
                    </div>
                </div>
                <button className="btn btn-primary mt-5" onClick={handlePrint}>
                    Print
                </button>
            </div>
        </>
    );
}

export default Recipt;
