//!!递归查找
function erfen_digui(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  let cent = Math.floor((right + left) / 2);
  if (arr[cent] === val) {
    return `最终查找结果下标为${cent}`;
  } else if (arr[cent] > val) {
    right = cent - 1;
  } else {
    left = cent + 1;
  }
  return erfen_digui(arr, val, left, right);
}
//!!非递归查找
function erfen_feidigui(arr, val) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let cent = left + Math.floor((right - left) / 2);
    if (arr[cent] === val) {
      return `最终查找结果下标为${cent}`;
    } else if (arr[cent] > val) {
      right = cent - 1;
    } else {
      left = cent + 1;
    }
  }
  return -1;
}


//!!左边界查找（查找第一个元素）
function erfen_digui(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  let cent = Math.floor((right + left) / 2);
  if (arr[cent] === val) {
    /****************改动点********************/
    if (arr[cent - 1] === val) {
      right = cent - 1;
    } else {
      return `最终查找结果下标为${cent}`;
    }
    /*****************************************/
  } else if (arr[cent] > val) {
    right = cent - 1;
  } else {
    left = cent + 1;
  }
  return erfen_digui(arr, val, left, right);
}

// !!二分查找右边界（查找最后一个元素）
function erfen_digui(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  let cent = Math.floor((right + left) / 2);
  if (arr[cent] === val) {
    /****************改动点********************/
    if (arr[cent + 1] === val) {
      left = cent + 1;
    } else {
      return `最终查找结果下标为${cent}`;
    }
    /*****************************************/
  } else if (arr[cent] > val) {
    right = cent - 1;
  } else {
    left = cent + 1;
  }
  return erfen_digui(arr, val, left, right);
}
