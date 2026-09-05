import React, { useMemo, useState } from "react";
import {
  Coffee,
  CupSoda,
  Sandwich,
  Sparkles,
  Search,
  ShoppingBag,
  Plus,
  Minus,
  X,
  QrCode,
  Printer,
  ChevronRight,
  Star,
  Leaf,
  Heart,
  ArrowUp,
  Info,
} from "lucide-react";

/* =========================================================
   MENU DATA — PRESERVED FROM YOUR ORIGINAL CODE
========================================================= */

const MENU_DATA = {
  hotBeverages: [
    {
      category: "Tea Flavours",
      items: [
        { name: "Amruttulya Tea", price: 10 },
        { name: "Vanila Tea", price: 20 },
        { name: "Butterscotch Tea", price: 20 },
        { name: "Rose Tea", price: 20 },
        { name: "Hot Chocolate Tea", price: 20 },
        { name: "Tulsi Tea", price: 20 },
        { name: "Peach Tea", price: 20 },
        { name: "Jaggery Tea", price: 20 },
        { name: "Sugar Free Tea", price: 20 },
        { name: "Badam Kesar Milk", price: 25 },
      ],
    },
    {
      category: "Water Base Tea Flavours",
      items: [
        { name: "Black Lemon Tea", price: 20 },
        { name: "Honey Lemon Tea", price: 20 },
        { name: "Lemon Ginger Tea", price: 20 },
      ],
    },
    {
      category: "Hot Coffee Flavours",
      items: [
        { name: "Coffee", price: 20 },
        { name: "Vanila Coffee", price: 20 },
        { name: "Butterscotch Coffee", price: 20 },
        { name: "Chocolate Coffee", price: 20 },
        { name: "Hazelnut Coffee", price: 25 },
        { name: "Irish Coffee", price: 25 },
      ],
    },
  ],

  coldBeverages: [
    {
      category: "Cold Coffee Flavours",
      items: [
        { name: "Regular Cold Coffee", price: 60 },
        { name: "Hazelnut Cold Coffee", price: 70 },
        { name: "Irish Cold Coffee", price: 70 },
        { name: "Caramel Cold Coffee", price: 70 },
      ],
    },
    {
      category: "Milk Shakes",
      items: [
        { name: "Oreo Shake", price: 60 },
        { name: "Strawberry Shake", price: 60 },
        { name: "Mango Shake", price: 60 },
        { name: "Butterscotch Shake", price: 60 },
        { name: "Belgium Shake", price: 60 },
        { name: "Swiss Shake", price: 60 },
        { name: "Vanilla Shake", price: 60 },
        { name: "Black Currant Shake", price: 60 },
        { name: "Badam Kesar Shake", price: 60 },
      ],
    },
    {
      category: "Juice",
      items: [
        { name: "Special Lemon Soda", price: 30 },
        { name: "Virgin Mojito", price: 60 },
        { name: "Blue Mojito", price: 60 },
      ],
    },
    {
      category: "Lassi",
      items: [
        { name: "Pista Lassi", price: 50 },
        { name: "Strawberry Lassi", price: 50 },
        { name: "Banana Lassi", price: 50 },
        { name: "Mango Lassi", price: 50 },
        { name: "Rajbhog Lassi", price: 60 },
      ],
    },
  ],

  food: [
    {
      category: "Burger",
      items: [
        {
          name: "Plain Burger",
          price: 59,
          desc: "Sesame Burger Buns + Veg Tikki Patty",
        },
        {
          name: "Classic Burger",
          price: 69,
          desc: "Sesame Burger Buns + Classic Mayo Spread + Onion Sliced + Veg",
        },
        {
          name: "Plain Cheesy Burger",
          price: 79,
          desc: "Sesame Burger Buns + Veg Tikki Patty + Cheese Slice",
        },
        {
          name: "Veg Cheesy Burger",
          price: 99,
          desc: "Sesame Burger Buns + Professional Mayo Spread + Veg Patty + Cheese Slice",
        },
      ],
    },
    {
      category: "Grilled Sandwich",
      items: [
        {
          name: "Plain Cheese Sandwich",
          price: 49,
          desc: "Bread Loaf Slice Bread + Classic Mayo Spread + Loaded With Cheese",
        },
        {
          name: "Bombay Style Cheese Sandwich",
          price: 69,
          desc: "Sandwich Bread + Mint Chutney Spread + Slice Of Onion, Potato, Tomato, Cucumber + Cheese",
        },
        {
          name: "Veg Cheesy Sandwich",
          price: 79,
          desc: "Sliced Bread + Professional Mayo Spread + Stuffed With Cucumber, Tomato, Potato, Onion + Full Of Cheese",
        },
        {
          name: "Corn Sandwich",
          price: 79,
          desc: "Sliced Bread + Professional Mayo Spread + Vegetable Chess Corn",
        },
        {
          name: "Masala Cheese Sandwich",
          price: 89,
          desc: "Sandwich Bread + Mint Chutney Spread + Potato Masala Subji + Cheese",
        },
        {
          name: "Mushroom Sandwich",
          price: 89,
          desc: "Sandwich Bread + Mushroom + Onion, Capsicum + Cheese",
        },
        {
          name: "Tandoori Paneer Tikka Cheese Sandwich",
          price: 99,
          desc: "Sliced Bread + Smokey Tandoori Sauce Spread + Stuffed With Paneer Cubes, Onion, Capsicum + Cheese",
        },
      ],
    },
  ],
};

