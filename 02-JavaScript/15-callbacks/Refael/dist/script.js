//please create array of objects... {name:'aaaa'}
//find a specific object based on name
//and delete one object in the array,
//delete all objects with this name.
var objects = [
    { name: "yosi", age: "15" },
    { name: "shimon", age: "20" },
    { name: "yosi", age: "40" },
];
var remove = function () {
    objects.forEach(function (element) {
        if (element.name === "yosi") {
            console.log(element.name);
            i[element] = remove;
        }
    });
};
remove();
console.log(objects);
