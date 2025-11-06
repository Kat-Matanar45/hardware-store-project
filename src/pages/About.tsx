import type { ReactElement } from "react";

const About = (): ReactElement => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      {/* Заголовки */}
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        About Our E-commerce Platform
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Our Vision</h2>
        <h3 className="text-xl font-medium mb-2 text-gray-700">How We Started</h3>
        <h4 className="text-lg font-semibold mb-1 text-gray-600">Key Milestones</h4>
        <h5 className="text-base font-semibold text-gray-500">Smaller Heading Example</h5>
        <h6 className="text-sm text-gray-400 mb-4">Even Smaller Heading Example</h6>

        {/* Абзацы */}
        <p className="mb-4">
          Welcome to our e-commerce platform! We are dedicated to providing the best online shopping
          experience. With a wide range of products, competitive pricing, and exceptional customer
          service, we strive to make your shopping journey as seamless as possible.
        </p>
        <p>
          Our mission is to connect customers with products they love, from trusted sellers around the
          world. Whether you're looking for the latest gadgets, fashion, or home essentials, we've got
          you covered.
        </p>
      </section>

      {/* Списки */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 text-gray-900">Why Choose Us?</h2>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>Wide variety of products</li>
          <li>Competitive prices</li>
          <li>Fast and reliable shipping</li>
          <li>Excellent customer support</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-800">Our Key Features:</h3>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>User-friendly interface</li>
          <li>Secure payment options</li>
          <li>Real-time order tracking</li>
        </ol>
      </section>

      {/* Блок цитат */}
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-10">
        “E-commerce is not the cherry on the cake, it's the new cake.” — Jean-Paul Ago
      </blockquote>

      {/* Кодовые блоки */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Example Code Block</h3>
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
          <code>
{`function Shop() {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <p>Find your favorite products here.</p>
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      {/* Ссылки */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">Learn More</h3>
        <p>
          Check out our{" "}
          <a
            href="https://www.example.com"
            className="text-blue-600 hover:underline font-medium"
          >
            official website
          </a>{" "}
          for more information about our services.
        </p>
      </section>

      {/* Изображения */}
      <section className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Happy Customers</h3>
        <img
          src="https://dummyimage.com/400x200/"
          alt="Happy customers"
          className="rounded-lg shadow-md mx-auto mb-4"
        />
        <p className="text-gray-700">
          Join thousands of happy customers who trust us with their shopping needs.
        </p>
      </section>
    </div>
  );
};

export default About;
