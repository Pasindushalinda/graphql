const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schemas/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Listen to 4000');
});
