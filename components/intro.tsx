import Container from './container';

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between pt-16 pb-8 mb-8 md:mb-12 bg-gray-800 text-gray-50">
      <Container>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog.
        </h1>
      </Container>
    </section>
  );
};

export default Intro;