/* =========================================================
   HELPERS
========================================================= */

const allSections = [
  ...MENU_DATA.hotBeverages,
  ...MENU_DATA.coldBeverages,
  ...MENU_DATA.food,
];

const popularItems = [
  "Badam Kesar Milk",
  "Hazelnut Cold Coffee",
  "Oreo Shake",
  "Veg Cheesy Burger",
  "Tandoori Paneer Tikka Cheese Sandwich",
];

const categoryInfo = {
  "Tea Flavours": {
    icon: "🍵",
    subtitle: "Classic & refreshing",
  },
  "Water Base Tea Flavours": {
    icon: "🍋",
    subtitle: "Light & refreshing",
  },
  "Hot Coffee Flavours": {
    icon: "☕",
    subtitle: "Rich & aromatic",
  },
  "Cold Coffee Flavours": {
    icon: "🧊",
    subtitle: "Chilled & creamy",
  },
  "Milk Shakes": {
    icon: "🥤",
    subtitle: "Thick & delicious",
  },
  Juice: {
    icon: "🍹",
    subtitle: "Fresh & refreshing",
  },
  Lassi: {
    icon: "🥛",
    subtitle: "Cool & creamy",
  },
  Burger: {
    icon: "🍔",
    subtitle: "Loaded & cheesy",
  },
  "Grilled Sandwich": {
    icon: "🥪",
    subtitle: "Crispy & cheesy",
  },
};

