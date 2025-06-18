import React from 'react';
import { StatusProps } from '../../../lib/data/getUsersData';

export interface StatusPillProps {
  status: StatusProps;
}

const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  let statusClass = '';

  switch (status) {
    case 'Active':
      statusClass = 'active';
      break;
    case 'Inactive':
      statusClass = 'inactive';
      break;
    case 'Pending':
      statusClass = 'pending';
      break;
    case 'Blacklisted':
      statusClass = 'blacklisted';
      break;
    default:
      break;
  }

  return <span className={`status-pill ${statusClass}`}>{status}</span>;
};

export default StatusPill;
