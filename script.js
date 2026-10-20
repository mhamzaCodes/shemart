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
      let active = "All products";
      let cart = {};
      const fmt = (n) => "Rs " + Number(n).toLocaleString("en-PK");
      const $ = (id) => document.getElementById(id);
      $("year").textContent = new Date().getFullYear();
      function renderCats() {
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
        let list = productsData.filter(
          (p) =>
            (active === "All products" || p.cat === active) &&
            (p.name + " " + p.cat + " " + p.desc)
              .toLowerCase()
              .includes($("search").value.toLowerCase()),
        );
        if ($("sort").value === "low") list.sort((a, b) => a.price - b.price);
        if ($("sort").value === "high") list.sort((a, b) => b.price - a.price);
        $("products").innerHTML = list.length
          ? list
              .map(
                (p) =>
                  `<article class="product"><img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'"><div class="productbody"><span class="tag">${p.cat}</span><h3>${p.name}</h3><div class="desc">${p.desc}</div><div class="price">${fmt(p.price)}</div><button class="add" data-add="${p.id}">＋ Add to bag</button></div></article>`,
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
              setTimeout(() => (b.textContent = "＋ Add to bag"), 900);
            }),
        );
      }
      function updateCart() {
        let count = Object.values(cart).reduce((a, b) => a + b, 0);
        $("cartCount").textContent = count;
        $("cartItems").innerHTML = count
          ? Object.entries(cart)
              .map(([id, q]) => {
                let p = productsData.find((x) => x.id === +id);
                return `<div class="cartline"><div><b>${p.name}</b><br>${fmt(p.price)} each</div><div class="qty"><button data-dec="${id}">−</button>${q}<button data-inc="${id}">＋</button></div><b>${fmt(p.price * q)}</b></div>`;
              })
              .join("")
          : '<div class="empty">Your bag is empty. Add a product to get started.</div>';
        let total = Object.entries(cart).reduce(
          (s, [id, q]) => s + productsData.find((p) => p.id === +id).price * q,
          0,
        );
        $("cartTotal").textContent = fmt(total);
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
        $("checkoutBtn").disabled = !count;
        $("checkoutBtn").style.opacity = count ? "1" : ".5";
      }
      function open(id) {
        $(id).classList.add("open");
      }
      function close(id) {
        $(id).classList.remove("open");
      }
      $("openCart").onclick = () => {
        updateCart();
        open("cartModal");
      };
      $("closeCart").onclick = () => close("cartModal");
      $("closeCheckout").onclick = () => close("checkoutModal");
      $("checkoutBtn").onclick = () => {
        if (!Object.keys(cart).length) return;
        close("cartModal");
        open("checkoutModal");
      };
      document.querySelectorAll("[data-filter-link]").forEach(
        (a) =>
          (a.onclick = () => {
            active = a.dataset.filterLink;
            renderCats();
            renderProducts();
          }),
      );
      $("search").oninput = renderProducts;
      $("sort").onchange = renderProducts;
      function orderText() {
        let f = new FormData($("orderForm"));
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
      $("orderForm").onsubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(cart).length) {
          $("orderResult").textContent = "Your bag is empty.";
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
      $("draftOrder").onclick = () => {
        if (!$("orderForm").reportValidity()) return;
        $("orderResult").innerHTML =
          '<div class="notice"><b>Order summary</b><br><textarea readonly style="width:100%;min-height:180px;margin-top:8px;padding:10px;border:1px solid #f0dfe6;border-radius:9px"></textarea></div>';
        $("orderResult").querySelector("textarea").value = orderText();
      };
      renderCats();
      renderProducts();
      updateCart();
