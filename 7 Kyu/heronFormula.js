function heron(a, b, c) {
  let s = (a + b + c) / 2;
  let result = s*(s-a) * (s-b) * (s-c);
  return Math.sqrt(result);
}