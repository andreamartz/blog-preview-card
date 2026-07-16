import Image from "next/image";
import styles from './BlogPreviewCard.module.css';

type BlogPreviewCardProps = {
  tag: string;
  date: string;
  title: string;
  text: string;
  name: string;
  avatar: string;
}

const BlogPreviewCard = ({ tag, date, title, text, name, avatar }: BlogPreviewCardProps) => {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <section className={styles.imageContainer}>
          <Image
            src={"/images/illustration-article.svg"}
            alt="decorative illustration with some coding symbols"
            fill
            className={styles.image}
          />
        </section>
        <section className={styles.content}>
        </section>
        <figure className={styles.author}>
        </figure>
      </article>
    </div>
  );
};

export default BlogPreviewCard;