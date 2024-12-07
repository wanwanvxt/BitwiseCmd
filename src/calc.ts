// the number of bits needed to display a number (including sign if negative).
function numberOfBitsToDisplay(num: number): number {
  const isNegative = num < 0
  const absNum = Math.abs(num)
  const len = absNum.toString(2).length
  return isNegative ? len + 1 : len
}

// flip a specific bit in a number
function flipBit(num: number, bitIndex: number): number {
  return num ^ (1 << bitIndex)
}

// a binary operation between 2 numbers
function operation(num1: number, num2: number, operator: string): number {
  switch (operator) {
    case '>>': return num1 >> num2
    case '>>>': return num1 >>> num2
    case '<<': return num1 << num2
    case '&': return num1 & num2
    case '|': return num1 | num2
    case '^': return num1 ^ num2
    default: throw new Error(`${operator} operator is not supported`)
  }
}

// convert a number to its binary string
function toBinaryString(num: number): string {
  if (num >= 0) {
    return num.toString(2)
  } else {
    const bitSize = 32
    const twoComplement = (num >>> 0).toString(2)
    // ensure 32-bit representation
    return twoComplement.padStart(bitSize, '0')
  }
}

// left shift a number
function lshift(num: number, numBytes: number): number {
  return num << numBytes
}

// right shift a number
function rshift(num: number, numBytes: number): number {
  return num >> numBytes
}

// unsigned right shift a number
function urshift(num: number, numBytes: number): number {
  return num >>> numBytes
}

// a bitwise NOT operation on a number
function not(num: number): number {
  return ~num
}

// a bitwise AND operation between 2 numbers
function and(num1: number, num2: number): number {
  return num1 & num2
}

// a bitwise OR operation between 2 numbers
function or(num1: number, num2: number): number {
  return num1 | num2
}

//a bitwise XOR operation between 2 numbers
function xor(num1: number, num2: number): number {
  return num1 ^ num2
}

export default {
  numberOfBitsToDisplay, flipBit, operation, toBinaryString,
  lshift, rshift, urshift,
  not, and, or, xor
}