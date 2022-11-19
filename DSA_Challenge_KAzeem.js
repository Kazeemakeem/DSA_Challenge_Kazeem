const findSmallestPositive = (arr) => {
	const sortedArr = arr.sort()
	const positiveArr = sortedArr.filter(val => {
		return val > 0
	})
    console.log(positiveArr)
    const firstPosEl = positiveArr[0]
    const positiveArrLen = positiveArr.length
    const lastPosEl = positiveArr[positiveArrLen-1]
	for(let i=0; i<positiveArrLen; i++){
        if(firstPosEl !== 1) return 1 
		if(firstPosEl > 1) return firstPosEl-1 
		if(positiveArr[i] + 1 !== positiveArr[i+1])
			return positiveArr[i] + 1
	}
	return positiveArr[-1] + 1
}

