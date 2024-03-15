function patchClass(next) {
    return function() {
        console.log("Something going on...");
        let result = next();
        return result;
    };
}

function patchClassAgain(next) {
    return function() {
        console.log("Something else going on...");
        let result = next();
        return result;
    };
}

function runStuff(middlewares) {
    middlewares.forEach(middleware => {
        Math.random = middleware(Math.random);
    });
}

runStuff([patchClass, patchClassAgain]);
console.log(Math.random());

