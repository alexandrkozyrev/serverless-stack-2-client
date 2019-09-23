const dev = {
  STRIPE_KEY: "pk_test_eqtNmb6TJMr7jp36ZM6AG6qR",

  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-h3muteqkyprb"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://q7hvlj5yg0.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ZI97FbkQu",
    APP_CLIENT_ID: "2555q0spv6em9jp0bh6c09jmiq",
    IDENTITY_POOL_ID: "us-east-1:68e16431-8f9d-4626-9f16-cda0e6ea1b87"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_eqtNmb6TJMr7jp36ZM6AG6qR",

  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-12a79ytjs5lmf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://5txk7ug4ci.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_oox5PLo9I",
    APP_CLIENT_ID: "4r6inq6cd4pgu23vsji32g5v5t",
    IDENTITY_POOL_ID: "us-east-1:18708666-0f2e-46e9-b80e-373346669657"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
