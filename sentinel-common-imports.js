//The policies referred to live here at the time of this writing:
//https://github.com/hashicorp/terraform-sentinel-policies
const commonFunctions = [
  "tfconfig-functions",
  "tfplan-functions",
  "tfrun-functions",
  "tfstate-functions",
  "aws-functions",
  "azure-functions",
  "gcp-functions",
];

module.exports = commonFunctions;
