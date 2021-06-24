import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Paper } from "@material-ui/core";
import Select from "react-select";
import { Field, Formik } from "formik";
import { Form } from "formik";
import { createLunchEntry, getEmployeeNameDDL } from "../action";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(6),
      width: theme.spacing(150),
      height: theme.spacing(40),
    },
  },
}));

export default function MealForm() {
  const classes = useStyles();

  const initData = {
    name: "",
    mealCount: "",
    remarks: "",
  };

  //   const saveHandler = async (values, cb) => {
  //       const payload = {

  //       }
  //   };

  const [employeeNameDDL, setEmployeeNameDDL] = useState([]);

  useEffect(() => {
    getEmployeeNameDDL(setEmployeeNameDDL);
  }, []);

  return (
    <Card>
      <div className={classes.root}>
        <Paper elevation={3}>
          <Formik
            enableReinitialize={true}
            initialValues={initData}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                if(values?.mealCount <=0) return toast.warn("Meal count should be greater than zero")
              createLunchEntry(
                values?.name?.value,
                values?.name?.label,
                values?.mealCount,
                values?.remarks,
                () => {
                  resetForm(initData);
                }
              );
            }}
          >
            {({
              handleSubmit,
              resetForm,
              values,
              setFieldValue,
              isValid,
              errors,
              touched,
            }) => (
              <Form>
                <div className="row ml-5 my-5">
                  <div className="col-3">
                    <label>Select Your Name</label>
                    <Select
                      name="name"
                      options={employeeNameDDL}
                      value={values?.name}
                      label="Select Your Name"
                      onChange={(valueOption) => {
                        setFieldValue("name", valueOption);
                      }}
                      placeholder="Select Your Name"
                    />
                  </div>
                  <div className="col-3">
                    <label>Meal Number</label>
                    <Field
                      style={{
                        outline: 0,
                        borderColor: "hsl(0, 0%, 80%)",
                        borderRadius: "4px",
                        borderWidth: "1px",
                        width: "210px",
                        boxSizing: "border-box",
                        borderStyle: "solid",
                        padding: "6px",
                      }}
                      type="number"
                      name="mealCount"
                      min="0"
                      value={values?.mealCount}
                      placeholder="Meal Number"
                    />
                  </div>
                  <div className="col-3">
                    <label>Remarks</label>
                    <Field
                      style={{
                        marginLeft: "0",
                        outline: 0,
                        borderColor: "hsl(0, 0%, 80%)",
                        borderRadius: "4px",
                        borderWidth: "1px",
                        width: "210px",
                        boxSizing: "border-box",
                        borderStyle: "solid",
                        padding: "6px",
                      }}
                      type="text"
                      name="remarks"
                      value={values?.remarks}
                      placeholder="Remarks"
                      //   onChange={(e) => {
                      //     setFieldValue("mealCount", "");
                      //   }}
                    />
                  </div>
                  <div className="col-3" style={{ marginTop: "30px" }}>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onSubmit={() => handleSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Paper>
      </div>
    </Card>
  );
}
