import React, { Component } from "react";
import "./Terms.css";
import Footer from "../Home/Footer/Footer";

export default class Terms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="terms-container">
        {/* <div className="terms-body">
          <h1 className="terms-header">Terms of Use</h1>
          <h2>1. The purpose of the Site</h2>
          <p>
            <span>1.1</span> The purpose of the Site is to enable You to compete
            in Leagues, Leagues and other competitive formats in skill-based
            competitive computer games, such as e.g. DotA 2. Users (and only
            Users) will be able to participate in Free and “Pay-to-enter”
            Competitions and win prizes such as Credits, points, merchandise or
            gaming products e.g. peripherals, clothing and in-game items. Users
            in Pay-to-enter Leagues can pay a pre-agreed sum of money (an entry
            fee), where the winner(s) of the League wins the Prize pool, minus a
            commission to Tryhard where applicable.
          </p>
          <p>
            <span>1.2</span> Tryhard's Match and League services (henceforth
            “Services”) are categorized as “Games of skill” and the outcome of
            any Match or League played is solely the result of skill, not
            chance. You can either participate in Pay-to-enter Competitions, by
            using funds from Your User Account, or free Competitions with both
            monetary and non-monetary prizes. You may withdraw Credits to Your
            bank account or online Payment Provider. Presently, cash transfers
            are only available via the Payment Provider further described in
            Section 7.
          </p>
          <h2>2. Eligibility</h2>
          <p>
            <span>2.1</span> In order to use the Services, You need to register
            and maintain a User Account on the Site and You must:
          </p>
          <p className="sub-sub-line">2.1.1 be a natural person</p>
          <p className="sub-sub-line">
            2.1.2 be at least 18 years of age if You want to deposit funds from
            Your bank account
          </p>
          <p className="sub-sub-line">2.1.3 submit Your email address</p>
          <p className="sub-sub-line">
            2.1.4 comply with these Terms at all times
          </p>
          <p>
            <span>2.2</span> Officers, directors and agents of Tryhard and its
            affiliates are not eligible to participate in any Competitions,
            other than for test and product development purposes.
          </p>
          <p>
            <span>2.3</span> Tryhard may at any time require You to provide
            proof of eligibility to allow You access to the Site. Failure to
            provide evidence of identification and/or eligibility satisfactory
            to Tryhard, in its sole and absolute discretion, shall result in the
            suspension and/or termination of such User Account. For User
            Accounts that are terminated due to non-eligibility, Credits
            previously deposited to the User Account will be refunded to the
            account holder.
          </p>
          <p>
            <span>2.4</span> You are fully aware of the fact that Credits paid
            to participate in Pay-to-enter Competitions and Leagues are
            non-refundable.
          </p>
          <h2>3. Fees</h2>
          <p>
            <span>3.1</span> To participate in certain Matches or Leagues You
            need to pay a fee. The fees applied for participating in these
            Matches or Leagues are;
          </p>
          <p className="sub-sub-line">
            3.1.1 Prize commission to Tryhard according to Section 11.1
          </p>
          <p className="sub-sub-line">
            3.1.2 a transaction fee and/or an administration fee to Tryhard when
            You withdraw Credits according to Section 6.5.2
          </p>
          <p className="sub-sub-line">
            3.1.3 currency converter fee to Payment Provider when paying with
            another currency than EUR according to Section 11.3
          </p>
          <p>
            <span>3.2</span> If You do not pay the fee, You will not be able to
            participate in the Matches and Leagues which requires a fee to be
            paid.
          </p>
          <h2>4. Required Information</h2>
          <p>
            <span>4.1</span> Upon registration and/or during the processing of
            transferring Credits into the User Account, You are required to
            provide the following information:
          </p>
          <p className="sub-sub-line">
            4.1.1 an alias that will be the username
          </p>
          <p className="sub-sub-line">4.1.2 A password</p>
          <p className="sub-sub-line">4.1.3 Your e-mail address</p>
          <p className="sub-sub-line">
            4.1.4 birth-date or a confirmation that You are 18 years or older if
            depositing funds to play Pay-to-enter Matches or Leagues
          </p>
          <p className="sub-sub-line">4.1.5 full name</p>
          <p className="sub-sub-line">4.1.6 permanent residential address</p>
          <p className="sub-sub-line">4.1.7 phone number</p>
          <p className="sub-sub-line">
            4.1.8 game related information, such as Game Accounts/nicknames
          </p>
          <p className="sub-sub-line">
            4.1.9 credit card or other payment information, if playing
            Pay-to-enter Competitions
          </p>
          <p>
            <span>4.2</span> The information provided must be true, accurate,
            current and complete, as requested. If Tryhard suspects that You are
            registering a User Account with purposely incorrect information,
            Tryhard reserves the right to terminate Your User Account. Tryhard
            also reserves the right, in its sole discretion, to change and/or
            suspend/terminate offensive and/or inappropriate usernames.
          </p>
          <h2>5. User Accounts</h2>
          <p>
            <span>5.1</span> You are solely responsible for all obligations and
            compliance with these Terms and are entitled to all benefits
            accruing thereto. You may not allow any other person to access Your
            User Account, access the Site, accept any Prizes, or participate in
            any League using Your User Account. Your User Account is not
            transferable to another person. All activities undertaken under Your
            User Account will be deemed to have been done by You.
          </p>
          <p>
            <span>5.2</span> You are only permitted to register one active User
            Account on the Site. Tryhard reserves the right but is not obliged
            to monitor any effort to establish multiple User Accounts. In the
            event it is discovered that You have opened more than one User
            Account, all Your User Accounts may be terminated without any
            notice. Tryhard reserves the right to deny access to anyone,
            including, but not limited to, those Users who use proxy servers
            and/or IP addresses residing in certain geographical areas.
          </p>
          <p>
            <span>5.3</span> In consideration of the use of the Site and Your
            User Account, You agree to:
          </p>
          <p className="sub-sub-line">
            5.3.1 provide accurate, current and complete information about
            Yourself as may be prompted by any registration forms on the Site
            (henceforth “Registration Data”);
          </p>
          <p className="sub-sub-line">
            5.3.2 maintain the security of the password and identification
          </p>
          <p className="sub-sub-line">
            5.3.3 maintain and promptly update the Registration Data, and any
            other information, to keep it accurate and complete
          </p>
          <p className="sub-sub-line"></p>
        </div> */}
        <div className="terms-body">
          <h1 className="terms-header">Terms of Use</h1>

          <p>&nbsp;</p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                1.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                The purpose of the Site
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The purpose of the Site is to enable You to compete in Leagues,
              Leagues and other competitive formats in skill-based competitive
              computer games, such as e.g. DotA 2. Users (and only Users) will
              be able to participate in Free and “Pay-to-enter” Competitions and
              win prizes such as Credits, points, merchandise or gaming products
              e.g. peripherals, clothing and in-game items. Users in
              Pay-to-enter Leagues can pay a pre-agreed sum of money (an entry
              fee), where the winner(s) of the League wins the Prize pool, minus
              a commission to Tryhard where applicable.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard's Match and League services (henceforth “Services”) are
              categorized as “Games of skill” and the outcome of any Match or
              League played is solely the result of skill, not chance. You can
              either participate in Pay-to-enter Competitions, by using funds
              from Your User Account, or free Competitions with both monetary
              and non-monetary prizes. You may withdraw Credits to Your bank
              account or online Payment Provider. Presently, cash transfers are
              only available via the Payment Provider further described in
              Section 7.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Eligibility
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              In order to use the Services, You need to register and maintain a
              User Account on the Site and You must:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              be a natural person,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              be at least 18 years of age if You want to deposit funds from Your
              bank account,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.1.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              submit Your email address, and
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.1.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              comply with these Terms at all times.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Officers, directors and agents of Tryhard and its affiliates are
              not eligible to participate in any Competitions, other than for
              test and product development purposes.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard may at any time require You to provide proof of
              eligibility to allow You access to the Site. Failure to provide
              evidence of identification and/or eligibility satisfactory to
              Tryhard, in its sole and absolute discretion, shall result in the
              suspension and/or termination of such User Account. For User
              Accounts that are terminated due to non-eligibility, Credits
              previously deposited to the User Account will be refunded to the
              account holder.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                2.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You are fully aware of the fact that Credits paid to participate
              in Pay-to-enter Competitions and Leagues are non-refundable.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                3.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Fees
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                3.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              To participate in certain Matches or Leagues You need to pay a
              fee. The fees applied for participating in these Matches or
              Leagues are;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                3.1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Prize commission to Tryhard according to Section 11.1;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                3.1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              a transaction fee and/or an administration fee to Tryhard when You
              withdraw Credits according to Section 6.5.2; and
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                3.1.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              currency converter fee to Payment Provider when paying with
              another currency than EUR according to Section 11.3.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                3.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If You do not pay the fee, You will not be able to participate in
              the Matches and Leagues which requires a fee to be paid.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Required Information
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Upon registration and/or during the processing of transferring
              Credits into the User Account, You are required to provide the
              following information:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              an alias that will be the username,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              a password,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Your e-mail address,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              birth-date or a confirmation that You are 18 years or older if
              depositing funds to play Pay-to-enter Matches or Leagues,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              full name,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.6
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              permanent residential address,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.7
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              phone number,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.8
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              game related information, such as Game Accounts/nicknames, and
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.1.9
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              credit card or other payment information, if playing Pay-to-enter
              Competitions.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                4.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The information provided must be true, accurate, current and
              complete, as requested. If Tryhard suspects that You are
              registering a User Account with purposely incorrect information,
              Tryhard reserves the right to terminate Your User Account. Tryhard
              also reserves the right, in its sole discretion, to change and/or
              suspend/terminate offensive and/or inappropriate usernames.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                User Accounts
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You are solely responsible for all obligations and compliance with
              these Terms and are entitled to all benefits accruing thereto. You
              may not allow any other person to access Your User Account, access
              the Site, accept any Prizes, or participate in any League using
              Your User Account. Your User Account is not transferable to
              another person. All activities undertaken under Your User Account
              will be deemed to have been done by You.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You are only permitted to register one active User Account on the
              Site. Tryhard reserves the right but is not obliged to monitor any
              effort to establish multiple User Accounts. In the event it is
              discovered that You have opened more than one User Account, all
              Your User Accounts may be terminated without any notice. Tryhard
              reserves the right to deny access to anyone, including, but not
              limited to, those Users who use proxy servers and/or IP addresses
              residing in certain geographical areas.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              In consideration of the use of the Site and Your User Account, You
              agree to:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.3.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              provide accurate, current and complete information about Yourself
              as may be prompted by any registration forms on the Site
              (henceforth “Registration Data”);
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.3.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              maintain the security of the password and identification;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.3.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              maintain and promptly update the Registration Data, and any other
              information, to keep it accurate and complete; and
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.3.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              be fully responsible for all use of Your User Account and for any
              actions that take place using Your User Account. Knowingly
              submitting incomplete or inaccurate information or failing to
              update and maintain complete and accurate information, may result
              in immediate termination of Your User Account.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Deposits
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.4.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              To participate in a Pay-to-enter Competitions, and if You have not
              acquired funds through playing free Competitions, You must deposit
              Credits to Your User Account. You may transfer Credits to be
              deposited in Your User Account (see Section 7) or use the Credits
              that have been awarded to You by Tryhard for promotional purposes.
              The minimum limit for deposit payments equals EUR 3. No interest
              is payable on the Credits. All payments must be made from a bank
              or payment account for which You are the named account holder.
              Tryhard also reserves the right to require You to confirm or
              validate any or all deposits previously made to Your User Account.
              You acknowledge that in the case of any dispute, Your validation
              may be used by Tryhard as evidence. You do not need to deposit
              Credits to participate in “free to enter” Competitions.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.4.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Any attempt to defraud the Site through the use of credit cards or
              other methods of payment, regardless of the outcome, or any
              failure by You to honor legitimate charges or requests for
              payment, or confirmation of deposits, will result in immediate
              termination of Your User Account, forfeiture of any Prizes, and
              active pursuit of civil litigation and/or referral for criminal
              prosecution.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Withdrawals
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.5.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You may request a withdrawal of available Credits from Your User
              Account at any time. Withdrawal privileges may be revoked for
              security purposes when fraud is suspected. Withdrawals will be
              enabled only after one deposit has been made by You.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.5.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The minimum withdrawal allowed equals EUR 3.0. Withdrawals may be
              subject to a transaction and administration fee amounting to a
              percent of the withdrawn amount (as set by the Payment Provider).
              In such cases Tryhard reserves the right to compensate itself for
              that fee by automatically deducting it from the withdrawn Credits.
              The withdrawal fee is currently equal to a minimum of EUR 1. You
              are advised to contact customer support if the withdrawal is not
              received within three (3) business days.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.5.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You may be required to provide proper identification and proof of
              eligibility prior to any request of withdrawal. To prevent
              fraudulent behavior and account hijacking, Tryhard reserves the
              right to require You or the credit card holder (if applicable) to
              submit verification of identification to ascertain the validity of
              a withdrawal request and Your identity. Withdrawal payments will
              not be made until such verification is received. If such
              verification is not received within ten (10) business days, the
              withdrawal request will be cancelled, the User Account in question
              will be suspended, and You will be contacted by email.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.6
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Closing the User Account
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.6.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You can close Your User Account at any time, by contacting the
              support directly on support@Tryhard.gg
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.6.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard may transfer all funds from the User Account (subject to
              the deduction of relevant withdrawal charges).
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.6.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If You want to recover funds from closed, blocked or excluded
              accounts, You need to contact the support.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.7
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Inactive accounts
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.7.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              An inactive User Account is an account that has not been accessed
              for an uninterrupted period of twelve (12) months.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                5.7.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Once Your User Account is considered inactive, Tryhard will
              contact You via e-mail to inform You that the User Account may be
              closed thirty (30) days from dispatching such e-mail, unless You
              log in. Account closure means that any funds still residing in
              Your Account Balance may be transferred back to Tryhard to be used
              for promotional purposes, donated to connected charities or
              otherwise used to further improve the Site.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                6.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Third-party Payment Providers
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                6.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard uses the services of third-party electronic payment
              processors and financial institutions (henceforth “Payment
              Providers” to process deposits and withdrawals into and from the
              User Accounts. The information that Tryhard provides and receives
              from the Payment Providers and the manner in which such
              information is used and disclosed is in accordance with these
              Terms, and where applicable, any third-party Payment Provider's
              terms and conditions.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                6.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You irrevocably authorize Tryhard to instruct such Payment
              Providers (e.g. PayPal) to handle Your User Account deposits and
              withdrawals from Your User Account, as reasonably required to
              provide the Services. You agree to be bound by the terms and
              conditions of use of each applicable Payment Provider, and in the
              event of a conflict between these Terms and the Payment Provider's
              terms and conditions, then these Terms shall prevail. You agree
              that Tryhard is not liable for any loss caused by any unauthorized
              use of Your credit card or other method of payment by a
              third-party in connection with the use of the Services or the
              Site.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Malfunctions, Fraud and Unauthorized Access
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You agree, without limitation, that Tryhard is not responsible for
              technical, hardware or software malfunctions, lost or unavailable
              network connections, disconnects from the game play on the
              Platform, or any incorrect or inaccurate results that may be
              posted on or in relation to a Game. You also agree that Tryhard is
              not responsible for any damage, loss, or injury resulting from
              hacking, tampering, or other unauthorized access or use of the
              Site or Your User Account.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You may not:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.2.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              gain unauthorized access to the Site's systems or any other's User
              Account other than Your own, interfere with the communications,
              procedures or performance of the Site or deliberately damage or
              undermine the Site;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.2.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              affect the outcome of Your online game play by means of or with
              the assistance of macros, bots, automated programs, cheating
              software, screen analysis utilities, player collusion, any type of
              modifications or otherwise commit fraud in relation to the Site;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.2.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              alter the human skill component of any game played on the
              platform;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.2.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              intentionally play poorly below Your skill level in order to be
              matched with a less skilled User; or
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                7.2.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              participate in any Match, League or Game offered on the Site by
              means of automatic, macro, programmed bots, or similar methods, or
              to otherwise commit fraud with regard to the Site. Any attempt to
              do so is a violation of both civil and criminal laws and will
              result not only in the termination of Your User Account and
              forfeiture of all Prizes, bonuses and incentives to which You
              would otherwise be entitled to, but potentially lead to civil
              and/or criminal prosecution. Tryhard, in its sole discretion,
              reserves the right to terminate any User's User Account who is
              suspected of tampering with their game results for the Match or
              League entered, or who otherwise violates these Terms and to seek
              legal enforcement to the greatest extent possible.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                8.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Matches and Matchmaking
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                8.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You agree that Tryhard is appointed as an agent to create
              Leagues,&nbsp; between You and other Users, and the results of a
              Match. Tryhard does not in any way participate in any Match.&nbsp;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                8.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              By joining a League (participating in a League), You expressly
              confirm that You have read and understood the nature of the League
              and the terms under which You will participate.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                8.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Once You have joined a League You agree to play the League to
              completion with any matched teammates or opponents. Tryhard may
              determine, in its absolute discretion, when the Site is open for
              issuing new Leagues.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                9.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Leagues
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                9.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The Leagues are governed by these Terms in combination with the
              terms and conditions applicable for each League. If the terms and
              conditions applicable for each League are in conflict with these
              Terms, these Terms shall prevail.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                9.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              By joining a League and confirming that You will participate, You
              expressly confirm that You have read and understood the nature of
              the League and the terms under which You will participate.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                10.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Prizes and Currency
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                10.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The Prizes are awarded to You in their entirety, and all national,
              provincial, state, and local taxes due in connection with any
              Prizes awarded, are Your sole liability and responsibility.
              Tryhard reserves the right to retain a predetermined portion of up
              to 25% of the Prize as commission in all Pay-to-enter Competitions
              and Leagues.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                10.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The outcome of the Matches and Leagues offered are directly
              related to the number of participants and the skill level of each
              participant. Tryhard does not comment and makes no representations
              about Your or any other User's chances of winning or losing.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                10.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              All monetary Prizes are directly deposited as Credits in the
              winner's User Account. All Credits and Prizes are denominated in
              EUR unless otherwise noted. All references to EUR on the Site are
              references to the currency Euro. If You make a payment that is
              denominated in a currency other than EUR, the funds will be
              converted into EUR by the Payment Provider. You may be charged a
              service fee for such currency conversion amounting a percentage
              set by the given Payment Providers. The conversion rate used is
              not under the control of Tryhard.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                10.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The results and Prizes of each Match or League will be determined
              with actual game and server data as well as by Tryhard and its
              Administrators. Such determinations are final and cannot be
              appealed. By registering and/or participating in any Match or
              League, You agree to be bound by these determinations.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                11.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Promotional Activities
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                11.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              When registering for a User Account, You agree that Tryhard may
              display Your username, gameplay data and statistics, League
              records and any other information with regard to Your gaming
              activity on the Site.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You agree to allow Tryhard to print, publish, broadcast and use,
              worldwide, in any media and at any time, Your username, gameplay
              data and statistics, League records and any other information with
              regard to Your gaming activity on the Site, for promotional,
              marketing or related purposes without additional compensation.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                11.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If You submit or transmit audio, video, or text materials to the
              Site, including, but not limited to, comments, question,
              suggestions, drawings, or computer programs (collectively
              “Submissions”), You grant Tryhard and its affiliates, its partners
              and distributors, a non-exclusive, worldwide, royalty-free, fully
              sub-licensable license, to use, distribute, edit, display,
              archive, publish, sublicense, perform, reproduce, make available,
              transmit, broadcast, sell, translate and create derivative works
              of those Submissions, in any form, media, or technology, for the
              purpose of developing and marketing game products, Matches and
              Leagues. You hereby waive, to the fullest extent possible under
              applicable law, any moral rights You may have to such Submissions.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                11.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You represent and warrant that You have all rights necessary to
              grant Tryhard and its affiliates the license above and that none
              of Your Submissions are defamatory, violate any rights of third
              parties, including, without limitation, any intellectual property
              rights, or violate applicable laws.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                12.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Intellectual Property Rights
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                12.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              By registering for a User Account and participating in any Match
              or League offered on the Site, or using the Services, You
              acknowledge that all content included in the Services, including
              but not limited to, all Site design, text, graphics, photos,
              audio, video, the selection and arrangement thereof, and all
              software that forms part of the Services (collectively the
              “Content”) is owned or licensed by Tryhard and/or its licensors.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                12.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You agree to not modify, publish, participate in the transfer or
              sale of, create derivative works from, or in any way exploit the
              Content. Tryhard neither warrants nor represents that Your use of
              the Content will not infringe rights of third parties. While
              Tryhard uses reasonable efforts to include accurate and up-to-date
              information, Tryhard makes no warranties or representations as to
              the accuracy or completeness of any Content and assumes no
              liability or responsibility for any errors or omissions in the
              Content.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                12.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The trademarks, logos, and service marks (collectively the
              “Trademarks”) displayed and forming part of the Content, including
              the names of all Games, Matches and Leagues, are registered and
              unregistered Trademarks of Tryhard and/or others. Nothing
              contained on the Site should be construed as granting, by
              implication or otherwise, any license or right to use any of the
              Trademarks displayed on the Site without the prior written
              permission of Tryhard or such third party that owns the Trademark.
              Your misuse of any Trademark or any other Content, except as
              provided in these Terms and applicable copyright, trademark,
              patent, or other intellectual property restrictions, is strictly
              prohibited.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                12.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard will enforce its intellectual property rights to the
              fullest extent of the law, including but not limited to, the
              active pursuit of civil litigation and referral for criminal
              prosecution where appropriate.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                13.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Privacy Policy
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                13.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard's Privacy Policy describes the practices concerning
              personal data that You provide or that Tryhard may collect about
              You through the Services.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                13.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The Privacy Policy can be found here:
              http://www.Tryhard.gg/privacy/.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                14.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Complaints
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                14.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              In case of any complaints on the Site or the Services, such
              complaints shall be directed to Tryhard by;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              On-site chat support or,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              E-mail: support@Tryhard.gg
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                14.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              In order for Tryhard to deal with Your complaint quickly, the
              complaint must contain clear information about Your identity as
              well as all relevant details giving rise to the complaint. Tryhard
              will use its best efforts to promptly resolve a reported matter
              and reach an amicable settlement.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                14.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Any claim You might have regarding any transaction must be made
              within six (6) months after the transaction and/or payment took
              place/should have taken place; otherwise Tryhard will not consider
              the claim. Once a claim is received, Tryhard will review any
              queried or disputed transactions and inform You about the outcome.
              Tryhard's decision is final.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Anti-spam Policy
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard prohibits any activity commonly referred to as “Spam”,
              which is defined as:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              electronic mail messages addressed to a recipient with whom the
              initiator does not have an existing business or personal
              relationship or is not sent at the request of, or with the express
              consent of, the recipient;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              messages posted to message boards or chats that are off-topic
              (unrelated to the topic of discussion), cross-posted to unrelated
              message boards or discussion threads, or posted in excessive
              volume;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.1.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              solicitations posted on chat rooms, or to groups or individuals
              via Internet Relay Chat or Instant Messaging system (such as
              Skype, Facebook Chat and Twitter);
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If You are reported and the claims of Spam are validated by
              Tryhard, Tryhard may undertake, at its sole discretion and with or
              without prior notice, the following enforcement actions:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.2.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Account suspension: Upon receipt of a credible and validated
              complaint, Tryhard may elect to immediately suspend Your User
              Account implicated in the abuse. Suspension serves as a “final”
              warning and will prevent You from continuing the abusive spamming
              behavior. Tryhard will evaluate each validated abuse incident on a
              case-by-case basis and impose termination or suspension at its
              sole discretion and may void any associated Prizes. Tryhard
              reserves the right to lift Your suspension at any time, at its
              sole discretion.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.2.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Account termination: Upon receipt of a credible and validated
              complaint, Tryhard may immediately terminate Your User Account
              implicated in the abuse and may void any associated Prizes.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                15.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If You wish to report a violation of Tryhard's Anti-Spam Policy,
              please forward all evidence of abuse to support@Tryhard.gg.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                16.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Anti Money Laundering Reporting
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                16.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard need to comply with the Money Laundering and Terrorist
              Financing Prevention Act (SFS 2009:62) and any other associated
              regulations. Tryhard shall check all transactions and report any
              suspicious transaction to the relevant competent authorities in
              UK.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                16.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If You become aware of any suspicious activity relating to any of
              the Games on the Site, You must report this to Tryhard
              immediately.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                16.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard may suspend, block or close any User Account and withhold
              funds, in accordance with the abovementioned act.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Rules of Conduct
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard reserves the right to remove any User generated content
              and temporarily or permanently ban Users who violate these rules
              of conduct (henceforth “Rules of Conduct”), or who in any way;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              abuse the community purpose of the chat areas,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              post obscene, lewd, slanderous, pornographic, abusive, violent,
              insulting, indecent, threatening and harassing language of any
              kind,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              impersonate other Users,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              post opinions or comments that attack individuals, companies or
              products,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              advertise or promote other companies, URLs, and any other kind of
              advertisement or promotion,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.6
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              share personal information (name, phone number, home address,
              password),
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.7
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              post copyrighted or trademarked material,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.8
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              use any advanced fonts, Java, tables, HTML, or other programming
              scripts or commands,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.1.9
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Sverok Code of Conduct - We adhere to the principles laid out by
              organization Sverok in their esports Code of Conduct. See An
              esports Code of Conduct (http://esportcodeofconduct.com/) to read
              or download it in English.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                17.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Information disclosed on the Site's chat rooms, direct messages,
              message boards by comments or other electronic messages becomes
              the property of Tryhard and may be publicly disclosed. Tryhard is
              not responsible for any information that You choose to disclose.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Breach of Terms
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard reserves the right to take immediate action in the event
              that You are believed of failing to observe the terms of the Rules
              of Conduct or violating these Terms. Such actions include but are
              not limited to, suspending or terminating Your User Account, or
              the Credits, void Your scores, change Your feedback, seize funds
              in Your User Account to repay contestants who You have cheated
              against and/or commence legal proceedings against You.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard reserves the right to suspend or terminate the User
              Account of any User who is in violation or who Tryhard suspect may
              be or will be violating these Terms. If such violations occur and
              a User Account is terminated, Tryhard reserves the right to
              determine how such a User's User Account balance will be
              distributed.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard may cooperate with legal authorities and third parties in
              the investigation of any suspected or alleged crime or civil
              wrongdoing. Tryhard reserves the right, in its sole discretion, to
              take any or all of the steps described above if it determines,
              acting reasonably, that You:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.3.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              have breached any term of these Terms;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.3.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              are participating in any attempt to defraud Tryhard or the Site
              through the use of credit cards or other methods of payment,
              regardless of the outcome;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.3.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              have failed to honor legitimate charges or requests for payment,
              or has 'charged back' or denied any of the purchases or deposits
              that You made to Your User Account;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.3.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              are participating in any attempt to cheat another User through
              collusion or other techniques, regardless of the outcome; or
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.3.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              have become bankrupt or subject to analogous proceedings anywhere
              in the world.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              For breaches of the Terms (including the Rules of Conduct) that
              are deemed by Tryhard, in its sole discretion, to be unintentional
              or less serious, first time offenders may receive an initial
              warning and may have their User Account suspended at the
              discretion of Tryhard. Repeated offences will be deemed to be
              intentionally violating the Terms. If You are suspected of having
              violated the Rules of Conduct, Tryhard reserves the right to
              suspend Your User Account, including any access to the Site, or
              freeze the Credits and any account balance or withdrawals pending
              for up to six months while an investigation occurs.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                18.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard reserves the right to terminate Your User Account, limit
              or prohibit Your participation in any Match, Game or League. If
              applicable, all charged monies (deposits), less fees and
              withdrawals, will be returned to You. All Prizes (if any) may be
              voided at the sole discretion of Tryhard. Any person whose access
              has been suspended or terminated may not re-register for, or
              re-access, the Site without Tryhard's prior written consent.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                19.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Local Laws
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                19.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You are subject to all laws of the province, state, and/or country
              in which You reside and from which You access the Services and is
              solely responsible for obeying the laws of such jurisdiction. You
              agree that Tryhard and its affiliates cannot be held liable if
              applicable law restricts or prohibits Your participation or use of
              the Service. Tryhard and its affiliates make no representations or
              warranties, implicit or explicit, as to Your legal right to
              participate in any Match, League or Game offered on the Site nor
              shall any person affiliated, or claiming affiliation, with Tryhard
              and its affiliates have authority to make any such representations
              or warranties. Tryhard and its affiliates reserve the right to
              monitor the location from which You access the Site and to block
              access from any jurisdiction in which participation is illegal or
              restricted.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                20.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                No Waiver
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                20.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              The failure of Tryhard to enforce at any time any of the
              provisions of these Terms, or the failure to require at any time
              performance by You of any of the provisions of these Terms, shall
              in no way be construed to be a present or future waiver of such
              provisions, nor in any way affect the right of Tryhard to enforce
              each and every such provision thereafter. The express waiver by
              Tryhard of any provision, condition or requirement of these Terms
              shall not constitute a waiver of any future obligation to comply
              with such provision, condition or requirement.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Disclaimer of Warranties and Force Majeure
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              While Tryhard uses reasonable efforts to include accurate and
              up-to-date information, Tryhard specifically disclaims any and all
              responsibility or liability for the accuracy, content,
              completeness, legality, reliability, or operability or
              availability of information or material displayed in any and all
              Tryhard web sites, either now operating or created in the future.
              Tryhard disclaims any responsibility or liability for the
              deletion, failure to store, mis-delivery, or untimely delivery of
              any information or material. Tryhard disclaims any responsibility
              or liability for any harm resulting from downloading or accessing
              any information or material on the Internet through the Site.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Without limiting the foregoing, under no circumstances shall
              Tryhard be held liable for any delay or failure in performance
              resulting directly or indirectly from acts of nature, forces, or
              causes beyond its reasonable control, including, without
              limitation, Internet failures, computer equipment failures,
              telecommunication equipment failures, other equipment failures,
              electrical power failures, strikes, labor disputes, civil
              disturbances, shortages of labor or materials, fires, floods,
              storms, explosions, governmental actions, orders of domestic or
              foreign courts or tribunals, non-performance of third-parties, or
              loss of or fluctuations in heat, light, or air conditioning.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Your use of the Services is at Your sole risk. The Services are
              provided on an “AS IS” and “AS AVAILABLE” basis. Tryhard expressly
              disclaims all warranties of any kind, whether express or implied,
              including, but not limited to, the implied warranties of
              merchantability, fitness for a particular purpose and
              non-infringement. Tryhard makes no warranty that:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              the Services will meet Your requirements,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              the Services will be uninterrupted, timely, secure, or error-free,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              the results that may be obtained from the use of the Services will
              be accurate or reliable,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              the quality of any products, services or information purchased or
              obtained by You through the Services will meet Your expectations,
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Your messages, data or information, in whatever form or medium,
              will not be lost, and
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.3.6
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              any errors will be corrected. Any material downloaded or otherwise
              obtained through the Services is done at Your own discretion and
              risk, and You will be solely responsible for any damage to Your
              computer system or loss of data that results from the download of
              any such material. No advice or information, whether oral or
              written, obtained by You from Tryhard, or through or from the
              Services will create any warranty not expressly stated in these
              Terms.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                21.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You understand and agree that downloaded or otherwise obtained
              material or data through the use of the Site is at Your own
              discretion and risk and You will be solely responsible for any
              damages to Your computer system or loss of data that results from
              the download of such material or data. Tryhard and its affiliates
              are not responsible or liable for content posted by the Users,
              third parties, actions of any third party or for any damage to, or
              virus that may infect a User's computer equipment or other
              property.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Limitation of Liability
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You agree that Tryhard and its affiliates will not be liable for
              any direct, indirect, incidental, special, consequential or
              exemplary damages, including but not limited to, damages for loss
              of profits, goodwill, use, data or other intangible losses (even
              if Tryhard and its affiliates have been advised of the possibility
              of such damages), resulting from:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.1.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              the use or inability to use the Services;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.1.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              the cost of getting substitute goods and services resulting from
              any products, data, information or services purchased or obtained
              or messages received, or transactions entered into through or from
              the Services;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.1.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              unauthorized access to or alteration of transmissions or data;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.1.4
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              statements or conduct of anyone in connection with the Services;
              or
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                22.1.5
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              any other matter relating to the Services. If, notwithstanding the
              other provisions of this Terms, Tryhard and its affiliates are
              found to be liable for any damage or loss which arise out of or is
              any way connected to Your use of the Services, liability of
              Tryhard and its affiliates shall be limited to the total of any
              funds lost by You by participating in any Match, League, Game or
              any fees with respect to any Service or feature of the Services
              paid in the six months prior to the date of the initial claim made
              against Tryhard and its affiliates, but shall in no circumstances
              exceed EUR 1,000.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                23.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Indemnification
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                23.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              By registering and/or participating in any Services offered on the
              Site, You agree to indemnify, defend, and hold harmless Tryhard,
              its subsidiaries, affiliates, and the directors, officers,
              employees, shareholders, vendors, partners, contractors, agents,
              licensors or other representatives of each of them and all their
              successors and assigns (collectively, the “indemnitees”) in
              respect of all claims, costs (including reasonable legal fees and
              costs), damages, liabilities and expenses or obligations of any
              kind, arising out of or in connection with Your use or misuse of
              the Services (including without limitation use of Your User
              Account, whether or not authorized by You). Tryhard retains the
              right to assume the exclusive defense and control of any claim
              supporting indemnification, and in such cases, You agree to
              cooperate with Tryhard to defend any such claim. You will not
              settle any claim covered by this section and the disclaimer of
              warranties without Tryhard's prior written approval.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                24.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Severability and Assignment
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                24.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If any portion of the Terms is deemed void or unenforceable, then
              that provision shall be deemed severable from the Terms and shall
              not affect the validity and enforceability of the remaining
              provisions.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                24.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              You may not wholly or partly assign or pledge Your rights and
              obligations under these Terms to any third party except with the
              prior written consent of Tryhard.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Notices
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Unless otherwise agreed between the parties, any notice, request,
              consent and other communication to be given by a party under these
              Terms (henceforth “Notice”) shall be in the English or Swedish
              language and deemed to be valid and effective if personally served
              on the other party or sent by registered prepaid airmail to the
              other party's known address.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Any notice or other communication shall be deemed to have been
              served:
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.2.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              if delivered by hand, when left at the address referred to above;
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.2.2
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              if sent by registered letter, the second day after it is sent; or
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.2.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              if sent by email, on the date sent if receipt of the email is
              confirmed by the recipient.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                25.3
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              If a notice is given or is deemed to have been given at a time or
              on a date which is not a business day, it shall be deemed to have
              been given on the next business day, with business day in this
              context meaning any such day as the commercial banks are open for
              business in UK.
            </span>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                26.
              </span>
            </strong>
          </p>
          <p
            style={{    }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                Governing Law and Disputes
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <strong>
              <span
                style={{
                  fontSize: "1rem",
                  fontFamily: "openSenRegular",
                  color: "#fff",
                  backgroundColor: "transparent",
                  fontVariant: "normal",
                  textDecoration: "none",
                  verticalAlign: "baseline",
                  whiteSpace: "pre-wrap"
                }}
              >
                26.1
              </span>
            </strong>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              These Terms will be governed by and construed in accordance with
              the national laws and provisions of the country of UK. You hereby
              consent to the exclusive jurisdiction of and venue in UK courts,
              for all disputes arising out of or relating to the Services.
              Notwithstanding any other provisions of these Terms, Tryhard may
              seek injunctive or other equitable relief from any court of
              competent jurisdiction. You agree that any dispute that cannot be
              resolved between the parties shall be resolved individually,
              without resort to any form of class action.
            </span>
          </p>
          <p
            style={{
              
              
              
            }}
          >
            <span
              style={{
                fontSize: "1rem",
                fontFamily: "openSenRegular",
                color: "#fff",
                backgroundColor: "transparent",
                fontWeight: 400,
                fontVariant: "normal",
                textDecoration: "none",
                verticalAlign: "baseline",
                whiteSpace: "pre-wrap"
              }}
            >
              Tryhard makes no representation that the Site is operated in
              accordance with the laws or regulations of, or governed by, other
              nations.
            </span>
          </p>
          <p>
            <br />
            <br />
            <br />
          </p>
        </div>
        <Footer />
      </div>
    );
  }
}
