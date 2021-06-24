import axios from "axios";
import { toast } from "react-toastify";
import { _todayDate } from "./../../helper/_todayDate";

export const getEmployeeNameDDL = async (setter) => {
  try {
    const res = await axios.get(`/sme/Lunch/GetLunchUser`);
    setter(res?.data);
  } catch (error) {}
};

export const createLunchEntry = async (
  enrollId,
  name,
  mealCount,
  remarks,
  cb
) => {
  try {
    const res = await axios.post(
      `/sme/Lunch/CreateLunchEntry?enroll=${enrollId}&name=${name}&lunchNo=${mealCount}&remarks=${remarks}&MealDate=${_todayDate()}`
    );
    cb();
    toast.success(res?.data?.message || "Submitted successfully");
  } 
  catch (error) {
    console.log(error, "error");
    toast.warn(error?.response?.data?.message);
  }
};

export const getMealDetails = async (setter) => {
    try {
      const res = await axios.get(`/sme/Lunch/GetLunchList?luchDate=${_todayDate()}`);
      setter(res?.data);
    } catch (error) {
        console.log(error)
    }
  };