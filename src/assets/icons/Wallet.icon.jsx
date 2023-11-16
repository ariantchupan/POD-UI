import React from "react";

const WalletIcon = ({ color, width, height }) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.24698 6.58754H20.0557V2.69139L9.24698 6.58754ZM17.1623 19.2678C17.1206 19.2678 17.0789 19.2656 17.038 19.2611C16.9679 19.2656 16.9009 19.2678 16.8361 19.2678C15.8434 19.2678 14.9429 18.8657 14.2898 18.2151L14.2853 18.2107C13.6321 17.5601 13.2285 16.6632 13.2285 15.6743C13.2285 14.6825 13.6321 13.7834 14.2853 13.1335H14.2898C14.9429 12.4829 15.8434 12.0809 16.8361 12.0809C16.9046 12.0809 16.9732 12.0831 17.0417 12.0868C17.0811 12.0831 17.1214 12.0809 17.1623 12.0809H21.6004V9.20846C21.6004 9.14614 21.5743 9.08902 21.5319 9.04674C21.4894 9.00445 21.4321 8.97849 21.3695 8.97849H21.2563H2.63125H2.62827C2.5672 8.97923 2.5106 9.00519 2.46889 9.04674C2.42644 9.08902 2.40037 9.14614 2.40037 9.20846V21.3806C2.40037 21.4429 2.42644 21.5 2.46889 21.5423C2.51134 21.5846 2.56869 21.6105 2.63125 21.6105H21.3702C21.4328 21.6105 21.4901 21.5846 21.5326 21.5423C21.5751 21.5 21.6011 21.4429 21.6011 21.3806V19.2685H17.1631L17.1623 19.2678ZM17.0402 16.8835C17.0804 16.8798 17.1214 16.8776 17.1623 16.8776H21.6004V14.4711H17.1623C17.1325 14.4711 17.1035 14.4703 17.0744 14.4681L17.07 14.4926C16.997 14.4785 16.918 14.4711 16.8361 14.4711C16.5002 14.4711 16.1979 14.6046 15.9796 14.8212L15.9819 14.8234C15.7637 15.0408 15.6281 15.342 15.6281 15.6743C15.6281 16.0089 15.7622 16.3101 15.9796 16.5274C16.1979 16.7433 16.5002 16.8776 16.8361 16.8776C16.8741 16.8776 16.9069 16.8761 16.9344 16.8739L17.0372 16.8635L17.0402 16.8835ZM22.4561 6.82196C22.7451 6.95326 23.0065 7.13502 23.2284 7.35608C23.7043 7.83012 24 8.4859 24 9.20772V21.3798C24 22.1016 23.7043 22.7574 23.2284 23.2315C22.7525 23.7055 22.0942 24 21.3695 24H2.6305C1.90585 24 1.24748 23.7055 0.771575 23.2315C0.295671 22.7574 0 22.1016 0 21.3798V9.20772C0 8.4859 0.295671 7.83012 0.771575 7.35608C1.10002 7.02893 1.51485 6.78783 1.97809 6.66914C2.01607 6.6543 2.0548 6.64169 2.09502 6.63056L20.2226 0.0956973C20.4035 0.0304154 20.5786 0 20.7469 0C21.1729 0 21.5475 0.172107 21.8417 0.44362C22.0606 0.646142 22.2342 0.913947 22.3369 1.19733C22.4129 1.40579 22.4554 1.62611 22.4554 1.83828V6.82122L22.4561 6.82196Z"
        fill={color ?? "#5C8AA7"}
      />
    </svg>
  );
};

export default WalletIcon;