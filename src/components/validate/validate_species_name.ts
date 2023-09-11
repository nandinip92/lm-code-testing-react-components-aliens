// validate_species_name.ts
export const validateSpeciesName: (speciesName: string) => string[] = (
  speciesName
) => {
  // validation code here
  // needs to return an array of error messages
  // or an empty array if there aren't any
  let errors = [];
  let length = 0;
  const isOnlyAplphabets = /^[A-Za-z]*$/.test(speciesName);
  isOnlyAplphabets
    ? (length = speciesName.length)
    : errors.push("No numbers or special charecters allowed!");

  if (!(length > 3 && length < 23)) {
    errors.push("Characters length must be between 3 and 23");
  }
  return errors;
};
