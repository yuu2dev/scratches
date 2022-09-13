/**
 * 이진 탐색
 * 데이터가 정렬된 상태로 주어진 경우에 효과적으로 탐색.
 * 1. (분할) 배열을 가운데 원소를 기준으로 왼쪽 부분배열과 오른쪽 부분배열로 분할
 * 2. (정복) 탐색키가 가운데 원소보다 작으면 왼쪽 부분배열을 대상으로 이진 탐색을 순환 호출한다.
 *    탐색을 다시 수행할 때마다 탐색 범위가 절반으로 줄어든다.
 * 3. (결합) 부분배열에 대해서 이진 탐색의 결과가 직접 반환되었으므로 결과를 결합할 필요는 없다.
 */
const nums = [];
for (let num = 1; num <= 100; num++) {
    nums.push(num);
}
(() => {
    //  순환
    const binarySearch = ({ nums = [], left, right, x } = {}) => {
        if (left > right) {
            return -1;
        }
        const mid = Math.floor((left + right) / 2);
        let index = -1;
        if (x == nums[mid]) {
            return mid;
        } else if (x < nums[mid]) {
            index = binarySearch({ nums, left, right: mid - 1, x });
        } else {
            index = binarySearch({ nums, left: mid + 1, right, x });
        }
        return index;
    };
    const index = binarySearch({
        nums,
        left: 0,
        right: nums.length - 1,
        x: 90,
    });
    console.log(index);
})();
(() => {
    // 반복
    let x = 44;
    let index = -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (x == nums[mid]) {
            index = mid;
            break;
        } else if (x < nums[mid]) {
            right = nums[mid] - 1;
        } else {
            left = nums[mid] + 1;
        }
    }
    console.log(index);
})();