function getItemIcon(name) {
  const n = name.toLowerCase();

  if (n.includes("tea") || n.includes("milk")) return "🍵";
  if (n.includes("coffee")) return "☕";
  if (n.includes("shake")) return "🥤";
  if (n.includes("lassi")) return "🥛";
  if (n.includes("mojito") || n.includes("soda")) return "🍹";
  if (n.includes("burger")) return "🍔";
  if (n.includes("sandwich")) return "🥪";

  return "✨";
}

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [showOwnerPanel, setShowOwnerPanel] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState(
    "https://tea-garden-afovxyhdn-a29493671-lang.vercel.app/"
  );
  const [showTopButton, setShowTopButton] = useState(false);

  /* -----------------------------------------
     Scroll button
  ----------------------------------------- */

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -----------------------------------------
     Cart
  ----------------------------------------- */

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.name]: {
        ...item,
        quantity: (prev[item.name]?.quantity || 0) + 1,
      },
    }));
  };

  const decreaseCart = (item) => {
    setCart((prev) => {
      const current = prev[item.name];

      if (!current) return prev;

      if (current.quantity <= 1) {
        const copy = { ...prev };
        delete copy[item.name];
        return copy;
      }

      return {
        ...prev,
        [item.name]: {
          ...current,
          quantity: current.quantity - 1,
        },
      };
    });
  };

  const cartItems = Object.values(cart);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /* -----------------------------------------
     Search
  ----------------------------------------- */

  const filteredSections = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allSections
      .map((section) => {
        const categoryMatches =
          activeTab === "all" || section.category === activeTab;

        if (!categoryMatches) return null;

        const items = section.items.filter((item) => {
          if (!query) return true;

          return (
            item.name.toLowerCase().includes(query) ||
            section.category.toLowerCase().includes(query) ||
            item.desc?.toLowerCase().includes(query)
          );
        });

        if (!items.length) return null;

        return {
          ...section,
          items,
        };
      })
      .filter(Boolean);
  }, [activeTab, search]);

  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const qrCodeImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=20&data=${encodeURIComponent(
    websiteUrl
  )}`;

  return (
    <div className="min-h-screen bg-[#100a07] text-[#fff5e9] font-sans overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #100a07;
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        .font-body {
          font-family: 'DM Sans', sans-serif;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes steam {
          0% {
            opacity: 0;
            transform: translateY(10px) scaleX(.8);
          }
          50% {
            opacity: .5;
          }
          100% {
            opacity: 0;
            transform: translateY(-25px) scaleX(1.2);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -500px 0;
          }
          100% {
            background-position: 500px 0;
          }
        }

        .fade-up {
          animation: fadeUp .6s ease both;
        }

        .float {
          animation: float 4s ease-in-out infinite;
        }

        .glass {
          background: rgba(45, 27, 17, .72);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
        }

        .menu-card {
          transition:
            transform .25s ease,
            border-color .25s ease,
            background .25s ease,
            box-shadow .25s ease;
        }

        .menu-card:hover {
          transform: translateY(-5px);
          border-color: rgba(245, 158, 11, .5);
          background: rgba(65, 38, 22, .9);
          box-shadow: 0 18px 45px rgba(0,0,0,.28);
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute top-[45%] -left-40 w-[450px] h-[450px] rounded-full bg-amber-700/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-500/5 blur-[100px]" />
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-40 glass border-b border-orange-900/30 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={scrollTop}
              className="flex items-center gap-3 text-left"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-900/30">
                <Coffee className="text-[#211008]" size={23} />
              </div>

              <div>
                <div className="font-display text-xl font-bold text-orange-100">
                  Tea Garden
                </div>
                <div className="text-[10px] uppercase tracking-[.25em] text-orange-300/50">
                  Sip · Relax · Enjoy
                </div>
              </div>
            </button>

            <button
              onClick={() => setShowCart(true)}
              className="relative flex items-center justify-center w-11 h-11 rounded-full bg-orange-500 text-[#211008] hover:bg-orange-400 transition-all shadow-lg shadow-orange-900/30"
            >
              <ShoppingBag size={20} />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-orange-700 text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-orange-900/40 bg-gradient-to-br from-[#3c2517] via-[#24150d] to-[#160d09] p-7 sm:p-12 shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-orange-400/10" />
          <div className="absolute -right-4 -top-4 w-40 h-40 rounded-full border border-orange-400/10" />

          <div className="absolute right-8 top-10 text-7xl opacity-10 float">
            🍃
          </div>

          <div className="relative max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-[.18em]">
              <Sparkles size={13} />
              Welcome to Tea Garden
            </div>

            <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[.95] mt-6">
              Your perfect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-400 to-yellow-200">
                cup awaits.
              </span>
            </h1>

            <p className="mt-5 text-orange-100/60 text-base sm:text-lg max-w-xl leading-relaxed">
              Fresh tea, aromatic coffee, chilled shakes and delicious bites —
              made for your perfect break.
            </p>

            <div className="flex flex-wrap gap-3 mt-7">
              <button
                onClick={scrollToMenu}
                className="group px-6 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-[#211008] font-bold shadow-xl shadow-orange-950/30 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                Explore Menu
                <ChevronRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => setShowCart(true)}
                className="px-6 py-3.5 rounded-full border border-orange-400/20 bg-white/5 text-orange-100 font-semibold hover:bg-orange-500/10 transition-all"
              >
                View Order
              </button>
            </div>
          </div>

          {/* Cup decoration */}
          <div className="hidden sm:block absolute right-12 bottom-7">
            <div className="relative">
              <div className="text-8xl float">☕</div>

              <div className="absolute -top-8 left-8 flex gap-2 opacity-50">
                <span className="text-3xl">〰</span>
                <span className="text-2xl">〰</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="grid grid-cols-3 gap-3">
          <StatCard value="50+" label="Choices" />
          <StatCard value="₹10" label="Starting" />
          <StatCard value="100%" label="Fresh" />
        </div>
      </section>

      {/* =====================================================
          POPULAR PICKS
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <SectionHeading
          eyebrow="Customer favourites"
          title="Popular Picks"
          icon={<Star size={18} />}
        />

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
          {popularItems.map((name) => {
            const item = allSections
              .flatMap((section) => section.items)
              .find((x) => x.name === name);

            if (!item) return null;

            return (
              <button
                key={name}
                onClick={() => addToCart(item)}
                className="text-left group relative rounded-2xl p-4 bg-[#21140d] border border-orange-900/30 hover:border-orange-500/40 transition-all hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl mb-4">
                  {getItemIcon(item.name)}
                </div>

                <div className="text-sm font-bold text-orange-50 leading-tight min-h-[40px]">
                  {item.name}
                </div>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-orange-400 font-bold">
                    ₹{item.price}
                  </span>

                  <span className="w-7 h-7 rounded-full bg-orange-500 text-[#211008] flex items-center justify-center opacity-80 group-hover:opacity-100">
                    <Plus size={15} />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          MENU
      ===================================================== */}

      <main id="menu" className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <SectionHeading
          eyebrow="Something for every mood"
          title="Explore Our Menu"
          icon={<Leaf size={18} />}
        />

        {/* Search */}
        <div className="relative mt-7">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-300/40"
            size={20}
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tea, coffee, burger, shake..."
            className="w-full bg-[#21140d] border border-orange-900/40 rounded-2xl py-4 pl-12 pr-12 text-orange-50 placeholder:text-orange-200/30 outline-none focus:border-orange-500/60 focus:ring-4 focus:ring-orange-500/5 transition-all"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-300/50 hover:text-orange-200"
            >
              <X size={19} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar py-5 -mx-1 px-1">
          <CategoryPill
            active={activeTab === "all"}
            onClick={() => setActiveTab("all")}
            icon="✨"
            label="All"
          />

          {allSections.map((section) => (
            <CategoryPill
              key={section.category}
              active={activeTab === section.category}
              onClick={() => setActiveTab(section.category)}
              icon={categoryInfo[section.category]?.icon || "🍴"}
              label={section.category}
            />
          ))}
        </div>

        {/* Search result */}
        {search && (
          <div className="mb-6 text-sm text-orange-200/50">
            Showing results for{" "}
            <span className="text-orange-300 font-semibold">
              "{search}"
            </span>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {filteredSections.map((section, index) => (
            <MenuSection
              key={section.category}
              section={section}
              index={index}
              cart={cart}
              addToCart={addToCart}
              decreaseCart={decreaseCart}
            />
          ))}
        </div>

        {filteredSections.length === 0 && (
          <div className="py-20 text-center">
            <div className="text-5xl mb-5">🔎</div>
            <h3 className="font-display text-2xl font-bold">
              Nothing found
            </h3>
            <p className="text-orange-100/40 mt-2">
              Try searching for another tea, coffee or food item.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveTab("all");
              }}
              className="mt-5 px-5 py-2.5 rounded-full bg-orange-500 text-[#211008] font-bold"
            >
              Show Full Menu
            </button>
          </div>
        )}
      </main>

      {/* =====================================================
          ORDER CTA
      ===================================================== */}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-orange-600 to-amber-500 p-7 sm:p-10 text-[#211008]">
          <div className="absolute -right-10 -bottom-20 text-[180px] opacity-10">
            ☕
          </div>

          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[.15em] opacity-70">
              <ShoppingBag size={16} />
              Ready?
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2">
              Your cravings are waiting.
            </h2>

            <p className="mt-2 max-w-xl opacity-70">
              Add your favourites and send your order request to the shop.
            </p>

            <button
              onClick={() => setShowCart(true)}
              className="mt-6 px-6 py-3 rounded-full bg-[#211008] text-orange-100 font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform"
            >
              <ShoppingBag size={18} />
              {cartCount > 0
                ? `View Order · ₹${cartTotal}`
                : "Start Your Order"}
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-orange-900/30 bg-[#0d0805] mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                  <Coffee size={20} className="text-[#211008]" />
                </div>

                <div>
                  <div className="font-display text-xl font-bold">
                    Tea Garden
                  </div>

                  <div className="text-[10px] uppercase tracking-[.2em] text-orange-300/40">
                    Sip · Relax · Enjoy
                  </div>
                </div>
              </div>

              <p className="text-sm text-orange-100/35 mt-4 max-w-sm">
                Good conversations begin with a good cup of tea.
              </p>
            </div>

            <div className="sm:text-right">
              <p className="text-xs uppercase tracking-[.2em] text-orange-300/30">
                Owner
              </p>

              <button
                onClick={() => setShowOwnerPanel(true)}
                className="mt-2 text-sm text-orange-400 hover:text-orange-300 flex items-center gap-2 sm:ml-auto transition-colors"
              >
                <QrCode size={15} />
                Generate Table QR
              </button>
            </div>
          </div>

          <div className="border-t border-orange-900/20 mt-8 pt-6 text-xs text-orange-100/25 flex flex-col sm:flex-row justify-between gap-2">
            <span>© 2026 Tea Garden. All rights reserved.</span>
            <span>Scan · Browse · Order</span>
          </div>
        </div>
      </footer>

      {/* =====================================================
          FLOATING CART
      ===================================================== */}

      {cartCount > 0 && (
        <button
          onClick={() => setShowCart(true)}
          className="fixed z-30 bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md bg-gradient-to-r from-orange-500 to-amber-500 text-[#211008] rounded-2xl p-3 shadow-[0_15px_50px_rgba(0,0,0,.5)] flex items-center justify-between hover:-translate-y-1 transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#211008]/10 flex items-center justify-center">
              <ShoppingBag size={19} />
            </div>

            <div className="text-left">
              <div className="text-xs font-bold opacity-60">
                YOUR ORDER
              </div>
              <div className="font-bold">
                {cartCount} {cartCount === 1 ? "item" : "items"}
              </div>
            </div>
          </div>

          <div className="font-extrabold text-lg">
            ₹{cartTotal}
          </div>
        </button>
      )}

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      {showTopButton && (
        <button
          onClick={scrollTop}
          className="fixed right-4 bottom-5 z-20 w-11 h-11 rounded-full bg-[#2b1a10] border border-orange-500/20 text-orange-300 shadow-xl flex items-center justify-center hover:bg-orange-500 hover:text-[#211008] transition-all"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* =====================================================
          CART DRAWER
      ===================================================== */}

      {showCart && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={() => setShowCart(false)}
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
          />

          <div className="absolute right-0 top-0 bottom-0 w-full sm:max-w-md bg-[#160d09] border-l border-orange-900/40 shadow-2xl flex flex-col">
            <div className="px-5 py-5 border-b border-orange-900/30 flex justify-between items-center">
              <div>
                <div className="text-xs uppercase tracking-[.2em] text-orange-400/50">
                  Tea Garden
                </div>

                <h2 className="font-display text-2xl font-bold mt-1">
                  Your Order
                </h2>
              </div>

              <button
                onClick={() => setShowCart(false)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-orange-100/60 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-6xl mb-5">🛍️</div>

                  <h3 className="font-display text-2xl font-bold">
                    Your order is empty
                  </h3>

                  <p className="text-orange-100/40 text-sm mt-2">
                    Add something delicious from our menu.
                  </p>

                  <button
                    onClick={() => setShowCart(false)}
                    className="mt-6 px-5 py-3 rounded-full bg-orange-500 text-[#211008] font-bold"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.name}
                      className="bg-[#24150d] border border-orange-900/30 rounded-2xl p-4"
                    >
                      <div className="flex gap-3">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/10 flex items-center justify-center text-2xl">
                          {getItemIcon(item.name)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-orange-50">
                            {item.name}
                          </div>

                          <div className="text-sm text-orange-400 mt-1">
                            ₹{item.price} each
                          </div>

                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => decreaseCart(item)}
                              className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center"
                            >
                              <Minus size={14} />
                            </button>

                            <span className="w-7 text-center font-bold">
                              {item.quantity}
                            </span>

                            <button
                              onClick={() => addToCart(item)}
                              className="w-8 h-8 rounded-lg bg-orange-500 text-[#211008] flex items-center justify-center"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>

                        <div className="font-bold text-orange-300">
                          ₹{item.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-orange-900/30 p-5 bg-[#120a07]">
                <div className="flex justify-between text-orange-100/50 text-sm">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>

                <div className="flex justify-between mt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-extrabold text-xl text-orange-400">
                    ₹{cartTotal}
                  </span>
                </div>

                <button
                  onClick={() => {
                    alert(
                      "Order request ready! Connect this button to your preferred WhatsApp/Jotform ordering system."
                    );
                  }}
                  className="w-full mt-5 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-[#211008] font-extrabold flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  Send Order Request
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =====================================================
          OWNER QR PANEL
      ===================================================== */}

      {showOwnerPanel && (
        <div className="fixed inset-0 bg-black/85 z-[60] flex items-center justify-center p-4 backdrop-blur-md">
          <div className="bg-[#21140d] border border-orange-500/20 rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-orange-900/30 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
                  <QrCode className="text-orange-400" size={20} />
                </div>

                <div>
                  <h2 className="font-display text-xl font-bold">
                    Table QR Generator
                  </h2>

                  <p className="text-xs text-orange-100/35">
                    Generate a low-density menu QR
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowOwnerPanel(false)}
                className="text-orange-100/40 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-5">
              <div className="rounded-2xl bg-orange-500/5 border border-orange-900/30 p-4 mb-5">
                <div className="flex gap-3">
                  <Info className="text-orange-400 shrink-0" size={18} />

                  <p className="text-xs text-orange-100/55 leading-relaxed">
                    Use your deployed Tea Garden website URL here. The QR
                    stores only the URL, keeping it low-density and much easier
                    for customers to scan.
                  </p>
                </div>
              </div>

              <label className="block text-xs font-bold uppercase tracking-wider text-orange-300/60 mb-2">
                Live Menu URL
              </label>

              <input
                type="url"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="w-full bg-[#100a07] border border-orange-900/40 rounded-xl px-4 py-3 text-sm text-orange-50 outline-none focus:border-orange-500/60"
                placeholder="https://your-menu.vercel.app"
              />

              <div className="mt-5 bg-white rounded-2xl p-5 flex justify-center">
                {websiteUrl ? (
                  <img
                    src={qrCodeImageUrl}
                    alt="Tea Garden QR Code"
                    className="w-[230px] h-[230px]"
                  />
                ) : (
                  <div className="w-[230px] h-[230px] flex items-center justify-center text-gray-400 text-sm">
                    Enter your live URL
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 mt-5">
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = qrCodeImageUrl;
                    link.download = "TeaGarden-Menu-QR.png";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="py-3.5 rounded-xl bg-orange-500 text-[#211008] font-bold flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors"
                >
                  <Printer size={17} />
                  Download
                </button>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Tea Garden Menu",
                        text: "View the Tea Garden menu",
                        url: websiteUrl,
                      });
                    } else {
                      navigator.clipboard?.writeText(websiteUrl);
                      alert("Menu link copied!");
                    }
                  }}
                  className="py-3.5 rounded-xl border border-orange-500/20 bg-white/5 text-orange-100 font-bold hover:bg-orange-500/10 transition-colors"
                >
                  Share Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function StatCard({ value, label }) {
  return (
    <div className="bg-[#1c110b] border border-orange-900/30 rounded-2xl p-4 text-center">
      <div className="font-display text-xl sm:text-2xl font-bold text-orange-300">
        {value}
      </div>

      <div className="text-[10px] sm:text-xs uppercase tracking-[.15em] text-orange-100/30 mt-1">
        {label}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, icon }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[.22em] text-orange-400/60 font-bold">
          {icon}
          {eyebrow}
        </div>

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-orange-50 mt-2">
          {title}
        </h2>
      </div>

      <Heart
        size={20}
        className="text-orange-500/20 hidden sm:block mb-1"
      />
    </div>
  );
}

function CategoryPill({ active, onClick, icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
        active
          ? "bg-orange-500 text-[#211008] shadow-lg shadow-orange-950/20"
          : "bg-[#21140d] border border-orange-900/30 text-orange-100/60 hover:text-orange-100 hover:border-orange-500/30"
      }`}
    >
      <span>{icon}</span>
      {label}
    </button>
  );
}

