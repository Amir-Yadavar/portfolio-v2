function HeroSection() {
  return (
    <section className="mt-25">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-6 p-20">
          <p className="text-3xl text-gray-600 dark:text-gray-400 py-2">Hi , I'm</p>
          <h1 className="text-7xl font-bold py-2">Amir Yadavar</h1>
          <h2 className="text-3xl py-4">Frontend Develper</h2>
          <p className="text-gray-600 dark:text-gray-400 py-2 text-2xl">
            I build exceptional digital experiences <br />
            with modern technologies and <br />a focus on performance
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 p-4 "></div>
      </div>
    </section>
  );
}

export default HeroSection;
