function toggleFunction(x) {
  x.currentTarget.classList.toggle('change');
  x.currentTarget.parentNode.parentNode.classList.toggle('expand');
}

export default toggleFunction;
