export default function UpButton() {
  return (
    <span
      className="up"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img
        src="/portfolio/icons/arrow-up.svg"
        width={25}
        height={25}
        alt="up-arrow"
      ></img>
    </span>
  );
}
