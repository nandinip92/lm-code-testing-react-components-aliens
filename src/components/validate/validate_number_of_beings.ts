export const validateNumOfBeings: (numOfBeings: string) => string[] = (
  numOfBeings
) => {
  // validation code here
  // needs to return an array of error messages
  // or an empty array if there aren't any
  let errors = [];
  let numberOfBeings = 0;
  const isOnlyNumbers = /^[0-9]*$/.test(numOfBeings);
  isOnlyNumbers
    ? (numberOfBeings = parseInt(numOfBeings))
    : errors.push("ONLY Numbers!");

  //1,000,000,000
  if (numberOfBeings < 1000000000 && isOnlyNumbers) {
    errors.push("numberOfBeings must be atleast 1,000,000,000");
  }
  return errors;
};
