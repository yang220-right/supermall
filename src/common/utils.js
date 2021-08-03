export function debounce(func, delaytime=50) {
  var timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delaytime);
  }
}
