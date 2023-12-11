import { Heading1 } from '@components/heading';
import PageHeader from '@components/page-header';
import { ColorPair } from '@variant/profile/lib/colors';
import style from './headerBackground.module.css';
import Link from 'next/link';

type HeaderBackgroundProps = {
  headerText: string;
  colorPair: ColorPair;
  whiteMode?: boolean;
  onVisibleChange?(visible: boolean): void;
  breadcrumbsType?: string | null;
};

const HeaderBackground = ({
  headerText,
  colorPair,
  whiteMode = true,
  onVisibleChange,
  breadcrumbsType = null,
}: HeaderBackgroundProps) => {
  const SVG = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1024"
      height="484"
      viewBox="0 0 1024 484"
      fill="none"
    >
      <path
        d="M341.333 472.232C204.707 495.623 127.382 472.232 0 484V0H1024V436.93C907.891 445.373 852.097 451.245 682.667 436.93C513.237 422.614 477.96 448.842 341.333 472.232Z"
        fill="${colorPair.bg}"
      />
    </svg>`;
  const encodedString = Buffer.from(SVG).toString('base64');

  return (
    <div className={style.header}>
      <div
        className={style.header__menu}
        style={{ backgroundColor: colorPair.bg }}
      >
        <div className={style['header__service-area-width']}>
          <PageHeader whiteMode={whiteMode} onVisibleChange={onVisibleChange} />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,${encodedString}")`,
        }}
        className={style.header__text}
      >
        <div className={style['header__hero-max-width']}>
          <nav
            className={style['header__breadcrumbs']}
            aria-label="breadcrumb"
            role="navigation"
          >
            <ul>
              <Link href="/tjanster">
                <a
                  className={style['header__breadcrumbs-first-part']}
                  style={{ color: colorPair.text }}
                  aria-level={1}
                >
                  Tjänsteområden
                </a>
              </Link>
              {breadcrumbsType && (
                <Link href={`/tjanster/${breadcrumbsType.toLowerCase()}`}>
                  <a style={{ color: colorPair.text }} aria-level={1}>
                    {breadcrumbsType}
                  </a>
                </Link>
              )}
            </ul>
          </nav>
          <Heading1
            style={{ color: colorPair.text }}
            styleLevel="2"
            className={style.header__heading}
          >
            {headerText}
          </Heading1>
        </div>
      </div>
    </div>
  );
};

export default HeaderBackground;
