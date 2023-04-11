import Arrow from "@components/arrow";
import PageTitle from "@components/page-title";
import { BaseBlob } from "@variant/components/lib/blob";
import { colors } from "@variant/profile";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getStaticProps } from "pages/varianter";
import React, { CSSProperties, useEffect, useState } from "react";
import Layout from "src/layout";
import { and } from "src/utils/css";
import style from "./employees.module.css";
import { EmployeeItem } from "./types";

const getSoMeMetadata = () => {
  let description =
    "Oversikt over alle ansatte i Variant. Her finner du alle varianter og hvordan du kan ta kontakt for spørsmål.";

  return (
    <Head>
      <meta property="og:description" content={description} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default function Employees({
  employeeList,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [shuffledEmployeeList, setShuffledEmployeeList] =
    useState(employeeList);

  useEffect(() => {
    setShuffledEmployeeList(shuffleArray(employeeList));
  }, [employeeList]);

  const indexToInsertLink = Math.floor((employeeList.length / 3) * 2);

  return (
    <Layout fullWidth title="Alle varianter – Variant">
      {getSoMeMetadata()}

      <div className={style.employeesContainer}>
        <header className={style.employees__header}>
          <PageTitle title={"Alla varianter"} />
          <p className={style.employees__text}>
            Vill du jobba med oss? Eller är du intresserad av någon av våra tjänster? 
            👋 Don't be a stranger. Ta gärna kontakt med någon av oss.
          </p>
        </header>

        <div className={style.employees__layout}>
          {shuffledEmployeeList.map((employee: EmployeeItem, index: number) => {
            if (index === indexToInsertLink) {
              return (
                <React.Fragment key={`${employee.name}-${index}`}>
                  <JobsLink text="Er du kanskje en aspirerende Variant?" />
                  <EmployeeTile employee={employee} />
                </React.Fragment>
              );
            }

            return (
              <EmployeeTile
                key={`${employee.fullName}-${index}`}
                employee={employee}
              />
            );
          })}

          <JobsLink text="Se alle våre stillinger her" />
        </div>
      </div>
    </Layout>
  );
}

const blurDataUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIHSURBVHgB7dhBbtNAFAbg/40lJHa9AbbgAL0BZoNkWpTmBOQIcIIoN6AnoD1BWlCxxAZzgoZ9JZsbZFkqeR4zJF0ggei8mYkqeN8yiyS/38yb8QOUUkoppf4bhMTaD31NhIkF1+7L99xH5faH1gysCHzOhTlrmmpABskCtRf9nJhf8ybEHX6ZT2DMInWw6ECfLvr9kXmJbSUCDQXR9PlBtUIiBhE+vr86ssyfIQvjle5hXLbtt1dIRFyhbWUukUpRzJrm0SkiiQK1bV9ijKrM7/7I2hA9i11+oiVH1s6RMIznm4nfi8tlf7em8gfBgXx1mGmGPMqHD+w7RAivkB1rZOQe1pE/yyAUHIhAE+RGPIdQeIWYSuRXS6sUHMht3n3shK0hEHWwZkX0FAL3N5DwWJAEGrAbJQQEXQ5r3GPBgdxl9At2Y4BAeIUMJ7vq/8UAgeBA1zfFGXaAmb9CIDjQdFq5PUQdMiNjRCtB1rYZC+Rm0EFAFKh5WXU5q+Q66Uo6a5AfrBmrxETHEBIH8lVi8BukN1zfQNx4oq4+Lw4fv3UnU/Qc4BdEi03jkYm+yzWHT2auxyZZfq5VHzcH1QkiJBw0XrlgJmLWYE9/PpxI6UfBgcH83dCNjReb5RsveaBbfm5nGbV7IZy4efbe7Yvhdsa9dnul43E8/z4WXcyeUUoppZRS/44fYomy++H/LMkAAAAASUVORK5CYII=";

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
          href={`tel:${telephone.replace(/\s*/g, "")}`}
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

/**
 * Returns a random number clamped between the max and min.
 */
function getRandomOffset() {
  const max = 0.8;
  const min = 0.2;

  return Math.random() * (max - min) + min;
}

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
