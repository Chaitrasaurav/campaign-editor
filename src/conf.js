export default {
  projectName: 'EF Campaign Editor',
  user: {
    name: 'Jack Sparrow',
    group: 'Administrator',
  },
  campaignId: 'test%20page?mc=de',
  ws: {
    endpoint: 'http://localhost:3051',
    res: {
      campaigns: '/campaigns',
      markets: '/campaign/svc/get/%id',
    },
  },
  styles: {
    primaryColor: '#495397',
    secondaryColor: '#FF964E',
    backgroundColor: '#7BCCAC',

    primaryColorBw: '#333',
    backgroundColorBw: '#f0f0f0',
  },
};
