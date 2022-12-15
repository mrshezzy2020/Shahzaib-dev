import React from "react";

const Contactcard = (props) => {
  return (
    <>
      <div className="card card-parent tf-team" style={{}}>
        <div className="card-body">
          <div style={{ borderRadius: "50%" }}>
            <img src={props.src} alt="aa" style={{ borderRadius: "50%" }} />
          </div>
          <h4
            style={{ lineHeight: "30px", color: "#fff", marginBottom: "4px" }}
          >
            {props.name}
          </h4>
          <p className="pos">{props.des}</p>
        </div>
        <div
          className="d-flex"
          style={{ justifyContent: "center", gap: "10px" }}
        >
          <div className="linked">
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 0H3.75C1.67894 0 0 1.67894 0 3.75V20.25C0 22.3211 1.67894 24 3.75 24H20.25C22.3211 24 24 22.3211 24 20.25V3.75C24 1.67894 22.3211 0 20.25 0Z"
                fill="#c2c3c5"
              />
              <path
                d="M8.7 18H6.15V9.975H8.7V18ZM7.425 8.85C6.6 8.85 6 8.25 6 7.425C6 6.6 6.675 6 7.425 6C8.25 6 8.85 6.6 8.85 7.425C8.85 8.25 8.25 8.85 7.425 8.85ZM18 18H15.45V13.65C15.45 12.375 14.925 12 14.175 12C13.425 12 12.675 12.6 12.675 13.725V18H10.125V9.975H12.525V11.1C12.75 10.575 13.65 9.75 14.925 9.75C16.35 9.75 17.85 10.575 17.85 13.05V18H18Z"
                fill="white"
              />
            </svg>
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          </div>

          <div className="facebook">
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                fill="#c2c3c5"
              />
              <path
                fill-rule="evenodd"
                clipRule="evenodd"
                d="M21.0932 27V20.7H23.1334L23.4667 17.9H21.0932V16.5364C21.0932 15.8154 21.1129 15.1 22.1875 15.1H23.276V13.098C23.276 13.0679 22.3411 13 21.3952 13C19.4197 13 18.1828 14.1599 18.1828 16.29V17.9H16V20.7H18.1828V27H21.0932Z"
                fill="white"
              />
            </svg>
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          </div>

          <div className="facebook">
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 0H3.75C1.67894 0 0 1.67894 0 3.75V20.25C0 22.3211 1.67894 24 3.75 24H20.25C22.3211 24 24 22.3211 24 20.25V3.75C24 1.67894 22.3211 0 20.25 0Z"
                fill="#c2c3c5"
              />
              <path
                d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z"
                fill="white"
              />
            </svg>
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          </div>

          <div className="facebook">
            <svg
              width="24"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 0H3.75C1.67894 0 0 1.67894 0 3.75V20.25C0 22.3211 1.67894 24 3.75 24H20.25C22.3211 24 24 22.3211 24 20.25V3.75C24 1.67894 22.3211 0 20.25 0Z"
                fill="#c2c3c5"
              />
              <path
                d="M18 8.25C17.55 8.475 17.1 8.55 16.575 8.625C17.1 8.325 17.475 7.875 17.625 7.275C17.175 7.575 16.65 7.725 16.05 7.875C15.6 7.425 14.925 7.125 14.25 7.125C12.675 7.125 11.475 8.625 11.85 10.125C9.825 10.05 8.025 9.075 6.75 7.575C6.075 8.7 6.45 10.125 7.5 10.875C7.125 10.875 6.75 10.725 6.375 10.575C6.375 11.7 7.2 12.75 8.325 13.05C7.95 13.125 7.575 13.2 7.2 13.125C7.5 14.1 8.4 14.85 9.525 14.85C8.625 15.525 7.275 15.9 6 15.75C7.125 16.425 8.4 16.875 9.75 16.875C14.325 16.875 16.875 13.05 16.725 9.525C17.25 9.225 17.7 8.775 18 8.25Z"
                fill="white"
              />
            </svg>
            {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactcard;
