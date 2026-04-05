interface BookingButtonProps {
  label?: string;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const BOOKING_URL = "https://via.eviivo.com/SenlacTN34";

export default function BookingButton({
  label = "Book Now",
  className = "",
  variant = "primary",
  size = "md",
}: BookingButtonProps) {
  const base = "inline-block font-semibold rounded transition-all duration-200 text-center cursor-pointer";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-accent hover:shadow-md",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "text-primary underline underline-offset-4 hover:text-accent",
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
