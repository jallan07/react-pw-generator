const RandomCharSelect = (length, charSet) => {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
};

export default RandomCharSelect;
