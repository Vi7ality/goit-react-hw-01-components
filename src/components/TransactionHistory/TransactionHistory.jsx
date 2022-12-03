import PropTypes from 'prop-types';
import { Table, TableData, TableHeader } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <thead>
      <tr>
        <TableHeader>Type</TableHeader>
        <TableHeader>Amount</TableHeader>
        <TableHeader>Currency</TableHeader>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <TableData>{item.type}</TableData>
          <TableData>{item.amount}</TableData>
          <TableData>{item.currency}</TableData>
        </tr>
      ))}
    </tbody>
  </Table>
);


TransactionHistory.propTypes = {
    item: PropTypes.exact(
        {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
    )
}