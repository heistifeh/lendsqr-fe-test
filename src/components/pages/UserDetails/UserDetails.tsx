import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { useParams, Link } from "react-router-dom";
import { DashboardLayout } from "../../../components/layouts";
import {
  Button,
  Card,
  LoadingDots,
  TierRating,
} from "../../../components/interface";
import { ArrowLeft, Profile } from "../../../components/icons";
import { convertToThousands } from "../../../lib/utils";
import {
  getUserDetails,
  getUserTabs,
  type UserDetailProps,
  type UserDetailsItem,
} from "../../../lib/data/getUsersData";
import { useQuery } from "@tanstack/react-query";
import { getSingleUser } from "../../../api/helper/users";

const Users: React.FC = () => {
  const [activeUserTab, setActiveUserTab] = useState<string>("General Details");
  const [user, setUser] = useState<any>([]);
  const { userId } = useParams<{ userId: string }>();
  const [userDetails, setUserDetails] = useState<UserDetailsItem[]>(
    getUserDetails()
  );

  const updateUserDetail = (
    header: string,
    key: string,
    value: string
  ): void => {
    setUserDetails((prevUserDetails) => {
      const updatedUserDetails = prevUserDetails.map((userDetail) => {
        if (userDetail.header === header) {
          const updatedDetails = userDetail.details.map((detail) => {
            if (detail.key === key) {
              return { ...detail, value };
            }
            return detail;
          });
          return { ...userDetail, details: updatedDetails };
        }
        return userDetail;
      });
      return updatedUserDetails;
    });
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["users-details", userId],
    queryFn: () => getSingleUser(userId),
    enabled: !!userId,
  });
  console.log("userId", userId);
  console.log("data", data);
  console.log("error", error);

  useEffect(() => {
    if (data) {
      const userData = data.data;
      setUser(userData);

      updateUserDetail(
        "Personal Information",
        "full name",
        `${userData?.profile?.firstName} ${userData?.profile?.lastName}`
      );
      updateUserDetail(
        "Personal Information",
        "phone number",
        userData?.profile?.phoneNumber
      );
      updateUserDetail(
        "Personal Information",
        "email address",
        userData?.email
      );
      updateUserDetail("Personal Information", "bvn", userData?.profile?.bvn);
      updateUserDetail(
        "Personal Information",
        "gender",
        userData?.profile?.gender
      );
      updateUserDetail("Personal Information", "marital status", "Single");
      updateUserDetail("Personal Information", "children", "None");
      updateUserDetail(
        "Personal Information",
        "type of residence",
        "Parent's Apartment"
      );

      updateUserDetail(
        "Education and Employment",
        "level of education",
        userData?.education?.level
      );
      updateUserDetail(
        "Education and Employment",
        "employment status",
        userData?.education?.employmentStatus
      );
      updateUserDetail(
        "Education and Employment",
        "sector of employment",
        userData?.education?.sector
      );
      updateUserDetail(
        "Education and Employment",
        "duration of employment",
        userData?.education?.duration
      );
      updateUserDetail(
        "Education and Employment",
        "official email",
        userData?.education?.officeEmail
      );
      updateUserDetail(
        "Education and Employment",
        "monthly income",
        `₦${userData?.education?.monthlyIncome?.[1]} - ₦${userData?.education?.monthlyIncome?.[0]}`
      );
      updateUserDetail(
        "Education and Employment",
        "loan repayment",
        userData?.education?.loanRepayment
      );

      updateUserDetail("Socials", "twitter", userData?.socials?.twitter);
      updateUserDetail("Socials", "facebook", userData?.socials?.facebook);
      updateUserDetail("Socials", "instagram", userData?.socials?.instagram);

      updateUserDetail(
        "Guarantor",
        "full name",
        `${userData?.guarantor?.firstName} ${userData?.guarantor?.lastName}`
      );
      updateUserDetail(
        "Guarantor",
        "phone number",
        userData?.guarantor?.phoneNumber
      );
      updateUserDetail("Guarantor", "address", userData?.guarantor?.address);
      updateUserDetail("Guarantor", "gender", userData?.guarantor?.gender);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log("response", (error as any)?.response);
    }
  }, [error]);

  if (isLoading || !data?.data) {
    return (
      <DashboardLayout>
        <div className="user-details">
          <Button variant="naked">
            <Link to="/customers/users" className="back-to-users">
              <ArrowLeft />
              <span>Back to Users</span>
            </Link>
          </Button>
          <div className="user-details-header">
            <h1>Users Details</h1>
            <div className="user-details-btns">
              <Button className="btn blacklist" variant="outlined">
                Blacklist User
              </Button>
              <Button className="btn activate" variant="outlined">
                Activate User
              </Button>
            </div>
          </div>
          {isLoading && (
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
          )}
          {!isLoading && !!data?.data && !!user && (
            <Card className="user-details-card-highlight">
              <div className="user-profile">
                <div className="user-profile-icon">
                  {user?.profile?.avatar ? (
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                      }}
                      src={user?.profile?.avatar}
                      alt={`${user?.profile?.firstName} ${user?.profile?.lastName} profile`}
                    />
                  ) : (
                    <Profile />
                  )}
                </div>
                <div className="user-profile-identity">
                  <h2>{user?.userName}</h2>
                  <span>{user?.accountNumber}</span>
                </div>
                <div className="user-profile-tier">
                  <h2>User’s Tier</h2>
                  <TierRating
                    starredStars={
                      Number(user?.accountBalance) > 500 &&
                      Number(user?.accountBalance) < 750
                        ? 2
                        : Number(user?.accountBalance) > 750
                        ? 3
                        : 1
                    }
                  />
                </div>
                <div className="user-profile-funds">
                  <h2>₦{convertToThousands(user?.accountBalance)}</h2>
                  <span>{user?.profile?.bvn}/Providus Bank</span>
                </div>
              </div>
              <div className="user-tabs">
                {getUserTabs()?.map((i: string) => {
                  return (
                    <Button
                      key={i}
                      variant="naked"
                      className={classnames("user-tab", {
                        active: activeUserTab === i,
                      })}
                      onClick={() => setActiveUserTab(i)}
                    >
                      {i}
                    </Button>
                  );
                })}
              </div>
            </Card>
          )}
         
            <Card className="user-details-card-records">
              {userDetails?.map((j: UserDetailsItem) => {
                return (
                  <div key={j.header} className="record">
                    <h3>{j.header}</h3>
                    <div className="record-value-container">
                      {j.details?.map((k: UserDetailProps) => {
                        return (
                          <div className="record-value" key={k.key}>
                            <h4>{k.key}</h4>
                            <p>{k.value}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
                })}
            </Card>
        </div>
      </DashboardLayout>
    );
  }
};

export default Users;
