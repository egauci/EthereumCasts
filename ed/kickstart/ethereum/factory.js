import w3 from './web3.js';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new w3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xf522898034999F043f65DbB02579BB0166A6b3D5'
);

export default instance;
