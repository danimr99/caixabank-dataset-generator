import path from "path";
import fs from "fs";

/**
 * Ensures that the directory of the given file path exists.
 *
 * @function
 * @param {string} filePath - The file path to save the data to.
 */
const ensureDirectoryExistence = (filePath) => {
  const dirname = path?.dirname(filePath);

  if (fs?.existsSync(dirname)) return;

  ensureDirectoryExistence(dirname);
  fs?.mkdirSync(dirname);
};

/**
 * Saves the given data to a JSON file.
 * If the file path does not exist, it creates the necessary directories.
 *
 * @function
 * @param {object} data - The data to save to the file.
 * @param {string} filePath - The file path to save the data to.
 */
export const saveToJSONFile = (data, filePath) => {
  ensureDirectoryExistence(filePath);
  fs?.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
