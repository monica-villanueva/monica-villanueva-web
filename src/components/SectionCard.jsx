import PlaceholderSvg from './PlaceholderSvg';

export default function SectionCard({ title, text, variant, color }) {
  return (
    <article className="card">
      <div className="card__image">
        <PlaceholderSvg variant={variant} color={color} />
      </div>
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
    </article>
  );
}
