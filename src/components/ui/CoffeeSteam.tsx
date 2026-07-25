export default function CoffeeSteam() {
  return (
    <div className="relative flex flex-col items-center justify-center w-24 h-24 mx-auto">
      {/* Steam lines */}
      <svg
        className="absolute -top-4 w-12 h-16 text-brand-coffee"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      >
        <path className="steam-path-1" d="M30,80 C35,60 20,40 30,20" />
        <path className="steam-path-2" d="M50,80 C55,60 40,40 50,20" />
        <path className="steam-path-3" d="M70,80 C75,60 60,40 70,20" />
      </svg>
      {/* Coffee Cup */}
      <div className="w-16 h-12 bg-brand-coffee rounded-b-2xl border-t-2 border-brand-chocolate relative shadow-md">
        {/* Handle */}
        <div className="absolute -right-3 top-2 w-4 h-6 border-4 border-l-0 border-brand-coffee rounded-r-lg" />
      </div>
    </div>
  );
}
