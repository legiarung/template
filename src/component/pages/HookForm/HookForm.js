import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

// import "./styles.css";

export default function Form() {
    const { register, handleSubmit, reset, errors } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        // e.target.reset(); // reset after form submit
    };

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First name</label>
            <input type="text" name="firstName" ref={register({ required: true })} />
            {errors.firstName && <p>This is required</p>}

            <label>Last name</label>
            <input type="text" name="lastName" ref={register} />

            <input type="submit" />
            <input
                style={{ display: "block", marginTop: 20 }}
                type="reset"
                value="Standard Reset Field Values"
            />
            <input
                style={{ display: "block", marginTop: 20 }}
                type="button"
                onClick={() =>
                    reset({
                        firstName: "bill",
                        lastName: "luo"
                    })
                }
                value="Reset with values"
            />
        </form>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);
