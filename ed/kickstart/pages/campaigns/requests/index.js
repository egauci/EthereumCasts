import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestsIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = Number(await campaign.methods.getRequestsCount().call());
    const requests = await Promise.all(
      Array(requestCount).fill().map((element, index) => campaign.methods.requests(index).call())
    );
    const approversCount = await campaign.methods.approversCount().call();
    return { address, requests, requestCount, approversCount };
  }
  renderRows() {
    return this.props.requests.map((request, index) => (
      <RequestRow request={request} key={index} id={index} address={this.props.address} approversCount={this.props.approversCount} />
    ));
  }
  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>Add Request</Button>
          </a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
        <p>Found {this.props.requestCount} requests.</p>
      </Layout>
    );
  }
}

export default RequestsIndex;
