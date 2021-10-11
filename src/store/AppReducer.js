// // eslint-disable-next-line import/no-anonymous-default-export
// export default (state, action) => {
//     switch (action.type) {
//         case "DELETE_ITEMS":
//             return {
//                 ...state,
//                 data: state.data.service_details.filter((detail) => detail.id !== action.payload),
//             };
//         case "ADD_ITEMS":
//             return {
//                 ...state,
//                 service_details: [...state.service_details, action.payload],
//             };
//         case "ADD_DATA":
//             return {
//                 ...state,
//                 data: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            item: state.item.filter((curElem) => {
                return curElem.id !== action.payload;
            }),
        };
    }

    if (action.type === "ADD_ITEMS") {
        return {
            ...state,
            item: [...state.item, action.payload],
        };
    }

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
            (accum, curVal) => {
                let { price, quantity } = curVal;

                let updatedTotalAmount = price * quantity;
                accum.totalAmount += updatedTotalAmount;

                accum.totalItem += quantity;
                return accum;
            },
            {
                totalItem: 0,
                totalAmount: 0,
            }
        );
        return { ...state, totalItem, totalAmount };
    }
    if (action.type === "ADD_DATA") {
        return {
            ...state,
            customerDetails: action.payload,
        };
    }
    return state;
};
