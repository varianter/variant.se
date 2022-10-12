import { BaseBlob } from "@variant/components/lib/blob";
import { colors } from "@variant/profile/lib";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties } from "react";
import Arrow from "src/components/arrow";
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
          📞 {telephone}
        </a>
      ) : (
        <a href={`mailto:${email}`} className={style.employee__phone}>
          📧 {email}
        </a>
      )}
    </div>
  );
};

function JobsLink({ text }: { text: string }) {
  return (
    <div
      className={style.employee__jobsLinkContainer}
      style={{ "--randomOffset": getRandomOffset() } as CSSProperties}
    >
      <Link href="/jobs">
        <a className={style.employee__jobsLink}>
          <BaseBlob
            width={300}
            height={300}
            randomness={2}
            extraPoints={6}
            color={colors.colorPairs.secondary1.default.bg}
          />
          <p>{text}</p>
          <Arrow className={style.employee__jobsLinkArrow} />
        </a>
      </Link>
    </div>
  );
}

/**
 * Returns a random number clamped between the max and min.
 */
function getRandomOffset() {
  const max = 0.8;
  const min = 0.2;

  return Math.random() * (max - min) + min;
}

/**
 * Shuffle function taken from here: https://javascript.info/task/shuffle
 * @param array
 */
function shuffleArray(array: EmployeeItem[]) {
  const tempArray = array.slice();

  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }

  return tempArray;
}
