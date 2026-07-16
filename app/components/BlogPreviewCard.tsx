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

    </div>
  );
};

export default BlogPreviewCard;