const codePointToChar = (uvalue: string) => {
  const code = parseInt(uvalue.replace("U+", ""), 16);
  return String.fromCodePoint(code);
};

export default codePointToChar;
