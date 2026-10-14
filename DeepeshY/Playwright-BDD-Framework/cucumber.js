module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["features/support/**/*.ts", "features/step-definitions/**/*.ts"],
    format: ["progress", "html:reports/cucumber.html"]
  }
};
