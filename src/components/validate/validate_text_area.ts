export const validateReasonForSparringTextArea: (
  reasonForSparring: string
) => string[] = (reasonForSparring) => {
  const errors = [];
  const length = reasonForSparring.length;
  if (!(length > 17 && length < 153))
    errors.push(
      "You are supposed to make you case with minimum of 17 and maximum of 153 characters"
    );

  return errors;
};
