Array.prototype.cube=function(){
    let b=this.map(y=>y*y*y);
    return b;
  }
  let arr = new Array();
  arr=[1,2,3,4,5];
  console.log(arr.cube());