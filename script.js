      const productsData = [
        {
          id: 1,
          name: "Everyday Comfort Bra",
          cat: "Women's innerwear",
          price: 1299,
          img: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&w=700&q=80",
          desc: "Soft everyday comfort · Sample product",
        },
        {
          id: 2,
          name: "Classic Brief Set",
          cat: "Women's innerwear",
          price: 899,
          img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=80",
          desc: "Easy everyday essentials · Sample product",
        },
        {
          id: 3,
          name: "Everyday Kurti",
          cat: "Ladies clothing",
          price: 2499,
          img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=700&q=80",
          desc: "A versatile wardrobe pick · Sample product",
        },
        {
          id: 4,
          name: "Printed Summer Outfit",
          cat: "Ladies clothing",
          price: 3199,
          img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
          desc: "A fresh seasonal look · Sample product",
        },
        {
          id: 5,
          name: "Daily Glow Lip Colour",
          cat: "Cosmetics",
          price: 799,
          img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
          desc: "A pop of colour · Sample product",
        },
        {
          id: 6,
          name: "Beauty Essentials Kit",
          cat: "Beauty products",
          price: 1799,
          img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
          desc: "Your daily beauty routine · Sample product",
        },
        {
          id: 7,
          name: "Skin Care Favourites",
          cat: "Beauty products",
          price: 1499,
          img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
          desc: "Simple self-care essentials · Sample product",
        },
        {
          id: 8,
          name: "Everyday Accessory Set",
          cat: "Other ladies items",
          price: 999,
          img: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80",
          desc: "Little details, lovely finishing touch · Sample product",
        },
      ];
      const cats = [
        "All products",
        "Women's innerwear",
        "Ladies clothing",
        "Cosmetics",
        "Beauty products",
        "Other ladies items",
      ];
      function renderSharedChrome() {
        const page = document.body.dataset.page;
        const header = document.querySelector("header.nav");
        const footer = document.querySelector("footer.footer");
        if (header) {
          header.outerHTML = `
            <header class="wrap nav">
              <a href="index.html" class="brand-link"><div class="logo">SheMart<small>WOMEN'S ONLINE STORE</small></div></a>
              <nav class="navlinks" aria-label="Main navigation">
                <a href="index.html">Home</a>
                <a href="shop.html">Shop all</a>
                <a href="shop.html?category=Women's%20innerwear">Innerwear</a>
                <a href="shop.html?category=Ladies%20clothing">Clothing</a>
                <a href="shop.html?category=Cosmetics">Cosmetics</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
              </nav>
              <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
              <button class="cartbtn" id="openCart" aria-label="Open cart" title="Open cart">
                <svg class="carticon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 4h2l2.1 10.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H7"></path>
                  <circle cx="10" cy="20" r="1.3"></circle>
                  <circle cx="18" cy="20" r="1.3"></circle>
                </svg>
                <span class="cart-count" id="cartCount" aria-live="polite">0</span>
              </button>
            </header>`;
        }
        if (footer) {
          footer.outerHTML = `
            <footer class="footer">
              <div class="wrap footerinner">
                <div>
                  <div class="logo">SheMart</div>
                  <p>Women's innerwear, fashion and beauty essentials.<br>Style and comfort, delivered with care.</p>
                </div>
                <div>
                  <b>Customer care</b>
                  <p>WhatsApp: +92 300 1234567<br>Email: hello@shemart.pk<br>Pakistan-wide delivery</p>
                </div>
                <div>
                  <b>Useful links</b>
                  <p>
                    <a href="index.html">Home</a><br>
                    <a href="shop.html">Shop products</a><br>
                    <a href="about.html">About SheMart</a><br>
                    <a href="contact.html">Contact us</a><br>
                    <a href="https://wa.me/923001234567">WhatsApp support</a>
                  </p>
                </div>
                <div>
                  <b>Shop by category</b>
                  <p>
                    <a href="shop.html?category=Women's%20innerwear">Innerwear</a><br>
                    <a href="shop.html?category=Ladies%20clothing">Clothing</a><br>
                    <a href="shop.html?category=Cosmetics">Cosmetics</a><br>
                    <a href="shop.html?category=Beauty%20products">Beauty &amp; care</a>
                  </p>
                </div>
              </div>
              <div class="wrap smallprint">
                <span>© <span id="year"></span> SheMart. All rights reserved.</span>
                <span>Made for your everyday confidence · Cash on Delivery available</span>
              </div>
            </footer>`;
        }
        return page;
      }
      renderSharedChrome();
      let active = "All products";
      const requestedCategory = new URLSearchParams(window.location.search).get("category");
      if (cats.includes(requestedCategory)) active = requestedCategory;
      let cart = {};
      const savedCart = localStorage.getItem("shemart-cart");
      if (savedCart) {
        try {
          cart = JSON.parse(savedCart);
        } catch (error) {
          console.warn("Unable to restore the saved cart.", error);
          localStorage.removeItem("shemart-cart");
        }
      }
      const fmt = (n) => "Rs " + Number(n).toLocaleString("en-PK");
      const $ = (id) => document.getElementById(id);
      if ($("year")) $("year").textContent = new Date().getFullYear();
      function updateNavigation() {
        const page = document.body.dataset.page;
        const category = new URLSearchParams(window.location.search).get("category");
        document.querySelectorAll(".navlinks a").forEach((link) => {
          link.classList.remove("active-link");
          const url = new URL(link.href, window.location.href);
          const linkCategory = url.searchParams.get("category");
          const isHome = page === "home" && url.pathname.endsWith("/index.html");
          const isPage = page === "shop" && url.pathname.endsWith("/shop.html") && !linkCategory;
          const isCategory = page === "shop" && category && linkCategory === category;
          const isAbout = page === "about" && url.pathname.endsWith("/about.html");
          const isContact = page === "contact" && url.pathname.endsWith("/contact.html");
          if (isHome || isPage || isCategory || isAbout || isContact) {
            link.classList.add("active-link");
          }
        });
      }
      function renderCats() {
        if (!$("categories")) return;
        $("categories").innerHTML = cats
          .map(
            (c) =>
              `<button class="chip ${active === c ? "active" : ""}" data-cat="${c}">${c}</button>`,
          )
          .join("");
        document.querySelectorAll("[data-cat]").forEach(
          (b) =>
            (b.onclick = () => {
              active = b.dataset.cat;
              renderCats();
              renderProducts();
            }),
        );
      }
      function renderProducts() {
        if (!$("products") || !$("search") || !$("sort")) return;
        let list = productsData.filter(
          (p) =>
            (active === "All products" || p.cat === active) &&
            (p.name + " " + p.cat + " " + p.desc)
              .toLowerCase()
              .includes($("search").value.toLowerCase()),
        );
        if ($("sort").value === "low") list.sort((a, b) => a.price - b.price);
        if ($("sort").value === "high") list.sort((a, b) => b.price - a.price);
        if (document.body.dataset.page !== "shop") list = list.slice(0, 4);
        $("products").innerHTML = list.length
          ? list
              .map(
                (p) =>
                  `<article class="product"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"><div class="productbody"><span class="tag">${p.cat}</span><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="price">${fmt(p.price)}</div><button class="add" data-add="${p.id}">＋ Add to cart</button></div></article>`,
              )
              .join("")
          : '<div class="empty">No products found. Try another search.</div>';
        document.querySelectorAll("[data-add]").forEach(
          (b) =>
            (b.onclick = () => {
              const id = +b.dataset.add;
              cart[id] = (cart[id] || 0) + 1;
              updateCart();
              b.textContent = "Added ✓";
              setTimeout(() => (b.textContent = "＋ Add to cart"), 900);
            }),
        );
      }
      function updateCart() {
        localStorage.setItem("shemart-cart", JSON.stringify(cart));
        let count = Object.values(cart).reduce((a, b) => a + b, 0);
        if ($("cartCount")) {
          $("cartCount").textContent = count;
          $("cartCount").classList.toggle("has-items", count > 0);
        }
        if ($("cartItems")) $("cartItems").innerHTML = count
          ? Object.entries(cart)
              .map(([id, q]) => {
                let p = productsData.find((x) => x.id === +id);
                return `<div class="cartline"><img class="cart-thumb" src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"><div class="cart-product"><b>${p.name}</b><span>${fmt(p.price)} each</span><div class="qty" aria-label="Quantity for ${p.name}"><button type="button" data-dec="${id}" aria-label="Decrease ${p.name} quantity">−</button><span>${q}</span><button type="button" data-inc="${id}" aria-label="Increase ${p.name} quantity">＋</button></div></div><b class="cart-line-total">${fmt(p.price * q)}</b><button type="button" class="remove-item" data-remove="${id}" aria-label="Remove ${p.name} from cart" title="Remove item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"></path></svg></button></div>`;
              })
              .join("")
          : '<div class="empty">Your cart is empty. Add a product to get started.</div>';
        let total = Object.entries(cart).reduce(
          (s, [id, q]) => s + productsData.find((p) => p.id === +id).price * q,
          0,
        );
        if ($("cartTotal")) $("cartTotal").textContent = fmt(total);
        if ($("cartSubtotal")) $("cartSubtotal").textContent = fmt(total);
        document.querySelectorAll("[data-dec]").forEach(
          (b) =>
            (b.onclick = () => {
              let id = b.dataset.dec;
              cart[id]--;
              if (cart[id] <= 0) delete cart[id];
              updateCart();
            }),
        );
        document.querySelectorAll("[data-inc]").forEach(
          (b) =>
            (b.onclick = () => {
              let id = b.dataset.inc;
              cart[id]++;
              updateCart();
            }),
        );
        document.querySelectorAll("[data-remove]").forEach(
          (b) =>
            (b.onclick = () => {
              delete cart[b.dataset.remove];
              updateCart();
            }),
        );
        if ($("checkoutBtn")) {
          $("checkoutBtn").disabled = !count;
          $("checkoutBtn").style.opacity = count ? "1" : ".5";
        }
        if ($("checkoutSummary")) renderCheckoutSummary();
      }
      function renderCheckoutSummary() {
        const summary = $("checkoutSummary");
        if (!summary) return;
        const entries = Object.entries(cart);
        if (!entries.length) {
          summary.innerHTML = '<div class="checkout-empty">Your cart is empty. <a href="shop.html">Return to shop</a></div>';
          if ($("checkoutSubmit")) $("checkoutSubmit").disabled = true;
          return;
        }
        const total = entries.reduce((sum, [id, quantity]) => {
          const product = productsData.find((item) => item.id === +id);
          return sum + product.price * quantity;
        }, 0);
        summary.innerHTML = entries.map(([id, quantity]) => {
          const product = productsData.find((item) => item.id === +id);
          return `<div class="checkout-item"><img src="${product.img}" alt="${product.name}"><div><b>${product.name}</b><span>${quantity} × ${fmt(product.price)}</span></div><strong>${fmt(product.price * quantity)}</strong></div>`;
        }).join("") + `<div class="checkout-total"><span>Subtotal</span><strong>${fmt(total)}</strong></div><div class="checkout-total"><span>Delivery</span><strong>Confirmed after order</strong></div><div class="checkout-grand-total"><span>Total</span><strong>${fmt(total)}</strong></div>`;
      }
      function open(id) {
        if ($(id)) $(id).classList.add("open");
      }
      function close(id) {
        if ($(id)) $(id).classList.remove("open");
      }
      if ($("openCart")) $("openCart").onclick = () => {
        updateCart();
        if (document.body.dataset.page === "checkout") {
          if ($("checkoutSummary")) {
            $("checkoutSummary").scrollIntoView({ behavior: "smooth", block: "center" });
          }
          return;
        }
        open("cartModal");
      };
      if ($("closeCart")) $("closeCart").onclick = () => close("cartModal");
      if ($("closeCheckout")) $("closeCheckout").onclick = () => close("checkoutModal");
      if ($("checkoutBtn")) $("checkoutBtn").onclick = () => {
        if (!Object.keys(cart).length) return;
        close("cartModal");
        window.location.href = "checkout.html";
      };
      document.querySelectorAll("[data-filter-link]").forEach(
        (a) =>
          (a.onclick = () => {
            active = a.dataset.filterLink;
            renderCats();
            renderProducts();
          }),
      );
      if ($("search")) $("search").oninput = renderProducts;
      if ($("sort")) $("sort").onchange = renderProducts;
      function orderText() {
        let f = new FormData($("orderForm") || $("checkoutForm"));
        let lines = Object.entries(cart).map(([id, q]) => {
          let p = productsData.find((x) => x.id === +id);
          return `- ${p.name} x${q}: ${fmt(p.price * q)}`;
        });
        let total = Object.entries(cart).reduce(
          (s, [id, q]) => s + productsData.find((p) => p.id === +id).price * q,
          0,
        );
        return `SheMart Order\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nAddress: ${f.get("address")}, ${f.get("city")}\nPayment: ${f.get("payment")}\nItems:\n${lines.join("\n")}\nTotal (delivery may be extra): ${fmt(total)}\nNotes: ${f.get("notes") || "None"}`;
      }
      if ($("orderForm")) $("orderForm").onsubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(cart).length) {
          $("orderResult").textContent = "Your cart is empty.";
          return;
        }
        const text = orderText();
        const whatsappNumber = "923001234567";
        if (whatsappNumber === "923001234567") {
          $("orderResult").innerHTML =
            '<div class="notice"><b>Setup needed:</b> replace the demo WhatsApp number (923001234567) in index.html with your real business WhatsApp number, then submit again. Your order text is ready below.</div><textarea style="width:100%;min-height:160px;padding:10px;border:1px solid #f0dfe6;border-radius:9px" readonly></textarea>';
          const ta = $("orderResult").querySelector("textarea");
          ta.value = text;
          return;
        }
        window.open(
          "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(text),
          "_blank",
          "noopener",
        );
      };
      if ($("checkoutForm")) $("checkoutForm").onsubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(cart).length) {
          $("checkoutMessage").textContent = "Your cart is empty. Please add an item before checking out.";
          return;
        }
        const text = orderText();
        $("checkoutMessage").innerHTML = "<b>Order details ready.</b> Please send this order to SheMart on WhatsApp.";
        $("checkoutOrderText").value = text;
        const whatsappLink = document.querySelector(".checkout-whatsapp");
        if (whatsappLink) whatsappLink.href = "https://wa.me/923001234567?text=" + encodeURIComponent(text);
        $("checkoutConfirmation").hidden = false;
        $("checkoutConfirmation").scrollIntoView({ behavior: "smooth", block: "nearest" });
      };
      if ($("copyOrder")) $("copyOrder").onclick = async () => {
        await navigator.clipboard.writeText($("checkoutOrderText").value);
        $("copyOrder").textContent = "Copied ✓";
      };
      if ($("draftOrder")) $("draftOrder").onclick = () => {
        if (!$("orderForm").reportValidity()) return;
        $("orderResult").innerHTML =
          '<div class="notice"><b>Order summary</b><br><textarea readonly style="width:100%;min-height:180px;margin-top:8px;padding:10px;border:1px solid #f0dfe6;border-radius:9px"></textarea></div>';
        $("orderResult").querySelector("textarea").value = orderText();
      };
      if ($("contactForm")) $("contactForm").onsubmit = (e) => {
        e.preventDefault();
        $("contactSuccess").textContent =
          "Thanks for reaching out! We will get back to you soon.";
        e.target.reset();
      };
      if ($("newsletterForm")) $("newsletterForm").onsubmit = (e) => {
        e.preventDefault();
        $("newsletterMessage").textContent = "You’re on the list — welcome to SheMart.";
        e.target.reset();
      };
      document.querySelectorAll(".menu-toggle").forEach((button) => {
        button.onclick = () => {
          const nav = document.querySelector(".navlinks");
          nav.classList.toggle("menu-open");
          button.setAttribute("aria-expanded", nav.classList.contains("menu-open"));
        };
      });
      $("cartModal").onclick = (e) => {
        if (e.target === $("cartModal")) close("cartModal");
      };
      if ($("checkoutModal")) $("checkoutModal").onclick = (e) => {
        if (e.target === $("checkoutModal")) close("checkoutModal");
      };
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          close("cartModal");
          close("checkoutModal");
        }
      });
      renderCats();
      renderProducts();
      updateCart();
      updateNavigation();
      renderCheckoutSummary();
      if (
        document.body.dataset.page === "shop" &&
        window.location.hash === "#checkout" &&
        Object.keys(cart).length
      ) {
        open("checkoutModal");
      }
