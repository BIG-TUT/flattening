var flattenArray = function (arr) {
        return arr.reduce(function (elm1, elm2) {
            return elm1.concat(elm2);
        });
};

console.log(flattenArray([[5, 5, 5], [5, 5, 5], [5, 5, 5]]));


