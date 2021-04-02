//防抖函数

const debounce = (func, delay) => {
    let timer = null;
    return function () {
        const _this = this
        const args = arguments
      if(timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func.apply(_this, args);
        clearTimeout(timer);
      }, delay);
    };
  };
  
  export { debounce };