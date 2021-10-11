// import React, { createContext, useReducer } from "react";
// import AppReducer from "./AppReducer";

// // initial state
// const initialState = {
//     data: {},
// };

// // create context
// export const GlobalContext = createContext(initialState);

// // provider component
// export const GlobalProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(AppReducer, initialState);

//     const addData = (newData) => {
//         // let saveData = [...details, newData];
//         dispatch({
//             type: "ADD_DATA",
//             payload: newData,
//         });
//     };

//     const addItems = (newItem) => {
//         dispatch({
//             type: "ADD_ITEMS",
//             payload: newItem,
//         });
//     };

//     function deleteDetail(id) {
//         dispatch({
//             type: "DELETE_ITEMS",
//             payload: id,
//         });
//     }

//     return (
//         <GlobalContext.Provider
//             value={{
//                 data: state.data,
//                 service_details: state.service_details,
//                 addData,
//                 deleteDetail,
//                 addItems,
//             }}
//         >
//             {children}
//         </GlobalContext.Provider>
//     );
// };

import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    // item: [
    //     { id: 1, serviceName: "Whee Alignment", price: "350", quantity: 2 },
    //     { id: 2, serviceName: "Mouth", price: "100", quantity: 4 },
    // ],
    customerDetails: {},
    item: [],
    totalAmount: 0,
    totalItem: 0,
    gst: 0.28,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addData = (newData) => {
        // let saveData = [...details, newData];
        dispatch({
            type: "ADD_DATA",
            payload: newData,
        });
    };

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    const addItem = (newItem) => {
        return dispatch({
            type: "ADD_ITEMS",
            payload: newItem,
        });
    };

    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        // console.log("Awesome");
    }, [state.item]);

    return (
        <GlobalContext.Provider
            value={{
                ...state,
                removeItem,
                addItem,
                addData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
