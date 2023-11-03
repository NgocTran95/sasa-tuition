export const generateRandomId = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
};

export const formatPaymentDate = (date) => {
  const arr = date.split("-");
  return arr.reverse().join("/");
};

export const formatLearnProcess = (startDate, endDate) => {
  const startDateArr = startDate.split("-");
  const endDateArr = endDate.split("-");
  return (
    startDateArr[2] +
    "/" +
    startDateArr[1] +
    " - " +
    endDateArr[2] +
    "/" +
    endDateArr[1]
  );
};

export const getMiddleMonth = (startDate, endDate) => {
  const startParts = startDate.split("-");
  const endParts = endDate.split("-");

  const start = new Date(startParts[0], startParts[1] - 1, startParts[2]);
  const end = new Date(endParts[0], endParts[1] - 1, endParts[2]);

  const middleTimeStamp = (start.getTime() + end.getTime()) / 2;
  const middleDate = new Date(middleTimeStamp);

  return middleDate.getMonth()+1;
};
