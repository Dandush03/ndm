const lg = (lg) => {
  const loadJSON = (callback) => {
    const obj = new XMLHttpRequest();
    obj.overrideMimeType('application/json');
    obj.open('GET', `./src/module/${lg}/content.json`, true);

    obj.onreadystatechange = () => {
      if (obj.readyState === 4 && obj.status === 200) {
        callback(obj.responseText);
      }
    };
    obj.send(null);
  };

  return loadJSON;
};

export default lg;