// @flow

import React from "react";

const Pen = ({ size = 16, color = "currentColor" }: { size: number, color?: string }) => (
  <svg viewBox="0 0 16 16" height={size} width={size}>
    <path
      fill={color}
      d="M14.9434 2.54492L13.8301 1.43164C13.4785 1.08008 12.9805 0.875 12.5117 0.875C12.043 0.875 11.5449 1.08008 11.1934 1.43164L8.99609 3.62891L8 4.625L0.851562 11.7734L0.5 15.1133C0.441406 15.5234 0.763672 15.875 1.17383 15.875C1.20312 15.875 1.23242 15.875 1.26172 15.875L4.60156 15.5234L11.75 8.375L12.7461 7.37891L14.9434 5.18164C15.6758 4.44922 15.6758 3.27734 14.9434 2.54492ZM3.95703 14.1758L1.99414 14.3809L2.19922 12.418L8.9668 5.62109L9.875 4.71289L11.6621 6.5L10.7539 7.4082L3.95703 14.1758ZM13.9473 4.18555L12.6582 5.50391L10.8711 3.7168L12.1895 2.42773C12.3066 2.31055 12.4531 2.28125 12.5117 2.28125C12.5703 2.28125 12.7168 2.31055 12.834 2.42773L13.9473 3.54102C14.123 3.7168 14.123 4.00977 13.9473 4.18555Z"
    />
  </svg>
);

export default Pen;