import React from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";

function FieldArray() {
    const { register, control, handleSubmit, reset, watch } = useForm({
        defaultValues: {
            test: [{ firstName: "Bill", lastName: "Luo" }],
        },
    });
    const { fields, append, prepend, remove, swap, move, insert, replace } = useFieldArray({
        control,
        name: "test",
    });
    return (
        <div>
            <ul>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <input {...register(`test.${index}.firstName`)} />

                            <Controller render={({ field }) => <input {...field} />} name={`test.${index}.lastName`} control={control} />
                            <button type="button" onClick={() => remove(index)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button
                type="button"
                onClick={() => {
                    append({ firstName: "appendBill", lastName: "appendLuo" });
                }}
            >
                append
            </button>
        </div>
    );
}

export default FieldArray;
