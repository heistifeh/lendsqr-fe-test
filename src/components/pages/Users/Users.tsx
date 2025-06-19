import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Input,
  Select,
  StatusPill,
  LoadingDots,
  Popup,
} from "../../../components/interface";
import {
  HexToRgba,
  beforeTodayCheck,
  convertToThousands,
  formatDate,
} from "../../../lib/utils";
import {
  UsersOutline,
  GroupUsersOutline,
  UsersLoan,
  UsersSavings,
  Filter,
  Options,
  Eye,
  UserCancel,
} from "../../../components/icons";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../api/helper/users";
import { DashboardLayout } from "../../layouts";
import {
  getOrgOptions,
  getStatusOptions,
} from "../../../lib/data/getSelectOptions";
import Pagination from "../../global/Pagination";
import type { UserInfoItem } from "../../../lib/data/getUsersData";

interface UserDataItem {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  color: string;
  category: string;
  total: number;
}

const Users: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [totalActiveUsers, setTotalActiveUsers] = useState<number>(0);
  const [totalLoanUsers, setTotalLoanUsers] = useState<number>(0);
  const [totalSavingsUsers, setTotalSavingsUsers] = useState<number>(0);
  const [users, setUsers] = useState<UserInfoItem[]>();
  const [filterPop, setFilterPop] = useState<boolean>(false);
  const [selectedUserPop, setSelectedUserPop] = useState<string>("");
  const [orgName, setOrgName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<string>("");

  const tableHeaders = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
  ];

  const usersData: UserDataItem[] = [
    {
      icon: UsersOutline,
      color: "#df18ff",
      category: "users",
      total: totalUsers,
    },
    {
      icon: GroupUsersOutline,
      color: "#5718ff",
      category: "active users",
      total: totalActiveUsers,
    },
    {
      icon: UsersLoan,
      color: "#f55f44",
      category: "users with loans",
      total: totalLoanUsers,
    },
    {
      icon: UsersSavings,
      color: "#ff3366",
      category: "users with savings",
      total: totalSavingsUsers,
    },
  ];

  const navigate = useNavigate();

  const { data, isLoading, error, refetch } = useQuery({
  queryKey: ['users', orgName, userName, email, phoneNumber],
  queryFn: () => getUsers(orgName, userName, email, phoneNumber),
});

useEffect(() => {
  if (data) {
    setUsers(data);
    setTotalUsers(data.length);
    setTotalActiveUsers(data.filter(i => !beforeTodayCheck(i.lastActiveDate)).length);
    setTotalLoanUsers(data.filter(i => Number(i.education?.loanRepayment) > 0).length);
    setTotalSavingsUsers(data.length - data.filter(i => Number(i.education?.loanRepayment) > 0).length);
  }
}, [data]);

useEffect(() => {
  if (error) {
    console.log('error', (error as any)?.response);
  }
}, [error]);


  const resetFilterFields = () => {
    setOrgName("");
    setUserName("");
    setEmail("");
    setPhoneNumber("");
  };

  const renderUsers = () => {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return users
      ?.slice(startIndex, endIndex)
      .map((j: UserInfoItem, index: number) => (
        <tr key={index}>
          <td style={{ textTransform: "capitalize" }}>{j.orgName}</td>
          <td>{j.userName}</td>
          <td>{j.email}</td>
          <td>{j.phoneNumber}</td>
          <td>{formatDate(j.createdAt)}</td>
          <td>
            <div className="user-options">
              <StatusPill
                status={
                  beforeTodayCheck(j.lastActiveDate) ? "Inactive" : "Active"
                }
              />
              <Button
                style={{ marginTop: "0.25rem" }}
                variant="naked"
                onClick={() => setSelectedUserPop(j.userName)}
              >
                <Options />
              </Button>
              <Popup
                isOpen={selectedUserPop === j.userName}
                onClose={() => setSelectedUserPop("")}
                className="user-options-popup"
              >
                <Button
                  variant="naked"
                  className="popup-btn"
                  onClick={() => navigate(`/customers/users/${j.id}`)}
                >
                  <Eye />
                  <span>View Details</span>
                </Button>
                <Button variant="naked" className="popup-btn">
                  <UserCancel />
                  <span>Blacklist User</span>
                </Button>
                <Button variant="naked" className="popup-btn">
                  <Eye />
                  <span>Activate User</span>
                </Button>
              </Popup>
            </div>
          </td>
        </tr>
      ));
  };

  return (
    <DashboardLayout>
      <div className="users">
        <h1>Users</h1>
        <div className="users-data-wrapper">
          {usersData?.map((i: UserDataItem) => {
            return (
              <Card className="users-data-card" key={i.category}>
                <div
                  className="users-data-card-icon-wrapper"
                  style={{
                    color: i.color,
                    background: HexToRgba(i.color, 0.1),
                  }}
                >
                  <i.icon />
                </div>
                <h2>{i.category}</h2>
                <span>{convertToThousands(i.total)}</span>
              </Card>
            );
          })}
        </div>
        <Card className="users-data-table">
          {isLoading ? (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                color: "#545F7D",
                fontSize: "0.875rem",
                padding: "2.5rem 0",
              }}
            >
              <span>Loading</span>
              <LoadingDots size="sm" />
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  {tableHeaders?.map((h: string) => {
                    return (
                      <th key={h}>
                        <span>{h}</span>
                        <Button
                          variant="naked"
                          onClick={() => setFilterPop(!filterPop)}
                        >
                          <Filter />
                        </Button>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>{renderUsers()}</tbody>
            </table>
          )}
          <Popup
            isOpen={filterPop}
            onClose={() => setFilterPop(false)}
            className="filter-popup"
          >
            <div className="input-item">
              <span>Organization</span>
              <Select
                options={getOrgOptions()}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Select"
              />
            </div>
            <div className="input-item">
              <span>Username</span>
              <Input
                onChange={(e) => setUserName(e.target.value)}
                placeholder="User"
              />
            </div>
            <div className="input-item">
              <span>Email</span>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="input-item">
              <span>Date</span>
              <Input
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                type="date"
                disabled
              />
            </div>
            <div className="input-item">
              <span>Phone Number</span>
              <Input
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
            <div className="input-item">
              <span>Status</span>
              <Select
                options={getStatusOptions()}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Select"
                disabled
              />
            </div>
            <div className="filter-popup-btns">
              <Button
                variant="outlined"
                type="reset"
                onClick={() => resetFilterFields()}
              >
                Reset
              </Button>
              <Button
                onClick={() => {
                  refetch();
                  setFilterPop(false);
                }}
              >
                Filter
              </Button>
            </div>
          </Popup>
        </Card>
        <Pagination
          currentPage={page}
          pageSize={limit}
          totalItems={100}
          onPageChange={setPage}
          onPageSizeChange={setLimit}
        />
      </div>
    </DashboardLayout>
  );
};

export default Users;
