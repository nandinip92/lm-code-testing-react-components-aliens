export const validateSelectDropDown: (dropDown: string) => string[] = (
  dropDown
) => {
  let errors = [];
  if (dropDown === "Not 4") errors.push("ERROR: 2 + 2 is Not 4");
  return errors;
};
