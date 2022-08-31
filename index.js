function receivesAFunction(getIt) {
    getIt();
} 

function returnsANamedFunction() {
    return function namedFunction(a, b){};
};

function returnsAnAnonymousFunction() {
    return function (){};
};

  
  