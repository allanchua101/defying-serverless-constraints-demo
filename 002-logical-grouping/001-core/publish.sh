#!/bin/bash
set -e

# Define variables
ENV_CODE="dev"
APP_NAME="sls-ledger"
STACK_NAME="${APP_NAME}-${ENV_CODE}-core-stack"
TEMPLATE_FILE="./template.cfn.yml"
PARAMETERS="EnvCode=${ENV_CODE} AppName=${APP_NAME}"
REGION="ap-southeast-1"

# Check if the AWS CLI is installed
if ! command -v aws &>/dev/null; then
  echo "Error: AWS CLI is not installed. Please install it and try again."
  exit 1
fi

# Check if the CloudFormation template file exists
if [ ! -f "$TEMPLATE_FILE" ]; then
  echo "Error: Template file '$TEMPLATE_FILE' not found."
  exit 1
fi

echo "Deploying CloudFormation stack '$STACK_NAME' to region '$REGION'..."

# Deploy the stack using the AWS CLI
aws cloudformation deploy \
  --stack-name "$STACK_NAME" \
  --template-file "$TEMPLATE_FILE" \
  --parameter-overrides $PARAMETERS \
  --capabilities CAPABILITY_NAMED_IAM \
  --region "$REGION"

echo "Stack '$STACK_NAME' deployed successfully!"
