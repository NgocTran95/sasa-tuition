import yup from "./yupGlobal";

export const validateEnterInfoSchema = yup.object().shape({
  name: yup.string().required("Name is requried"),
  class: yup.number().required("Class is required"),
  paymentDate: yup.date().required("Payment date is required"),
  startDate: yup.date().required("Start date is required"),
  endDate: yup.date().required("End date is required"),
  amount: yup.number().required("Tuition fee is required"),
  paymentMethod: yup.string().required("Payment method is required"),
});
