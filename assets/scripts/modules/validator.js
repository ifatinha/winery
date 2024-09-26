export function validateEmail(email) {
  const regex = /^[\w.-]{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}$/;
  let err;

  if (typeof email !== "string") {
    err = new Error("Expected a string as input");
    throw err;
  }

  if (!regex.test(email)) {
    err = new Error("Email validation failed");
    throw err;
  }

  return true;
}
