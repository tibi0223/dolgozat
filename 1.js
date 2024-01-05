function szepTomb(arr) {
    if (!Array.isArray(arr)) {
      return false;
    }
  
    const firstType = typeof arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== firstType) {
        return false;
      }
    }
    return true;
  }
  
console.log(szepTomb(['alma', 'korte', 'szilva', 'barack']));
console.log(szepTomb([10, 20, 30, 40, '50', 60, 70]));
  