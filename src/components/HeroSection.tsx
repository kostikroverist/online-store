import people from '../images/people.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between ">
      <div className="text-center lg:text-left max-w-lg">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black">
          FIND CLOTHES <br className="hidden lg:block" /> THAT MATCHES <br className="hidden lg:block" /> YOUR STYLE
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-900 transition">
          Shop Now
        </button>
        <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
          <div className="text-center lg:text-left border-r-1 pr-2">
            <h4 className="text-3xl font-bold text-black">200+</h4>
            <p className="text-gray-600">International Brands</p>
          </div>
          <div className="text-center lg:text-left  border-r-1 pr-2">
            <h4 className="text-3xl font-bold text-black">2,000+</h4>
            <p className="text-gray-600">High-Quality Products</p>
          </div>
          <div className="text-center lg:text-left">
            <h4 className="text-3xl font-bold text-black">30,000+</h4>
            <p className="text-gray-600">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 max-w-xl">
        <img src={people} alt="People in stylish clothes" className="w-full" />
      </div>
    </section>
  );
};

export default HeroSection;
