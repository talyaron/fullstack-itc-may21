const cubicParams = ['height', 'width', 'depth']

function cubic({height, width, depth}:{height:number, width:number, depth:number}):number {
    const cubicVolume = height * width * depth
    return cubicVolume
}

console.log(cubic({height:3, width:45, depth: 108}));