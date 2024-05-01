const ParagraphsWP = ({ longText }) => {
  const paragraphs = longText?.split('\r\n\r\n') ?? [];
  return (
    <>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  );
};

export default ParagraphsWP;
