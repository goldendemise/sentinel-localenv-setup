const fs = require("fs");

const functionUrls = {
  "tfconfig-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/common-functions/tfconfig-functions/tfconfig-functions.sentinel",
  "tfplan-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/common-functions/tfplan-functions/tfplan-functions.sentinel",
  "tfrun-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/common-functions/tfrun-functions/tfrun-functions.sentinel",
  "tfstate-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/common-functions/tfstate-functions/tfstate-functions.sentinel",
  "aws-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/aws/aws-functions/aws-functions.sentinel",
  "azure-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/azure/azure-functions/azure-functions.sentinel",
  "gcp-functions":
    "https://raw.githubusercontent.com/hashicorp/terraform-sentinel-policies/main/gcp/gcp-functions/gcp-functions.sentinel",
};

const checkForFunctions = async (directory) => {};
