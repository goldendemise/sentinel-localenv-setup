# sentinel-localenv-setup
This script is intended to pull in helper functions from Hashicorp governance repos to simplify local testing of Sentinel policies

At present, you point it at where you keep the Hashicorp Sentinel Governance repo common-functions locally, and it symlinks them to your working directory and modifies the sentinel.hcl to reference the symlink so that you can get to testing more quickly
