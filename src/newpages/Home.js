import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { PATHS } from "../config";
import { options1, options2, quantity } from "../helpers/helpers";
import { GlobalContext } from "../store/GlobalState";

function NewHome() {
    const history = useHistory();
    // react hook form
    const { handleSubmit, register, reset } = useForm({
        mode: "all",
        reValidateMode: "onBlur",
        defaultValues: {
            serviceName: "",
            price: "",
            quantity: "",
        },
    });
    const { item, totalAmount, removeItem, addItem, customerDetails, addData } = useContext(GlobalContext);
    // select option
    const [selectedOption, setSelectedOption] = useState("");
    // const [taxValue, setTaxValue] = useState(0);

    const handleChange1 = (s) => {
        console.log("......................", s.target.value);
        setSelectedOption(s.target.value);
    };
    // const serviceName = selectedOption;
    // filter options
    const filteredOptions = options2.filter((o) => o.link === selectedOption);
    // customer submit
    const handleCustomer = async (d) => {
        // const id = uuidv4();
        const newDetails = {
            customerName: d.customerName,
            customerVehicleNumber: d.customerVehicleNumber,
            customerLocation: d.customerLocation,
        };
        addData(newDetails);
        reset();
    };
    // form submit
    const onSubmit = async (d) => {
        const id = uuidv4();
        const quantity = d.quantity.value;
        const serviceName = selectedOption;
        const newData = {
            id: id,
            quantity: quantity,
            serviceName: serviceName,
            ...d,
        };
        // await console.log("Form Data>>>>>>>>>>", newData);
        addItem(newData);
        reset();
    };
    console.log("Items>>>>>>>>>>>>", item);
    console.log("Customer Details", customerDetails);
    // const calculateGST = () => {
    //     const result = Number(totalAmount) * (28 / 100);
    //     console.log(result);
    //     setTaxValue(result + totalAmount);
    // };
    //
    const serviceNameText = register("serviceName");
    // calculate gst
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-3">
                    <div className="alert alert-primary" role="alert">
                        {totalAmount}
                    </div>
                </div>
                {/* <div className="col-lg-3">
                    <div className="alert alert-primary" role="alert">
                        {taxValue}
                        <br />
                        <button className="btn btn-primary mt-2" onClick={calculateGST}>
                            Calculate
                        </button>
                    </div>
                </div> */}
            </div>
            <div className="row mt-3">
                <div className="col-lg-6">
                    <div className="customer-input mb-5">
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Customer Name"
                                defaultValue=""
                                {...register("customerName", { required: true })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                defaultValue=""
                                placeholder="Customer Vehicle Number"
                                {...register("customerVehicleNumber", { required: true })}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                defaultValue=""
                                placeholder="Customer Location Details"
                                {...register("customerLocation", { required: true })}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit(handleCustomer)}>
                            Submit
                        </button>
                    </div>
                    <div className="mt-5">
                        <div className="mb-3">
                            <select
                                className="form-select form-control"
                                {...register("serviceName")}
                                onChange={(e) => {
                                    serviceNameText.onChange(e);
                                    handleChange1(e);
                                }}
                                defaultValue=""
                            >
                                <option value="">Select Services</option>
                                {options1.map((o, index) => (
                                    <option key={index} value={o.value}>
                                        {o.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select className="form-select form-control" {...register("price", { valueAsNumber: true })} defaultValue="">
                                <option value="">Select price</option>
                                {filteredOptions.map((o, index) => (
                                    <option key={index} value={o.value}>
                                        {o.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <select className="form-select form-control" defaultValue="" {...register("quantity", { valueAsNumber: true })}>
                                <option value="">Select quantity</option>
                                {quantity.map((o, index) => (
                                    <option key={index} value={o.value}>
                                        {o.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button className="btn btn-primary" onClick={handleSubmit(onSubmit)}>
                            Add Data
                        </button>
                        {item.length > 0 && (
                            <button className="btn btn-secondary ms-3" onClick={() => history.push(PATHS.newInvoice)}>
                                Proceed
                            </button>
                        )}
                    </div>
                </div>
                <div className="col-lg-6">
                    {customerDetails && (
                        <div className="alert alert-primary" role="alert">
                            <p>{customerDetails.customerName}</p>
                            <p>{customerDetails.customerVehicleNumber}</p>
                            <p>{customerDetails.customerLocation}</p>
                        </div>
                    )}
                    <div className="alert alert-primary mt-5">
                        <ul className="list-group">
                            {item.length > 0 ? (
                                <>
                                    {item.map((i, index) => (
                                        <li className="list-group-item" key={i.id}>
                                            <div className="row mt-3">
                                                <div className="col-lg-3">
                                                    <span className="text-center">{i.serviceName}</span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <span className="text-center">{i.quantity}</span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <span className="text-center">
                                                        {i.price} = {i.quantity * i.price}
                                                    </span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <button
                                                        className="btn-close"
                                                        onClick={() => {
                                                            removeItem(i.id);
                                                            // setTaxValue(0);
                                                        }}
                                                    ></button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </>
                            ) : (
                                <li className="list-group-item">No Items is the list</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewHome;
