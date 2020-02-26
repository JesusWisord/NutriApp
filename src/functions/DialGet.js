const getDial = async () => {
  const data = await fetch('http://localhost:3000')
    .then((response) => response.body.getReader())
    .then((body) => {
      const info = body.read();
      return info;
    });
  const string = new TextDecoder('utf-8').decode(data.value);
  // const obj = JSON.parse(string);
  return string;
};

export default getDial;
