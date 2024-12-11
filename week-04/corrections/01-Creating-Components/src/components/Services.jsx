function Section(props) {
  console.log(props);
  return (
    <section>
      <h2>{props.section}</h2>
    </section>
  );
}

export default Section;
