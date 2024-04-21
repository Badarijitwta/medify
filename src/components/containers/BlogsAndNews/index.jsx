import "./style.css";
const BlogCard = ({ image, doctorImage, doctorName }) => {
  return (
    <div className="blog-card-main">
      <img src={image} alt="BlogImage" id="blog-card-main-image" />
      <div className="blog-card-text">
        <div className="blog-card-text-top-line">
          Medical |{" "}
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <p id="blog-card-para">
          6 Tips To Protect Your Mental Health When You{`'`}re Sick
        </p>
        <div className="blog-card-text-bottom">
          <img src={doctorImage} alt="" id="blog-card-doctor-image" />
          <h4 id="blog-card-doctor-name">{doctorName}</h4>
        </div>
      </div>
    </div>
  );
};

export default function BlogsAndNews() {
  const blogCards = [];
  for (let i = 1; i <= 3; i++) {
    blogCards.push(
      <BlogCard
        key={i}
        image={"blog-image.png"}
        doctorImage={"blog-bottom-image.png"}
        doctorName={"Rebecca Lee"}
      />
    );
  }

  return (
    <div className="blogs-main">
      <div className="blogs-wrapper">
        <h5 id="blogs-heading">Blogs & News</h5>
        <h3 id="blogs-subheading">Read Our Latest News</h3>
        <div className="blogs-cards-wrapper">{blogCards}</div>
      </div>
    </div>
  );
}
