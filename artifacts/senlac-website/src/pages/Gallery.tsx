import PageHero from "@/components/PageHero";
import BookingButton from "@/components/BookingButton";

const BASE = "https://www.senlacguesthouse.co.uk/resources/gallery/";

const galleryImages = [
  { url: `${BASE}01.jpg`, caption: "Senlac Guest House" },
  { url: `${BASE}02.jpg`, caption: "Guest Room" },
  { url: `${BASE}03.jpg`, caption: "Room Detail" },
  { url: `${BASE}04.jpg`, caption: "Accommodation" },
  { url: `${BASE}05.jpg`, caption: "Bedroom" },
  { url: `${BASE}06.jpg`, caption: "Room Interior" },
  { url: `${BASE}07.jpg`, caption: "Guest House Exterior" },
  { url: `${BASE}08.jpg`, caption: "Room" },
  { url: `${BASE}09.jpg`, caption: "Ensuite" },
  { url: `${BASE}10.jpg`, caption: "Bathroom" },
  { url: `${BASE}11.jpg`, caption: "Dining Room" },
  { url: `${BASE}12.jpg`, caption: "Breakfast" },
  { url: `${BASE}13.jpg`, caption: "Common Area" },
  { url: `${BASE}14.jpg`, caption: "Lounge" },
  { url: `${BASE}15.jpg`, caption: "Reception" },
  { url: `${BASE}16.jpg`, caption: "Garden" },
  { url: `${BASE}17.jpg`, caption: "Exterior" },
  { url: `${BASE}18.jpg`, caption: "Surroundings" },
  { url: `${BASE}19.jpg`, caption: "Local Area" },
  { url: `${BASE}20.jpg`, caption: "Hastings" },
  { url: `${BASE}21.jpg`, caption: "Nearby Attractions" },
  { url: `${BASE}22.jpg`, caption: "Sea View" },
  { url: `${BASE}23.jpg`, caption: "Old Town" },
  { url: `${BASE}24.jpg`, caption: "Bedroom View" },
  { url: `${BASE}25.jpg`, caption: "Room Amenities" },
  { url: `${BASE}26.jpg`, caption: "Family Room" },
  { url: `${BASE}27.jpg`, caption: "Twin Room" },
  { url: `${BASE}28.jpg`, caption: "Double Room" },
  { url: `${BASE}29.jpg`, caption: "Ensuite Bathroom" },
  { url: `${BASE}30.jpg`, caption: "Single Room" },
  { url: `${BASE}31.jpg`, caption: "Guest Area" },
  { url: `${BASE}32.jpg`, caption: "Senlac Guest House" },
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
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid relative overflow-hidden rounded-xl group cursor-pointer mb-3"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
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
