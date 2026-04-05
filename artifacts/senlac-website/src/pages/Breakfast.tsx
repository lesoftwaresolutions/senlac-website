import PageHero from "@/components/PageHero";
import BookingButton from "@/components/BookingButton";

const menuSections = [
  {
    title: "To Start",
    items: [
      "Selection of Cereals & Muesli",
      "Fresh Fruit Salad",
      "Yogurts & Fruit Juices",
      "Porridge with Honey or Jam",
    ],
  },
  {
    title: "Full English",
    items: [
      "Grilled Bacon",
      "Cumberland Sausage",
      "Free-Range Egg (Fried, Scrambled, or Poached)",
      "Grilled Tomato",
      "Mushrooms",
      "Baked Beans",
      "Hash Brown",
    ],
  },
  {
    title: "Lighter Options",
    items: [
      "Scrambled Eggs on Toast with Smoked Salmon",
      "Boiled Eggs with Soldiers",
      "Beans on Toast",
      "Toast & Preserves (White, Brown, or Gluten-Free)",
    ],
  },
  {
    title: "Unlimited Beverages",
    items: [
      "Freshly Brewed Coffee",
      "English Breakfast Tea",
      "Earl Grey",
      "Herbal Teas",
      "Hot Chocolate",
    ],
  },
];

const vegetarianVegan = [
  {
    title: "Vegetarian English",
    items: [
      "Vegetarian Sausage",
      "Egg (any style)",
      "Grilled Tomato",
      "Mushrooms",
      "Baked Beans",
      "Hash Brown",
    ],
  },
  {
    title: "Vegan Breakfast",
    items: [
      "Vegan Sausage",
      "Grilled Tomato",
      "Mushrooms",
      "Baked Beans",
      "Hash Brown",
      "Avocado",
    ],
  },
];

export default function Breakfast() {
  return (
    <>
      <PageHero
        title="Our Breakfast"
        subtitle="The perfect start to your day in Hastings"
      />

      {/* Breakfast info banner */}
      <section className="bg-primary/10 border-y border-primary/20 py-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-foreground font-medium mb-1">
            Served daily from <strong>8:00 AM to 9:30 AM</strong> in our sunny dining room.
          </p>
          <p className="text-muted-foreground text-sm mb-3">
            We source local ingredients wherever possible.
          </p>
          <span className="inline-block text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground px-4 py-1.5 rounded-full">
            Vegetarian, Vegan & Gluten-Free Options Available
          </span>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Main menu grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {menuSections.map((section) => (
              <div key={section.title} className="bg-card border border-border rounded-xl p-7">
                <h3 className="font-serif text-lg font-bold text-primary mb-5 pb-3 border-b border-border">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Vegetarian & Vegan */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Dietary Options</p>
              <h2 className="font-serif text-2xl font-bold text-primary">Vegetarian & Vegan</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {vegetarianVegan.map((option) => (
                <div key={option.title} className="bg-secondary/40 border border-border rounded-xl p-7">
                  <h3 className="font-serif text-lg font-semibold text-primary mb-5 pb-3 border-b border-border/60">
                    {option.title}
                  </h3>
                  <ul className="space-y-2">
                    {option.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                        <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Breakfast image */}
          <div className="relative rounded-xl overflow-hidden aspect-[16/6] mb-12">
            <img
              src="https://www.senlacguesthouse.co.uk/resources/gallery/11.jpg"
              alt="Full English breakfast at Senlac Guest House"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
              <div className="text-center text-white">
                <p className="font-serif text-3xl font-bold mb-2">Breakfast Included</p>
                <p className="text-white/80 text-sm">With every room booking</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-5">
              Ready to enjoy our famous breakfast? Book your stay today.
            </p>
            <BookingButton label="Book Your Stay" size="lg" variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
