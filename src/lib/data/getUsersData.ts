import React from 'react';
import { UsersOutline, GroupUsersOutline, UsersLoan, UsersSavings } from '../../components/icons';

export interface UserDataItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  category: string;
  total: number;
}

export type StatusProps = 'Active' | 'Inactive' | 'Pending' | 'Blacklisted';

interface EducationProps {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string
}

export interface UserInfoItem {
  userName: string;
  orgName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  id: number;
  lastActiveDate: string;
  education: EducationProps;
}

export interface UserDetailProps {
  key: string
  value: string
}

export interface UserDetailsItem {
  header: string
  details: UserDetailProps[]
}

export const getUsersData = () => {
  const usersData: UserDataItem[] = [
    {
      icon: UsersOutline,
      color: '#df18ff',
      category: 'users',
      total: 2453
    },
    {
      icon: GroupUsersOutline,
      color: '#5718ff',
      category: 'active users',
      total: 2453
    },
    {
      icon: UsersLoan,
      color: '#f55f44',
      category: 'users with loans',
      total: 12453
    },
    {
      icon: UsersSavings,
      color: '#ff3366',
      category: 'users with savings',
      total: 102453
    },
  ];

  return usersData;
};

export const getUserTabs = () => {
  const userTabs: string[] = ['General Details', 'Documents', 'Bank Details', 'Loans', 'Savings', 'App and System']

  return userTabs;
}

export const getUserDetails = () => {
  const userDetails: UserDetailsItem[] = [
    {
      header: 'Personal Information',
      details: [
        {
          key: 'full name',
          value: ''
        },
        {
          key: 'phone number',
          value: ''
        },
        {
          key: 'email address',
          value: ''
        },
        {
          key: 'bvn',
          value: ''
        },
        {
          key: 'gender',
          value: ''
        },
        {
          key: 'marital status',
          value: ''
        },
        {
          key: 'children',
          value: ''
        },
        {
          key: 'type of residence',
          value: ''
        },
      ]
    },
    {
      header: 'Education and Employment',
      details: [
        {
          key: 'level of education',
          value: ''
        },
        {
          key: 'employment status',
          value: ''
        },
        {
          key: 'sector of employment',
          value: ''
        },
        {
          key: 'duration of employment',
          value: ''
        },
        {
          key: 'official email',
          value: ''
        },
        {
          key: 'monthly income',
          value: ''
        },
        {
          key: 'loan repayment',
          value: ''
        },
      ]
    },
    {
      header: 'Socials',
      details: [
        {
          key: 'twitter',
          value: ''
        },
        {
          key: 'facebook',
          value: ''
        },
        {
          key: 'instagram',
          value: ''
        },
      ]
    },
    {
      header: 'Guarantor',
      details: [
        {
          key: 'full name',
          value: ''
        },
        {
          key: 'phone number',
          value: ''
        },
        {
          key: 'address',
          value: ''
        },
        {
          key: 'gender',
          value: ''
        },
      ]
    }
  ]

  return userDetails;
}