function bufferConversion(hex) {
  return Buffer.from(hex, 'hex').readUInt32BE();
}

function numberConversion(hex) {
  return Number.parseInt(hex, 16);
}

function profile(value, n = 0) {
  console.time(`buffer ${n}`);
  console.log(bufferConversion(value));
  console.timeEnd(`buffer ${n}`);

  console.time(`number ${n}`);
  console.log(numberConversion(value));
  console.timeEnd(`number ${n}`);

  console.log('-----------');
}

const testList = ['00000000', '00000001', '000000FF', '100000FF', 'E400A0FF', 'FFFFFFFF'];


testList.forEach(profile);
