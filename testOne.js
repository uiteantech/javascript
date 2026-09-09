console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean("false"));
// 1.  false   ✅
// 2.  true    ✅
// 3.  false   ❌
// 4.  true    ✅
// 5.  true    ✅
// 6.  true    ✅
// 7.  false   ✅
// 8.  false   ✅
// 9.  false   ✅
// 10. true    ✅