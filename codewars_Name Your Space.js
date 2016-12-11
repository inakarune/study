function namespace(root, path, value){
  let second = path.split('.'),
      obj = {},
      ooo = root;
    if(value === undefined){
      return undefined;
    }

    for(let i = 0; i < second.length; i++){
      if(i == second.length - 1){
        ooo[second[i]] = value;
      } else {
        ooo[second[i]] = obj;
        ooo = ooo[second[i]];
      }
    }

}
