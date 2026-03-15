import { Heart, Award, Users, Leaf, PawPrint } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-linear-to-b from-orange-50 via-white to-yellow-50">

      {/* HERO */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full font-semibold mb-6">
            <PawPrint className="w-4 h-4" />
            Made For Pet Lovers
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
            About <span className="text-orange-500">PawMart</span> 🐾
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            We believe every pet deserves the best.
            PawMart was founded with one simple mission:
            <strong className="text-gray-800"> Healthy Pets, Happy Owners.</strong>
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              icon: Heart,
              title: "Made with Love",
              desc: "Every product is carefully selected by pet lovers for pet lovers.",
              color: "bg-pink-100 text-pink-500",
            },
            {
              icon: Award,
              title: "Vet Approved",
              desc: "Food & health products recommended by professionals.",
              color: "bg-blue-100 text-blue-500",
            },
            {
              icon: Users,
              title: "50K+ Happy Owners",
              desc: "Trusted by thousands of pet parents across the country.",
              color: "bg-green-100 text-green-500",
            },
            {
              icon: Leaf,
              title: "Eco Friendly",
              desc: "We prioritize sustainable & safe products.",
              color: "bg-yellow-100 text-yellow-600",
            },
          ].map((v) => (
            <div
              key={v.title}
              className="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 flex items-center justify-center mx-auto rounded-full mb-4 ${v.color}`}>
                <v.icon className="w-6 h-6" />
              </div>

              <h3 className="font-bold text-lg text-gray-800 mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="bg-orange-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-gray-800">
              Our Story 🐶🐱
            </h2>

            <p className="text-gray-600 leading-relaxed">
              PawMart started in 2020 when our founders — lifelong animal lovers —
              couldn't find a one-stop shop for quality pet products.
              So we built one.
              <br /><br />
              Today, we deliver trusted nutrition, toys, and care essentials to
              make pets healthier, happier, and full of life — just like family.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h3 className="text-2xl font-extrabold text-gray-800 mb-4">
          Join Thousands of Happy Pet Parents ❤️
        </h3>
        <p className="text-gray-600 mb-6">
          Discover products your pets will love — delivered right to your doorstep.
        </p>

        <a
          href="/shop"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-orange-600 transition"
        >
          Explore Shop →
        </a>
      </section>

    </main>
  );
}