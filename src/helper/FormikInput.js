import React from "react";
import { Field } from "formik";
import FormikError from "./FormikError";

const FormikInput = (props) => {
  const { placeholder, value, name, type, errors, touched } = props;
  return (
    <>
      <Field
        {...props}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <FormikError errors={errors} touched={touched} name={name} />
    </>
  );
};

export default FormikInput;

// usage
/*
<div className="col-lg-3">
                  <label>Delivery Address</label>
                  <FormikInput
                    value={values?.deliveryAddress}
                    name="deliveryAddress"
                    placeholder="Delivery Address"
                    type="text"
                    errors={errors}
                    touched={touched}
                  />
                </div>
                */
