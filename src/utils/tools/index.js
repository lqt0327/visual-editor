import Base64 from 'crypto-js/enc-base64';
import Utf8 from 'crypto-js/enc-utf8'
import html2canvas from 'html2canvas'

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

/**
 * @description 截图
 * @param {string} id - 要截取页面区域的id
 */
// html2canvas 存在跨域问题，图片无法截取  需要将图片上传到支持跨域的服务器才行
// 后期再进行相关处理
const captureScreen = (id) => {
  var element = document.getElementById(id);    // 这个dom元素是要导出pdf的div容器
  var w = element.offsetWidth;    // 获得该容器的宽
  var h = element.offsetWidth;    // 获得该容器的高
  var offsetTop = element.offsetTop;    // 获得该容器到文档顶部的距离
  var offsetLeft = element.offsetLeft;    // 获得该容器到文档最左的距离
  var canvas = document.createElement("canvas");
  var abs = 0;
  var win_i =  document.body.clientWidth;    // 获得当前可视窗口的宽度（不包含滚动条）
  var win_o = window.innerWidth;    // 获得当前窗口的宽度（包含滚动条）
  if (win_o > win_i) {
      abs = (win_o - win_i) / 2;    // 获得滚动条长度的一半
  }
  canvas.width = w * 2;    // 将画布宽&&高放大两倍
  canvas.height = h * 2;
  var context = canvas.getContext("2d");
  context.scale(2, 2);
  context.translate(-offsetLeft - abs, -offsetTop);
  // 这里默认横向没有滚动条的情况，因为offset.left(),有无滚动条的时候存在差值，因此
  // translate的时候，要把这个差值去掉
  html2canvas(element,{
      allowTaint: false,
      scale: 2, // 提升画面质量，但是会增加文件大小
      useCORS: true
  }).then(function (canvas) {
      var contentWidth = canvas.width;
      var contentHeight = canvas.height;
      //一页pdf显示html页面生成的canvas高度;
      var pageHeight = contentWidth / 592.28 * 841.89;
      //未生成pdf的html页面高度
      var leftHeight = contentHeight;
      //页面偏移
      var position = 0;
      //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
      var imgWidth = 595.28;
      var imgHeight = 592.28 / contentWidth * contentHeight;

      var pageData = new Image()
      pageData.src = canvas.toDataURL('image/jpeg', 1.0);
      const alink = document.createElement("a");
      alink.href = pageData.src;
      alink.download = "testImg.jpg";
      alink.click();
      // var pdf = new jsPDF('', 'pt', 'a4');

      // //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      // //当内容未超过pdf一页显示的范围，无需分页
      // if (leftHeight < pageHeight) {
      //     pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      // } else {    // 分页
      //     while (leftHeight > 0) {
      //         pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
      //         leftHeight -= pageHeight;
      //         position -= 841.89;
      //         //避免添加空白页
      //         if (leftHeight > 0) {
      //             pdf.addPage();
      //         }
      //     }
      // }
      // pdf.save('你的名字.pdf');
  });
};

export { debounce, base64Time, captureScreen };

