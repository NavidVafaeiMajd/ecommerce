const UserIcon = ({stroke} : {stroke : string}) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41667 9.08333C9.71785 9.08333 11.5833 7.21785 11.5833 4.91667C11.5833 2.61548 9.71785 0.75 7.41667 0.75C5.11548 0.75 3.25 2.61548 3.25 4.91667C3.25 7.21785 5.11548 9.08333 7.41667 9.08333ZM7.41667 9.08333C3.73477 9.08333 0.75 11.3219 0.75 14.0833M7.41667 9.08333C11.0986 9.08333 14.0833 11.3219 14.0833 14.0833"
        stroke={stroke}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default UserIcon;
