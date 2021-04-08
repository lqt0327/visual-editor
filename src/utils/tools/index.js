import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8'

//防抖函数

const debounce = (func, delay) => {
  let timer = null;
  return function () {
    const _this = this
    const args = arguments
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(_this, args);
      clearTimeout(timer);
    }, delay);
  };
};

const base64Time = () => {
  let str = Base64.stringify(Utf8.parse(Date.now()))
  let res = str.replace(/==/,'')
  return res.slice(-9)
}

export { debounce, base64Time };

