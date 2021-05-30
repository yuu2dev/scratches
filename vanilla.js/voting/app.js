// 투표집계

const Y = '찬성';
const N = '반대';

const voted = [
  Y, N, Y, N, Y, Y, N, N, Y, Y, Y, N, Y, N, Y, Y
];

/**
 * @param {object} r 누산기 
 * @param {string} v 투표값
 */
const vote = (r, v) => {
  // r[v]의 값이 선언되어 있지 않으면 r[v]는 0 이다.
  r[v] = (r[v] || 0) + 1;
  return r;
}

let result = voted.reduce(vote, {});

console.log(result);