function bufferConversion(integer, bytes = 4) {
  const buf = Buffer.alloc(bytes);
  buf.writeUInt32BE(integer);
  return buf.toString('hex');
}

function numberConversion(integer, fill = 8) {
  const hexstr = integer.toString(16);
  if (hexstr.length < fill) {
    return `${'0'.repeat(fill - hexstr.length)}${hexstr}`;
  }
  return hexstr;
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

const testList = [0, 1, 254, 255, 65535, 93247, 4294967295];


testList.forEach(profile);
