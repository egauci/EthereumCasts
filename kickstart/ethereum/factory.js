import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x3044f270747B76D74DfC55583184a0fD829eBac3'
);

export default instance;
