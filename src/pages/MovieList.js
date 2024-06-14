import { Card } from "../components";

export const MovieList = () => {
  return (
    <main >
      <section className="max-w-7xl  ml-20 mr-20 py-7 ">
        <div className="flex justify-start flex-wrap ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
};
