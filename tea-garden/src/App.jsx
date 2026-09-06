import { useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  Plus,
  Minus,
  X,
  QrCode,
  Download,
  Share2,
  Coffee,
  IceCreamBowl,
  UtensilsCrossed,
  ChevronDown,
  Sparkles,
} from "lucide-react";

/* =========================================================
   TEA GARDEN MENU DATA
   ========================================================= */

const MENU_DATA = {
  hotBeverages: [
    {
      category: "Tea Flavours",
      items: [
        { name: "Amruttulya Tea", price: 20 },
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
   CHANGE ONLY THIS NUMBER
   =========================================================
   Example:
   Indian number 9876543210
   => 919876543210

   DO NOT use:
   +91 9876543210
   91-9876543210
   ========================================================= */

const WHATSAPP_NUMBER = "9591558729";

/* =========================================================
   MAIN APP
   ========================================================= */

export default function App() {
  const [activeSection, setActiveSection] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [ownerOpen, setOwnerOpen] = useState(false);

  // Use the shortest stable production URL for the QR.
  const [websiteUrl, setWebsiteUrl] = useState(
    "https://tea-garden-tan.vercel.app/"
  );

  /* =======================================================
     ALL MENU ITEMS
     ======================================================= */

  const allSections = useMemo(() => {
    const sections = [];

    Object.entries(MENU_DATA).forEach(([key, groups]) => {
      groups.forEach((group) => {
        sections.push({
          section: key,
          category: group.category,
          items: group.items,
        });
      });
    });

    return sections;
  }, []);

  /* =======================================================
     POPULAR ITEMS
     ======================================================= */

  const popularItems = useMemo(() => {
    return [
      { name: "Amruttulya Tea", price: 20 },
      { name: "Vanila Tea", price: 20 },
      { name: "Butterscotch Tea", price: 20 },
      { name: "Cold Coffee", price: 60 },
      { name: "Oreo Shake", price: 60 },
      { name: "Plain Burger", price: 59 },
    ];
  }, []);

  /* =======================================================
     CATEGORY INFORMATION
     ======================================================= */

  const categoryInfo = {
    all: {
      title: "Our Menu",
      subtitle: "Freshly prepared favourites for every mood.",
      icon: <Sparkles size={22} />,
    },

    hotBeverages: {
      title: "Hot Beverages",
      subtitle: "Warm tea and coffee made fresh for you.",
      icon: <Coffee size={22} />,
    },

    coldBeverages: {
      title: "Cold Beverages",
      subtitle: "Refreshing cold drinks, shakes, juices and lassi.",
      icon: <IceCreamBowl size={22} />,
    },

    food: {
      title: "Food",
      subtitle: "Delicious burgers and grilled sandwiches.",
      icon: <UtensilsCrossed size={22} />,
    },
  };

  /* =======================================================
     GET ITEM ICON
     ======================================================= */

  const getItemIcon = (itemName) => {
    const name = itemName.toLowerCase();

    if (
      name.includes("tea") ||
      name.includes("milk") ||
      name.includes("tulsi")
    ) {
      return "🍵";
    }

    if (
      name.includes("coffee") ||
      name.includes("hazelnut") ||
      name.includes("irish")
    ) {
      return "☕";
    }

    if (
      name.includes("shake") ||
      name.includes("lassi") ||
      name.includes("mojito")
    ) {
      return "🥤";
    }

    if (
      name.includes("burger") ||
      name.includes("sandwich")
    ) {
      return "🍔";
    }

    if (name.includes("lemon")) {
      return "🍋";
    }

    return "🍽️";
  };

  /* =======================================================
     ADD TO CART
     ======================================================= */

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  /* =======================================================
     DECREASE CART
     ======================================================= */

  const decreaseCart = (itemName) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.name === itemName
      );

      if (!existingItem) {
        return currentCart;
      }

      if (existingItem.quantity === 1) {
        return currentCart.filter(
          (item) => item.name !== itemName
        );
      }

      return currentCart.map((item) =>
        item.name === itemName
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      );
    });
  };

  /* =======================================================
     CART TOTAL
     ======================================================= */

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  /* =======================================================
     SEARCH + CATEGORY FILTER
     ======================================================= */

  const filteredSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return allSections
      .filter((section) => {
        if (activeSection === "all") {
          return true;
        }

        return section.section === activeSection;
      })
      .map((section) => {
        const filteredItems = section.items.filter((item) => {
          if (!query) {
            return true;
          }

          return (
            item.name.toLowerCase().includes(query) ||
            section.category.toLowerCase().includes(query) ||
            (item.desc &&
              item.desc.toLowerCase().includes(query))
          );
        });

        return {
          ...section,
          items: filteredItems,
        };
      })
      .filter((section) => section.items.length > 0);
  }, [allSections, activeSection, searchQuery]);

  /* =======================================================
     WHATSAPP ORDER
     ======================================================= */

  const sendOrderToWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (
      !WHATSAPP_NUMBER ||
      WHATSAPP_NUMBER.includes("XXXXXXXX")
    ) {
      alert(
        "Please add the Tea Garden WhatsApp number in App.jsx first."
      );
      return;
    }

    const orderItems = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} × ${item.quantity} = ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    const message = `🍵 *TEA GARDEN - NEW ORDER*

${orderItems}

━━━━━━━━━━━━━━━━
💰 *TOTAL: ₹${cartTotal}*
━━━━━━━━━━━━━━━━

Please prepare this order.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  /* =======================================================
     QR CODE
     ======================================================= */

  const qrCodeImageUrl =
    `https://api.qrserver.com/v1/create-qr-code/?size=500x500&margin=20&data=${encodeURIComponent(
      websiteUrl
    )}`;

  /* =======================================================
     DOWNLOAD QR
     ======================================================= */

  const downloadQRCode = async () => {
    try {
      const response = await fetch(qrCodeImageUrl);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "tea-garden-menu-qr.png";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("Unable to download QR code.");
    }
  };

  /* =======================================================
     SHARE QR
     ======================================================= */

  const shareQRCode = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Tea Garden Menu",
          text: "Scan to view the Tea Garden menu.",
          url: websiteUrl,
        });
      } else {
        await navigator.clipboard.writeText(websiteUrl);
        alert("Menu link copied.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* =======================================================
     RETURN UI
     ======================================================= */

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">

      {/* ===================================================
          HEADER
          =================================================== */}

      <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="flex h-16 items-center justify-between gap-4">

            {/* Logo */}
            <button
              onClick={() => {
                setActiveSection("all");
                setSearchQuery("");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-2xl">
                🍵
              </div>

              <div className="text-left">
                <h1 className="text-lg font-bold tracking-tight">
                  Tea Garden
                </h1>

                <p className="text-xs text-stone-500">
                  Tea • Coffee • Food
                </p>
              </div>
            </button>

            {/* Desktop actions */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => setOwnerOpen(true)}
                className="hidden rounded-xl border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 sm:flex sm:items-center sm:gap-2"
              >
                <QrCode size={17} />
                QR Generator
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                <ShoppingBag size={18} />
                <span className="hidden sm:inline">
                  Cart
                </span>

                {cartCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-xs font-bold text-stone-900">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================
          HERO
          =================================================== */}

      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-3 py-1.5 text-sm font-medium text-amber-900">
              <Sparkles size={15} />
              Freshly prepared
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Welcome to{" "}
              <span className="text-amber-600">
                Tea Garden
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
              Discover delicious tea, coffee, refreshing beverages,
              burgers and grilled sandwiches — all in one menu.
            </p>

            {/* Search */}
            <div className="relative mt-7 max-w-xl">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search tea, coffee, burger..."
                className="w-full rounded-2xl border border-stone-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================
          CATEGORY NAVIGATION
          =================================================== */}

      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">

          <div className="flex min-w-max gap-2">

            {Object.entries(categoryInfo).map(
              ([key, info]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    activeSection === key
                      ? "bg-stone-900 text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  {info.icon}

                  {info.title}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===================================================
          POPULAR ITEMS
          =================================================== */}

      {activeSection === "all" &&
        !searchQuery &&
        popularItems.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">

            <div className="mb-5">
              <h3 className="text-2xl font-bold">
                Popular Favourites
              </h3>

              <p className="mt-1 text-sm text-stone-500">
                Customer favourites at Tea Garden
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {popularItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-2xl">
                      {getItemIcon(item.name)}
                    </div>

                    <div>
                      <h4 className="font-semibold">
                        {item.name}
                      </h4>

                      <p className="text-sm font-medium text-amber-600">
                        ₹{item.price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white transition hover:bg-stone-700"
                    aria-label={`Add ${item.name}`}
                  >
                    <Plus size={19} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

      {/* ===================================================
          MENU
          =================================================== */}

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {filteredSections.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center">

            <div className="text-5xl">
              🔎
            </div>

            <h3 className="mt-4 text-xl font-bold">
              No items found
            </h3>

            <p className="mt-2 text-sm text-stone-500">
              Try searching for something else.
            </p>
          </div>
        ) : (
          <div className="space-y-12">

            {filteredSections.map((section) => (
              <section key={`${section.section}-${section.category}`}>

                <div className="mb-5 flex items-end justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {section.category}
                    </h3>

                    <p className="mt-1 text-sm text-stone-500">
                      Choose your favourite
                    </p>
                  </div>

                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500">
                    {section.items.length} items
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">

                  {section.items.map((item) => {

                    const cartItem = cart.find(
                      (cartProduct) =>
                        cartProduct.name === item.name
                    );

                    return (
                      <article
                        key={item.name}
                        className="group rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                      >

                        <div className="flex gap-4">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-2xl">
                            {getItemIcon(item.name)}
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-start justify-between gap-3">

                              <div>
                                <h4 className="font-bold text-stone-900">
                                  {item.name}
                                </h4>

                                {item.desc && (
                                  <p className="mt-1 text-sm leading-5 text-stone-500">
                                    {item.desc}
                                  </p>
                                )}
                              </div>

                              <span className="shrink-0 font-bold text-amber-600">
                                ₹{item.price}
                              </span>
                            </div>

                            <div className="mt-4">

                              {!cartItem ? (
                                <button
                                  onClick={() =>
                                    addToCart(item)
                                  }
                                  className="flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
                                >
                                  <Plus size={16} />
                                  Add
                                </button>
                              ) : (
                                <div className="flex w-fit items-center gap-3 rounded-xl bg-stone-100 p-1">

                                  <button
                                    onClick={() =>
                                      decreaseCart(item.name)
                                    }
                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-stone-700 shadow-sm"
                                  >
                                    <Minus size={15} />
                                  </button>

                                  <span className="min-w-5 text-center text-sm font-bold">
                                    {cartItem.quantity}
                                  </span>

                                  <button
                                    onClick={() =>
                                      addToCart(item)
                                    }
                                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-white"
                                  >
                                    <Plus size={15} />
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* ===================================================
          FLOATING CART BUTTON
          =================================================== */}

      {cartCount > 0 && !cartOpen && (
        <button
          onClick={() => setCartOpen(true)}
          className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-stone-900 px-5 py-3.5 text-white shadow-2xl transition hover:bg-stone-800"
        >
          <ShoppingBag size={20} />

          <span className="font-semibold">
            View Cart
          </span>

          <span className="rounded-full bg-amber-400 px-2 py-0.5 text-sm font-bold text-stone-900">
            ₹{cartTotal}
          </span>
        </button>
      )}

      {/* ===================================================
          CART OVERLAY
          =================================================== */}

      {cartOpen && (
        <div className="fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setCartOpen(false)}
          />

          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">

            {/* Cart Header */}
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">

              <div>
                <h2 className="text-xl font-bold">
                  Your Cart
                </h2>

                <p className="text-sm text-stone-500">
                  {cartCount} item
                  {cartCount !== 1 ? "s" : ""}
                </p>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-100 text-stone-600 hover:bg-stone-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-5 py-5">

              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">

                  <div className="text-6xl">
                    🛒
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-sm text-stone-500">
                    Add something delicious from the menu.
                  </p>

                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-5 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">

                  {cart.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-stone-200 p-4"
                    >

                      <div className="flex items-start justify-between gap-3">

                        <div className="flex gap-3">

                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-xl">
                            {getItemIcon(item.name)}
                          </div>

                          <div>
                            <h4 className="font-semibold">
                              {item.name}
                            </h4>

                            <p className="mt-1 text-sm text-stone-500">
                              ₹{item.price} each
                            </p>
                          </div>
                        </div>

                        <p className="font-bold text-amber-600">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between">

                        <div className="flex items-center gap-2 rounded-xl bg-stone-100 p-1">

                          <button
                            onClick={() =>
                              decreaseCart(item.name)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="w-6 text-center text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              addToCart(item)
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-900 text-white"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <button
                          onClick={() => {
                            setCart((currentCart) =>
                              currentCart.filter(
                                (cartItem) =>
                                  cartItem.name !== item.name
                              )
                            );
                          }}
                          className="text-xs font-medium text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="border-t border-stone-200 bg-white p-5">

                <div className="mb-4 flex items-center justify-between">

                  <span className="text-base font-medium text-stone-600">
                    Total
                  </span>

                  <span className="text-2xl font-black">
                    ₹{cartTotal}
                  </span>
                </div>

                {/* WHATSAPP ORDER BUTTON */}
                <button
                  onClick={sendOrderToWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3.5 font-bold text-white shadow-sm transition hover:bg-green-700 active:scale-[0.99]"
                >
                  <ShoppingBag size={19} />
                  Send Order Request
                </button>

                <p className="mt-3 text-center text-xs text-stone-400">
                  Your order will open in WhatsApp.
                </p>
              </div>
            )}
          </aside>
        </div>
      )}

      {/* ===================================================
          OWNER QR GENERATOR
          =================================================== */}

      {ownerOpen && (
        <div className="fixed inset-0 z-[60]">

          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOwnerOpen(false)}
          />

          <div className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-200 px-5 py-4">

              <div>
                <h2 className="font-bold">
                  Table QR Generator
                </h2>

                <p className="text-xs text-stone-500">
                  Generate a low-density menu QR
                </p>
              </div>

              <button
                onClick={() => setOwnerOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-100"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto p-5">

              {/* URL */}
              <label className="text-sm font-semibold text-stone-700">
                Menu Website URL
              </label>

              <input
                type="url"
                value={websiteUrl}
                onChange={(event) =>
                  setWebsiteUrl(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-stone-200 px-4 py-3 text-sm outline-none focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
              />

              {/* QR */}
              <div className="mt-5 flex justify-center">

                <div className="rounded-3xl border border-stone-200 bg-white p-4 shadow-sm">

                  <img
                    src={qrCodeImageUrl}
                    alt="Tea Garden Menu QR Code"
                    className="h-64 w-64"
                  />

                </div>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-stone-500">
                This QR contains only the menu website URL,
                keeping the QR simple and easy to scan.
              </p>

              {/* Actions */}
              <div className="mt-5 grid grid-cols-2 gap-3">

                <button
                  onClick={downloadQRCode}
                  className="flex items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-3 text-sm font-semibold text-white hover:bg-stone-800"
                >
                  <Download size={17} />
                  Download
                </button>

                <button
                  onClick={shareQRCode}
                  className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-stone-100"
                >
                  <Share2 size={17} />
                  Share
                </button>
              </div>

              {/* QR URL */}
              <div className="mt-4 rounded-xl bg-stone-50 p-3">

                <p className="break-all text-xs text-stone-500">
                  {websiteUrl}
                </p>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================
          FOOTER
          =================================================== */}

      <footer className="border-t border-stone-200 bg-white">

        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">

          <div className="text-2xl">
            🍵
          </div>

          <h3 className="mt-2 font-bold">
            Tea Garden
          </h3>

          <p className="mt-1 text-sm text-stone-500">
            Fresh tea, coffee, beverages and food.
          </p>

          <p className="mt-4 text-xs text-stone-400">
            © {new Date().getFullYear()} Tea Garden. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}