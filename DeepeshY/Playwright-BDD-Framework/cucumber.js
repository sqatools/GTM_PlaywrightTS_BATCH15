module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["features/support/**/*.ts", "features/step-definitions/**/*.ts"],
    format: ["progress", "html:reports/cucumber.html", "allure-cucumberjs/reporter"],
    formatOptions: {
      resultsDir: "reports/allure-results"
    }
  }
};
