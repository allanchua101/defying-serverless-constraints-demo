#!/bin/bash
set -e

# Define variables
ENV_CODE="dev"
APP_NAME="sls-ledger-lambda-lith"
STACK_NAME="${APP_NAME}-${ENV_CODE}-api-stack"
PARAMETERS="EnvCode=${ENV_CODE} AppName=${APP_NAME}"
REGION="ap-southeast-1"
TEMPLATE_FILE="./lambda-lith-apis.sam.yml"


echo "Building the SAM application..."
sam build --template-file $TEMPLATE_FILE

sam deploy \
  --stack-name $STACK_NAME \
  --template-file .aws-sam/build/template.yaml \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides $PARAMETERS \
  --region $REGION \
  --no-confirm-changeset \
  --resolve-s3

echo "Deployment complete!"