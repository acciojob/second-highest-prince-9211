//your JS code here. If required.
function secondHighest(arr) {
	arr=arr.map(Number);
	const unique=[...new set(arr)];
	if(unique.length<2)return - Infinity;
 unique.sort((a, b) => b - a);
  return unique[1];}