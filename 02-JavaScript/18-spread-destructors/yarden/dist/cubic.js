var cubicParams = ['height', 'width', 'depth'];
function cubic(_a) {
    var height = _a.height, width = _a.width, depth = _a.depth;
    var cubicVolume = height * width * depth;
    return cubicVolume;
}
console.log(cubic({ height: 3, width: 45, depth: 108 }));
