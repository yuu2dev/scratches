const nums: number[] = [30, 45, 20, 15, 40, 25, 35, 10]
const partition = (arr: number[] = [], start: number = 0, end: number = arr.length): number => {
    let left: number = 1;
    let right: number = end - 1;
    while (left < right) {
        while (left < end && arr[left] < arr[start]) {
            left++
        }
        while (right > start && arr[right] >= arr[start]) {
            right--
        }
        if (left < right) {
            let tmp = arr[left]
            arr[left] = arr[right]
            arr[right] = tmp
        } else {
            let tmp = arr[start]
            arr[start] = arr[right]
            arr[right] = tmp
        }
    }
    return right
}
const quickSort = (arr: number[] = [], start: number = 0, end: number = arr.length): void => {
    if (arr.length <= 0) {
        return
    }
    if (start >= end) {
        return
    }
    const pivot = partition(arr, start, end);
    if (pivot <= 0) {
        return
    }
    quickSort(arr, start, pivot)
    quickSort(arr, pivot + 1, end)
}
quickSort(nums, 0, nums.length)
console.log(nums)