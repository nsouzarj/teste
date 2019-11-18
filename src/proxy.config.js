const proxy = [
  {
    context: '/api',
    target: 'http://10.0.0.100:89',
    pathRewrite: {'/api' : ''}
  }
];

module.exports = proxy;
