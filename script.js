const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
  const encodedData = encoder.encode(str);
	
  const byteCount = encodedData.length;
  return byteCount;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
