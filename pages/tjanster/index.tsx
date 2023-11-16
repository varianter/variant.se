import Layout from 'src/layout';
import Tjenesteomrader from 'src/tjenesteomrader';
import style from 'src/tjenesteomrader/tjenesteomrader.module.css';
import PageTitle from '@components/page-title';
import { ContactForm } from '../../src/contact-form';
import React from 'react';
import { getContactsByEmails } from '../../src/employees/utils/getEmployeesList';
import { InferGetStaticPropsType, NextPage } from 'next';

const Tjenesteomrade: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ employees }) => {
  return (
    <Layout>
      <div className={style.wrapper}>
        <PageTitle title="Våra tjänster" />
        <Tjenesteomrader showHeading={false} />
        <ContactForm employees={employees} />
      </div>
    </Layout>
  );
};

export default Tjenesteomrade;

export const getStaticProps = async () => {
  try {
    const employees = await getContactsByEmails([
      'david.dinka@variant.se',
      'sara.hernandez@variant.se',
    ]);

    return {
      props: { employees },
      revalidate: 60 * 60,
    };
  } catch (e) {
    console.error(e);
    return {
      props: { employees: [] },
      revalidate: 60 * 60,
    };
  }
};
