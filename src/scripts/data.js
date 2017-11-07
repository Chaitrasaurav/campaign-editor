const data = {
  user: {
    id: '', // user id. to be defined
    name: 'Jack Sparrow', // this is shown in the sidenav
  },
  availableCampaigns: [ // these are shown in the sidenav
    {
      id: '12345', // this is a temporary id. sitecore IDs will be used later
      name: 'CampaignName',
      role: 'administrator',
    },
    {
      id: '12346',
      name: 'Campaign2Name',
      role: 'editor',
    },
    {
      id: '12347',
      name: 'Campaign3Name',
      role: 'administrator',
    },
  ],
  sidenavOpened: false,
  currentCampaignId: '12346', // Used in the AJAX calls
  currentCampaignName: 'Campaign2Name', // Shown in the header
  availableMarkets: [ // this is based on the current campaign. we must always be available
    'we', 'de', 'fr', // market code to full name association is saved in a configuration file
  ],
  currentMarket: 'de',
  currentView: 'content', // this can switch from content to assets
  content: [
    {
      type: 'text', // sitecore field type
      key: 'SOME_TEXT', // sitecore id
      value: 'Translated text', // value in sitecore (translated label)
    },
    {
      type: 'checkbox',
      key: 'SOME_CHECKBOX',
      value: true, // preselects the option
    },
    {
      type: 'textarea',
      key: 'SOME_TEXT_AREA',
      value: '',
    },
  ],
};
export default data;
