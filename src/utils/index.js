/**
 *  全局方法，但是使用率不高，哪里使用哪里import 就好
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  if (!time) {
    return "";
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return timeStr;
}

/**
 * debounce(() => {
        // do something;
      }, 300);
 */
let timeout = null;
export function debounce(fn, wait) {
  if (timeout !== null) clearTimeout(timeout);
  timeout = setTimeout(fn, wait);
}

export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = e => {
      resolve(e.target.result);
    };
    fileReader.readAsDataURL(blob);
    fileReader.onerror = () => {
      reject(new Error("文件流异常"));
    };
  });
}






