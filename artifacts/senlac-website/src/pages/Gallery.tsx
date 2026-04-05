import PageHero from "@/components/PageHero";
import BookingButton from "@/components/BookingButton";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=85",
    caption: "Double Room",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=85",
    caption: "Ensuite Bathroom",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&q=85",
    caption: "Family Room",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=85",
    caption: "Breakfast Dining Room",
    span: "col-span-1 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&q=85",
    caption: "Single Room",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=85",
    caption: "Twin Room",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=85",
    caption: "Garden & Exterior",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=85",
    caption: "Guest House Exterior",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=600&q=85",
    caption: "Reception Area",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=85",
    caption: "Yoga & Relaxation Space",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=85",
    caption: "Common Lounge",
    span: "col-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    caption: "Breakfast Spread",
    span: "col-span-1",
  },
];

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="Take a tour of Senlac Guest House and our beautiful surroundings."
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  i === 0 || i === 3 ? "row-span-2" : ""
                }`}
              >
                <div className={`${i === 0 || i === 3 ? "aspect-[3/4]" : "aspect-square"} w-full`}>
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-end">
                  <p className="text-white text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-6">
              Ready to experience it for yourself?
            </p>
            <BookingButton label="Book Your Stay" size="lg" variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
