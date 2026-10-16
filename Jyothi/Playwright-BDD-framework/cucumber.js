module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["features/support/**/*.ts", "features/step-definitions/**/*.ts"],
    paths: ["features/**/*.feature"],
    format: ["progress", "allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "allure-results"
    },
    publishQuiet: true
  }
};
