import Image from "next/image";
import Link from 'next/link';
import styles from './BlogPreviewCard.module.css';
import { formatDate } from './BlogPreviewCard/utils';

type Year = `${number}${number}${number}${number}`;
type Month = `${number}${number}`;
type Day = `${number}${number}`;
type CustomDateString = `${Year}-${Month}-${Day}`;

type BlogPreviewCardProps = {
  tag: string;
  date: CustomDateString;
  title: string;
  text: string;
  name: string;
  avatar: string;
}

const BlogPreviewCard = ({ tag, date, title, text, name, avatar }: BlogPreviewCardProps) => {
  const dateObject = new Date(date);
  const dateFormatted = formatDate(dateObject);
  
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src={"/images/illustration-article.svg"}
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.articleTag}>{tag}</span>
          <time className={styles.articleDate} dateTime={date}>Published {dateFormatted}</time>
          <Link href="https://www.google.com/aclk?sa=L&pf=1&ai=DChsSEwjRw6e12dCVAxVccX8AHT-VJXEYACICCAEQABoCb2E&co=1&ase=2&gclid=CjwKCAjwmdLSBhANEiwAkREMN1a28RiN1fNVyS2wcGegvoXBgklZyf1vYH1mmX4IGGtZ-HJyYR46ExoC1xcQAvD_BwE&cid=CAAS9gHkaOCrSoiD_yotRGjuF-eD22qLRAQ05zxeOfJD0F4l_vlnDwX_9bFxyWxegIoha84QJjiNdfBh1Dftxvif342_xSJBvb_bjgHuXdvfS8BOP3e6tCqQq2hloAZmDQ6-VIbG7fcDzIaGLHH9ROguxRyd_qvxXdksOzJXAyd0VMYSXV6pu5jULG94Kmh5kimNARP0mJvpIuGaG5m0zrH3YL8jg1DdM2pV3XZi-ENKJWXuscoDORlar4Vu4bKAniG_OdO93WDiJYe1q6hiKivrmDj3ZZZMc-f_EXgRX23v5LHZ1krm11jO1NJTszsWdM1TaropF67Z12w&cce=2&category=acrcp_v1_32&sig=AOD64_2gqQZzgzy_HHth2zlL2x9-O-RHVA&q&nis=4&adurl=https://www.udemy.com/course/html-and-css-foundations/?utm_campaign%3DSearch_Keyword_Beta_Prof_la.EN_cc.US%26utm_source%3Dgoogle%26utm_medium%3Dpaid-search%26portfolio%3DUSA%26utm_audience%3Dmx%26utm_tactic%3Dnb%26utm_term%3D_._ag_165617438568_._ad_698471127305_._kw_learn%2520html%26utm_content%3Dg%26funnel%3D%26test%3D%26gad_source%3D1%26gad_campaignid%3D21099451329%26gbraid%3D0AAAAADROdO3lkaXjKtp3o77HKSJFrEBjF%26gclid%3DCjwKCAjwmdLSBhANEiwAkREMN1a28RiN1fNVyS2wcGegvoXBgklZyf1vYH1mmX4IGGtZ-HJyYR46ExoC1xcQAvD_BwE&ved=2ahUKEwifo6O12dCVAxX_68kDHUfCKSwQ0Qx6BAgZEAE"
            className={styles.articleTitle}
          >
            <h2>{title}</h2>
          </Link>         
          <p className={styles.articleDescription}>{text}</p>
        </div>
        <footer className={styles.author}>
          <div className={styles.avatarContainer}>
            <Image
              src={avatar}
              alt={`${name}'s avatar`}
              fill
              className={styles.avatar}
            />
          </div>
          <span className={styles.authorName}>{name}</span>
        </footer>
      </article>
    </div>
  );
};

export default BlogPreviewCard;