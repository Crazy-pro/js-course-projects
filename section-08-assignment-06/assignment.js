const nums = [1, 4, 5, 6, 7, 8]

const filteredNums = nums.filter(num => num > 5)
console.log(filteredNums)

const mappedNums = nums.map(num => ({num: num}))
console.log(mappedNums)

const multiplication = nums.reduce((curNum, prevNum) => curNum * prevNum, 1)
console.log(multiplication)

function findMinMax(...nums) {
    let curMin = nums[0]
    let curMax = nums[0]
    for (const num of nums){
        if(num > curMax){
            curMax = num
        }
        if(num < curMin){
            curMin = num
        }
    }
    return [curMin, curMax]
}

const [min, max] = findMinMax(...nums)
console.log(min, max)

const userIds = new Set()
userIds.add(10)
userIds.add(-5)
userIds.add(-5)
userIds.add(-6)
userIds.add(19)
userIds.add(3)

console.log(userIds)
