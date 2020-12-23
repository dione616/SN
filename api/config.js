require("dotenv").config();

class Config {
  static getProperty = (property) => {
    return process.env[property];
  };
}

module.exports = { Config };
