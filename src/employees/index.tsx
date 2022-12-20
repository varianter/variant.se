import Image from "next/image";
import React, { CSSProperties } from "react";
import { and } from "src/utils/css";
import style from "./employees.module.css";
import { EmployeeItem } from "./types";

export const EmployeeTile: React.FC<{ employee: EmployeeItem }> = ({
  employee: { fullName, name, telephone, email, imageUrl, officeName },
}) => {
  return (
    <div
      className={style.employee}
      style={{ "--randomOffset": getRandomOffset() } as CSSProperties}
    >
      <Image
        width={300}
        height={300}
        alt={`Bilde av ${name}`}
        src={imageUrl}
        loading="lazy"
      />
      <h2 className={and(style.employee__name, "fancy")}>{fullName}</h2>
      <div className={style.employee__office}>{officeName}</div>
      {telephone ? (
        <a
          href={`tel:+47${telephone.replace(/\s*/g, "")}`}
          className={style.employee__phone}
        >
          📞 +47 {telephone}
        </a>
      ) : (
        <a href={`mailto:${email}`} className={style.employee__phone}>
          📧 {email}
        </a>
      )}
    </div>
  );
};

/**
 * Returns a random number clamped between the max and min.
 */
function getRandomOffset() {
  const max = 0.8;
  const min = 0.2;

  return Math.random() * (max - min) + min;
}
