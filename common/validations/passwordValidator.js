export const passwordValidator = (passwordToValidate) => {
  const regex = new RegExp("?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
  return regex.test(passwordToValidate);
};
