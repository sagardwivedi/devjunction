const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <header className="relative w-full flex flex-col justify-center items-center flex-nowrap gap-24 p-24">
        <div className="relative w-[1fr] h-auto flex flex-col justify-center items-center flex-nowrap gap-14">
          <p className="relative w-[1fr] h-auto font-nunito font-normal text-primary_c uppercase tracking-[1.5em] leading-[1.4em]">
            Monday, October 23, 2023
          </p>
          <h1 className="uppercase leading-[1.1em]">devlink</h1>
        </div>
      </header>
    </div>
  );
};

export default Home;
