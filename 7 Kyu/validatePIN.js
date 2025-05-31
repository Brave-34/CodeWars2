function validatePIN(pin) {
  const length = pin.length;

  if (length !== 4 && length !== 6) {
    return false;
  }

  for (let i = 0; i < length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
      return false;
    }
  }

  return true;
}
