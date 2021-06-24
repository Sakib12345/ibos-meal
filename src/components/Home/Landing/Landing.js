import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Paper } from "@material-ui/core";
import { getMealDetails } from './../action';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(6),
        width: theme.spacing(150),
        height: theme.spacing(" auto "),
      },
    },
  }));

export default function MealList() {

  const classes = useStyles();

  const [mealDetails, setMealDetails] = useState([]);
  console.log(mealDetails)

  useEffect(() =>{
    getMealDetails(setMealDetails)
  },[])

  const totalMealCount = () => {
    let mealCount = 0;
      mealDetails.map(item => (mealCount += item?.lNumber))
      return mealCount;
  }

  return (
    <Card>
      <div className={classes.root}>
      <h4 className="text-center mt-3 mb-0">Total Meal: {totalMealCount()}</h4>
        <Paper className="mt-4" elevation={3}>
            
          <Table striped bordered hover className="mb-0">
            <thead>
              <tr>
                <th>SL</th>
                <th>Enroll Id</th>
                <th>Name</th>
                <th>Meal Count</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
            {mealDetails?.map((item, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item?.enroll}</td>
                    <td>{item?.name}</td>
                    <td>{item?.lNumber}</td>
                    <td>{item?.remarks}</td>
                </tr>
            ))}
            </tbody>
          </Table>
        </Paper>
      </div>
    </Card>
  );
}
