import dotenv from "dotenv";
import fs from "fs";
import { exec } from "child_process";

function setDotEnv(filename) {
  readDotEnv(filename).then(setFlySecret).catch(console.error);
}

function readDotEnv(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename ?? ".env", "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const envs = dotenv.parse(data);
        resolve(envs);
      }
    });
  });
}

function parseEnvs(envs) {
  let parsed = "";
  for (const [key, value] of Object.entries(envs)) {
    parsed += `${key}=${value} `;
  }
  return parsed;
}

function setFlySecret(envs) {
  return new Promise((resolve, reject) => {
    const parsedEnvs = parseEnvs(envs);
    exec(`flyctl secrets set ${parsedEnvs}`, (error, stdout, stderr) => {
      if (error) {
        reject(`exec error: ${error}`);
      } else if (stderr) {
        reject(`stderr: ${stderr}`);
      } else {
        console.log(`stdout: ${stdout}`);
        resolve();
      }
    });
  });
}

export default setDotEnv;
