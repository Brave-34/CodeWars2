function isVow(a) {
  return a.map(charCode => {
    if (charCode === 97) return 'a';
    if (charCode === 101) return 'e';
    if (charCode === 105) return 'i';
    if (charCode === 111) return 'o';
    if (charCode === 117) return 'u';
    return charCode;
  });
}
