const fs = require('fs');
const crypto = require('crypto');

function encryptImage(imagePath) {
  // Read the image file
  const imageBuffer = fs.readFileSync(imagePath);

  // Generate a random encryption key
  const encryptionKey = crypto.randomBytes(32);

  // Create a cipher with the encryption key
  const cipher = crypto.createCipher('aes-256-cbc', encryptionKey);

  // Encrypt the image buffer
  const encryptedBuffer = Buffer.concat([
    cipher.update(imageBuffer),
    cipher.final()
  ]);

  // Generate the output file path
  const encryptedFilePath = `${imagePath}.encrypted`;

  // Save the encrypted image to a file
  fs.writeFileSync(encryptedFilePath, encryptedBuffer);

  // Store the encryption key securely (e.g., in a database or environment variable)
  const encryptedKey = encryptionKey.toString('hex');
  // Remember to handle the storage of the encrypted key securely

  // Return the encrypted file path
  return encryptedFilePath;
}
