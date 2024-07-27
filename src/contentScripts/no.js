const pako = require('pako');

// // // Step 1: Original string
// // const str = "abcd";

// // // Step 2: Compress the string
// // const compressed = pako.deflate(str);
// // console.log("Compressed (Uint8Array):", compressed);

// // // Step 3: Convert the compressed Uint8Array to a Buffer
// // const compressedBuffer = Buffer.from(compressed);
// // console.log("Compressed Buffer:", compressedBuffer);

// // // Step 4: Decompress the buffer
// // const decompressed = pako.inflate(compressedBuffer);
// // console.log("Decompressed (Uint8Array):", decompressed);

// // // Step 5: Convert the decompressed Uint8Array back to a string
// // const decompressedStr = new TextDecoder().decode(decompressed);
// // console.log("Decompressed String:", decompressedStr);

// // // Step 6: Additional checks to verify the integrity of conversions
// // const compressedBufferBase64 = compressedBuffer.toString('base64');
// // const decompressedBufferBase64 = Buffer.from(decompressed).toString('base64');
// // console.log({ compressedBufferBase64, decompressedBufferBase64 });

// // // Step 7: Convert string to Uint8Array and back (Optional for validation)
// // const str2Uint8Array = new TextEncoder().encode(str);
// // console.log("Original String to Uint8Array:", str2Uint8Array);

// // const uint8ArrayToStr = new TextDecoder().decode(str2Uint8Array);
// // console.log("Uint8Array back to String:", uint8ArrayToStr);



// const pako = require('pako');

// /**
//  * Compresses a string and converts it to a buffer.
//  * @param {string} input - The string to compress.
//  * @returns {Buffer} - The compressed string as a buffer.
//  */
// function compressStringToBuffer(input) {
//   // Compress the string
//   const compressed = pako.deflate(input);
//   const compressedBuffer = Buffer.from(compressed);
//   return compressedBuffer;
// }

// /**
//  * Decompresses a buffer back to the original string.
//  * @param {Buffer} buffer - The buffer to decompress.
//  * @returns {string} - The decompressed original string.
//  */
// function decompressBufferToString(buffer) {
//   // Convert the buffer to Uint8Array
//   const compressedUint8Array = new Uint8Array(buffer);
//   // Decompress the Uint8Array back to the original string
//   const decompressed = pako.inflate(compressedUint8Array, { to: 'string' });
//   return decompressed;
// }

// // Example usage:
// const originalString = "This is a large string that needs to be compressed.";

// // Compress the string to a buffer
// const compressedBuffer = compressStringToBuffer(originalString);
// console.log("Compressed Buffer:", compressedBuffer);

// // Decompress the buffer back to the original string
// const decompressedString = decompressBufferToString(compressedBuffer);
// console.log("Decompressed String:", decompressedString);


const summary = 'eJx1Vttu3DYQffdXDBKgAYzNAm2aFvCb67SFURgNGjdBHrnSaDVYipR52bX69T1DXVZ2nJeFViTncs6ZQ71+TX/xQB+9uBSpCb6jV19ak+g20b05cLyizxLFuw3dSdQH+oFusk058Cv66vN93jG21OyvLi4uL3/c0m3X+5CMq5h8Qx+4ESduPx+6urzEPrq8XBaqcYEkUhVyJcZS4wPFZELKfdzigO6/bcj5RLUe43qzHDuJtYQapgXaDfposIqTdN9qWON0h+O9SXJkMq6m7Prg61zpi21JcHOuQxMZir5JVHk00pdYt+lNxGu0tpedZWLLHbtESfHSHNL1pkrUSkBfG+JHrnIq2GnGmKuKY3yaLLY+23pdP5tgB/Ju6Vuzdl4Lm4BFRo/6aw7ACIFPmn/wOayhRFFO9yFojT9MPYeGUd3JhzrqSs2xCoLMot0peT9t6Us7TISD55nxO5MSh4W5G4sa6Tju0gK6aZ9BanQITFYkHrj1FrUSu73ZF8Tm1u5bSA80HCEfAFuVuH0OvY8jSbUElCxnMG5yTL5D43SacDg4fxoRQCCw0ikSpZLs5CEzsIzeHkHIHOP6pdJbtj0ZK3uAxqaLZbEKbJJWFlsErMmC+YwentQfOaikVBn7rI1o3zVXJcfbzhxWqcuBkmpke5IKEgkAFjPx8G57HpvP51onOhYeoG13ILPzOS0aeNr5Q0ZLjaB0FLVg6F0UJaRIBrKI3oEufsSjMNS+oXjAUMVRtkdjMy9T+EmnEjOXWp0E2bdpM/E2gVqGAfpjEwUVBLYmGfAyB/iqSae9OjN8BDtwiiMKStKtsD03p/KdZktbnKkHtjjoyjJUbesJvp+39IdmucPgwIGew3bHmCazEytpwEv6yL636g6ACVEDJNrtZni+lcqWxijGQQmrMDDM8zCbqhU+lr6nnCbm8L3doAkj08hqv4cvmTSWvdosLvaYCQz6NAdwma63fmCe6BJ3ZKwF+AygeL+l37LY+iUDXlFZz2obe37C+HU8lNeRbTPKbFyfHMeDFzcU9MahObXDN0qbThRtmOdOppTOKoRiTPErk0ZjL8OiO5w5yl6nsZamETW6IpelzA/evYEHSHVATNUGipoaoZvWq6O8e/v+XMLiU2drWbzTykE3qG4ltooLhOpRIxjBnzjEBJ/ROV9jcPaXvfrGYsYgyJ/UshamXkg5Cr32Gl/1HHS08DReJEd2wBU/opeB3k7Q0zDJ/Zct/T3WpgjKfy9xfVtrs80wO9lEiOn8TLq63lzX73PrxdE0Xg+bqgRjstR+52u2eoeIxttxC35UdXNrs3X27RClgr94HSbc6HiMGGUeqcCo+VoWNY1lz0H+4ZMJNcRRBlTxboxYRWx9n06b/43lDvFdB/urChozU2WqxSEA0r4g8T85UQMB7wzUU/QH8hduV/EQiF0slCkRxfgmFn7dlg8p/WYyJzMsyF/jDgz+/JmDKbX6d7LQ6jt36aaYIxaLJ5m52Sbb53Ir3wfnW7dc7OVu0WhWP3fWItWqn4I8ftVA327vR6q9ZhrpCfyQQXB8isPmDKde56PxaK1QeSu9foLxo4HaNQld/A+TfIbZ'

function decompressBufferToString(summary) {
  // Convert the buffer to Uint8Array
//   const compressedUint8Array = new Uint8Array(summary);
  const compressedUint8Array = summary;
  // Decompress the Uint8Array back to the original string
  const decompressed = pako.inflate(compressedUint8Array, { to: 'string' });
  return decompressed;
}

const res = decompressBufferToString(summary)

console.log(res)