function Destructuring(props) {
  const { tittel, tekst } = props;

  return (
    <article>
      <h1>{tittel}</h1>
      <p>{tekst}</p>
    </article>
  );
}

function Card(props);{
const { title, text } = props;

return (
  <article>
    <h1>{props.title}</h1>
    <p>{props.text}</p>
  </article>
);
}
