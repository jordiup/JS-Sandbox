const Singleton = (function() {
  let instance;

  function createInstance(){
    const object = new Object('Object Instance!!!');
    return object;
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
