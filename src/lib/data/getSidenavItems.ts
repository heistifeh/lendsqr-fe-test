import React from 'react';
import {
  Users,
  GroupUsers,
  Loan,
  DecisionModels,
  Savings,
  LoanRequest,
  WhiteList,
  Karma,
  Briefcase,
  Bank,
  Coins,
  Transactions,
  Galaxy,
  UserCog,
  Scroll,
  BarChart,
  Sliders,
  BadgePercent,
  ClipboardList
} from '../../components/icons';

export interface SubItem {
  subname: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface SidenavItem {
  name: string;
  items: SubItem[];
}

export const getSidenavItems = () => {
  const sidenavItems: SidenavItem[] = [
    {
      name: "customers",
      items: [
        { subname: "Users", icon: Users },
        { subname: "Guarantors", icon: GroupUsers },
        { subname: "Loans", icon: Loan },
        { subname: "Decision Models", icon: DecisionModels },
        { subname: "Savings", icon: Savings },
        { subname: "Loan Request", icon: LoanRequest },
        { subname: "Whitelist", icon: WhiteList },
        { subname: "Karma", icon: Karma },
      ],
    },
    {
      name: "businesses",
      items: [
        { subname: "Organization", icon: Briefcase },
        { subname: "Loan Products", icon: LoanRequest },
        { subname: "Savings Products", icon: Bank },
        { subname: "Fees and Charges", icon: Coins },
        { subname: "Transactions", icon: Transactions },
        { subname: "Services", icon: Galaxy },
        { subname: "Service Account", icon: UserCog },
        { subname: "Settlements", icon: Scroll },
        { subname: "Reports", icon: BarChart },
      ],
    },
    {
      name: "settings",
      items: [
        { subname: "Preferences", icon: Sliders },
        { subname: "Fees and Pricing", icon: BadgePercent },
        { subname: "Audit Logs", icon: ClipboardList },
      ],
    },
  ];

  return sidenavItems;
};
