import { useState } from "react";
import BookingButton from "./BookingButton";
import { Wifi, Tv, Coffee, Wind, ShowerHead, Columns2, Images, View, Video, X, ChevronLeft, ChevronRight, Wine, Shirt, Sparkles, Droplets, GlassWater } from "lucide-react";

interface RoomCardProps {
  type: string;
  maxGuests: number;
  name: string;
  description: string;
  amenities: { label: string }[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
  roomPhotos?: string[];
  view360Url?: string;
  roomTourUrl?: string;
}

const amenityIconMap: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={14} />,
  "TV with Freeview": <Tv size={14} />,
  "Smart TV": <Tv size={14} />,
  "Tea/Coffee Tray": <Coffee size={14} />,
  "Hairdryer": <Wind size={14} />,
  "Ensuite Shower": <ShowerHead size={14} />,
  "Shower/Toilet Facilities": <ShowerHead size={14} />,
  "Ironing Board": <Columns2 size={14} />,
  "Iron/Ironing Board": <Columns2 size={14} />,
  "Mini Fridge": <GlassWater size={14} />,
  "Mini Fridge/Wine Cooler": <Wine size={14} />,
  "Wardrobe": <Shirt size={14} />,
  "Dressing Table": <Sparkles size={14} />,
  "Free Toiletries": <Droplets size={14} />,
};

type ModalType = "photos" | "360" | "tour" | null;

function getYouTubeEmbedUrl(url: string) {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
  const match2 = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (match2) return `https://www.youtube.com/embed/${match2[1]}?autoplay=1&rel=0`;
  return url;
}

export default function RoomCard({
  type,
  maxGuests,
  name,
  description,
  amenities,
  imageUrl,
  imageAlt,
  reverse = false,
  roomPhotos,
  view360Url,
  roomTourUrl,
}: RoomCardProps) {
  const [modal, setModal] = useState<ModalType>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openModal = (type: ModalType) => {
    setPhotoIndex(0);
    setModal(type);
  };
  const closeModal = () => setModal(null);

  const prevPhoto = () => setPhotoIndex((i) => (i - 1 + (roomPhotos?.length ?? 1)) % (roomPhotos?.length ?? 1));
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % (roomPhotos?.length ?? 1));

  const hasExtras = roomPhotos || view360Url || roomTourUrl;

  return (
    <>
      <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} bg-card rounded-xl overflow-hidden shadow-sm border border-border`}>
        {/* Image */}
        <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        {/* Content */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                {type}
              </span>
              <span className="text-xs text-muted-foreground">Max {maxGuests} Guest{maxGuests > 1 ? "s" : ""}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-3">{name}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>

            <div className="mt-5 grid grid-cols-2 gap-2">
              {amenities.map((a) => (
                <div key={a.label} className="flex items-center gap-2 text-xs text-foreground/70">
                  <span className="text-primary/70">{amenityIconMap[a.label] ?? <Wifi size={14} />}</span>
                  {a.label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Extra buttons row */}
            {hasExtras && (
              <div className="flex flex-wrap gap-2">
                {roomPhotos && (
                  <button
                    onClick={() => openModal("photos")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    <Images size={13} />
                    Room Pictures
                  </button>
                )}
                {view360Url && (
                  <button
                    onClick={() => openModal("360")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    <View size={13} />
                    360 View
                  </button>
                )}
                {roomTourUrl && (
                  <button
                    onClick={() => openModal("tour")}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors"
                  >
                    <Video size={13} />
                    Room Tour
                  </button>
                )}
              </div>
            )}
            <div>
              <BookingButton label="Book This Room" variant="primary" size="md" />
            </div>
          </div>
        </div>
      </div>

      {/* ── MODAL OVERLAY ── */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{ maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border shrink-0">
              <h4 className="font-serif text-base font-bold text-primary truncate pr-4">
                {modal === "photos" ? `${name} — Room Pictures` : modal === "360" ? `${name} — 360° View` : `${name} — Room Tour`}
              </h4>
              <button
                onClick={closeModal}
                className="shrink-0 p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            {modal === "photos" && roomPhotos && (
              <div className="flex flex-col min-h-0">
                {/* Main photo — fixed height, adapts to any orientation */}
                <div
                  className="relative bg-black flex items-center justify-center"
                  style={{ height: "clamp(260px, 55vh, 520px)" }}
                >
                  <img
                    key={photoIndex}
                    src={roomPhotos[photoIndex]}
                    alt={`${name} photo ${photoIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                  {roomPhotos.length > 1 && (
                    <>
                      <button
                        onClick={prevPhoto}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        onClick={nextPhoto}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}
                  <span className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-2.5 py-1 rounded-full">
                    {photoIndex + 1} / {roomPhotos.length}
                  </span>
                </div>

                {/* Thumbnail strip — portrait thumbnails preserve shape */}
                <div className="flex gap-2 px-3 py-2.5 overflow-x-auto bg-muted/30 shrink-0">
                  {roomPhotos.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIndex(i)}
                      className={`shrink-0 rounded overflow-hidden border-2 transition-all bg-black ${
                        i === photoIndex ? "border-primary" : "border-transparent opacity-55 hover:opacity-90"
                      }`}
                      style={{ width: 56, height: 56 }}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {(modal === "360" || modal === "tour") && (
              <div className="aspect-[9/16] sm:aspect-video w-full bg-black shrink-0">
                <iframe
                  src={getYouTubeEmbedUrl(modal === "360" ? view360Url! : roomTourUrl!)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={modal === "360" ? "360 View" : "Room Tour"}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
