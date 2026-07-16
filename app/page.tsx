import BlogPreviewCard from "./components/BlogPreviewCard/BlogPreviewCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <BlogPreviewCard
          tag="Learning"
          date="2023-12-21"
          title="HTML & CSS foundations"
          description="These languages are the backbone of every website, defining structure, content, and presentation."
          name="Greg Hooper"
          avatar="/images/image-avatar.webp"
        />
      </main>
    </div>
  );
}