function MenuSection({
  section,
  index,
  cart,
  addToCart,
  decreaseCart,
}) {
  const info = categoryInfo[section.category] || {};

  return (
    <section
      className="fade-up"
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Section title */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500/20" />

        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#21140d] border border-orange-900/30">
          <span className="text-xl">{info.icon}</span>

          <div className="text-left">
            <div className="font-display font-bold text-orange-100">
              {section.category}
            </div>

            <div className="text-[9px] uppercase tracking-[.15em] text-orange-300/35">
              {info.subtitle}
            </div>
          </div>
        </div>

        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-500/20" />
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {section.items.map((item, itemIndex) => {
          const quantity = cart[item.name]?.quantity || 0;

          return (
            <article
              key={item.name}
              className="menu-card group relative overflow-hidden bg-[#1d120c] border border-orange-900/30 rounded-2xl p-4 sm:p-5"
            >
              <div className="flex gap-4">
                {/* Visual */}
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/15 to-amber-500/5 border border-orange-500/10 flex items-center justify-center text-3xl">
                  {getItemIcon(item.name)}
                </div>

                {/* Main */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="font-bold text-[16px] sm:text-[17px] text-orange-50 leading-tight group-hover:text-orange-300 transition-colors">
                        {item.name}
                      </h3>

                      {item.desc && (
                        <p className="mt-2 text-xs sm:text-[13px] text-orange-100/40 leading-relaxed">
                          {item.desc}
                        </p>
                      )}
                    </div>

                    <div className="shrink-0 px-2.5 py-1 rounded-lg bg-orange-500/10 text-orange-400 font-extrabold text-sm">
                      ₹{item.price}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[.16em] text-orange-100/25">
                      Tea Garden
                    </span>

                    {quantity === 0 ? (
                      <button
                        onClick={() => addToCart(item)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500 text-[#211008] text-xs font-bold hover:bg-orange-400 transition-colors"
                      >
                        <Plus size={14} />
                        Add
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-orange-500/10 rounded-full p-1 border border-orange-500/10">
                        <button
                          onClick={() => decreaseCart(item)}
                          className="w-7 h-7 rounded-full bg-[#21140d] text-orange-200 flex items-center justify-center"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="text-xs font-bold min-w-[15px] text-center text-orange-300">
                          {quantity}
                        </span>

                        <button
                          onClick={() => addToCart(item)}
                          className="w-7 h-7 rounded-full bg-orange-500 text-[#211008] flex items-center justify-center"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full bg-orange-500/5 pointer-events-none" />
            </article>
          );
        })}
      </div>
    </section>
  );
}