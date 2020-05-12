const Content = (lg) => {
  const loadJSON = (callback) => {
    const obj = new XMLHttpRequest();
    obj.overrideMimeType('application/json');
    obj.open('GET', `./${lg}/home.json`, true);

    obj.onreadystatechange = () => {
      if (obj.readyState === 4 && obj.status === 200) {
        callback(obj.responseText);
      }
    };
    obj.send(null);
  };

  return loadJSON;
};

export default Content;
