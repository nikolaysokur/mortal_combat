export const getRandom = (num) => {
  return Math.ceil(Math.random() * num);
}

export const createElement = (tag, className) => {
  const $tag = document.createElement(tag);
  if(className){
    $tag.classList.add(className);
  }

  return $tag;
}


export const getTime = () => {
  const date = new Date();
  return `${getZero(date.getHours())}:${getZero(date.getMinutes())}:${getZero(date.getSeconds())}`;
}

export const getZero = (num) => {
  if (num >= 0 && num < 10){
    return `0${num}`;
  }else{
    return num;
  }
}