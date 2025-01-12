export const validatePlanetName: (planetName: string) => string[] = (
  planetName
) => {
  // validation code here
  // needs to return an array of error messages
  // or an empty array if there aren't any
  let errors = [];
  let length = 0;
  const isOnlyAplphabetsAndNumbers = /^[A-Za-z0-9]*$/.test(planetName);
  isOnlyAplphabetsAndNumbers
    ? (length = planetName.length)
    : errors.push("Numbers are allowed, but no special characters!");

  if (!(length > 2 && length < 49) && isOnlyAplphabetsAndNumbers) {
    errors.push("Characters length must be between 2 and 49");
  }
  return errors;
};
