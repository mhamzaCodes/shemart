(function () {
  const page = document.body.dataset.page || "";
  const categories = ["All", "Innerwear", "Clothing", "Cosmetics", "Beauty & Skincare"];
  let discountApplied = false;

  function iconHeart() {
    return '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>';
  }

  function iconBag() {
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>';
  }

  function renderHeader() {
    const host = document.getElementById("sharedHeader");
    if (!host) return;
    host.innerHTML = `
      <header class="shared-header" id="mainHeader">
        <div class="shared-nav">
          <div class="shared-brand">
            <button class="shared-menu-toggle mobile-menu-btn" id="mobileMenuBtn" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
            <a class="shared-logo" href="index.html">SheMart<span class="period">.</span><small>WOMEN'S BOUTIQUE &amp; CARE</small></a>
          </div>
          <nav class="shared-links nav-links" aria-label="Main navigation">
            <a data-page-link="home" href="index.html">Home</a>
            <a data-page-link="shop" href="shop.html">The Shop</a>
            <a href="shop.html?category=Innerwear">Innerwear</a>
            <a href="shop.html?category=Clothing">Clothing</a>
            <a href="shop.html?category=Cosmetics">Cosmetics</a>
            <a href="shop.html?category=Beauty%20%26%20Skincare">Skincare</a>
            <a data-page-link="about" href="about.html">About</a>
            <a data-page-link="contact" href="contact.html">Contact</a>
          </nav>
          <div class="shared-actions">
            <button class="shared-action" id="wishlistHeaderBtn" type="button" title="Favorites" aria-label="Favorites">${iconHeart()}<span class="shared-badge" id="wishlistCount">0</span></button>
            <button class="shared-action cartbtn" id="cartOpenBtn" type="button" title="Shopping cart" aria-label="Open shopping cart">${iconBag()}<span class="shared-badge cart-count" id="cartBadge">0</span></button>
          </div>
        </div>
      </header>`;

    const currentPage = page || "home";
    const currentCategory = new URLSearchParams(window.location.search).get("category");
    host.querySelectorAll("[data-page-link]").forEach((link) => {
      link.classList.toggle("active", link.dataset.pageLink === currentPage);
    });
    if (currentPage === "shop") {
      const active = currentCategory || "All";
      host.querySelectorAll('a[href^="shop.html"]').forEach((link) => {
        const category = new URL(link.href, window.location.href).searchParams.get("category") || "All";
        link.classList.toggle("active", category === active);
      });
    }

    const menu = host.querySelector(".shared-links");
    host.querySelector(".shared-menu-toggle").addEventListener("click", (event) => {
      const open = menu.classList.toggle("open");
      event.currentTarget.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => menu.classList.remove("open")));
  }

  function readCart() {
    try {
      const shopCart = JSON.parse(localStorage.getItem("shemart_cart") || "[]");
      if (Array.isArray(shopCart)) return shopCart;
      const legacy = JSON.parse(localStorage.getItem("shemart-cart") || "{}");
      return Object.entries(legacy).map(([id, qty]) => ({ id: Number(id), title: "SheMart product", price: 0, qty }));
    } catch (error) {
      console.warn("Unable to restore shared cart.", error);
      return [];
    }
  }

  function writeCart(cart) {
    localStorage.setItem("shemart_cart", JSON.stringify(cart));
  }

  function renderCart() {
    const drawer = document.getElementById("sharedCartBackdrop");
    if (!drawer) return;
    const cart = readCart();
    const count = cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
    const subtotal = cart.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.qty || 0), 0);
    const shippingThreshold = 3500;
    const shipping = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 250;
    const discount = discountApplied ? Math.round(subtotal * 0.1) : 0;
    const total = Math.max(0, subtotal + shipping - discount);
    const shippingPercent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));
    document.getElementById("cartBadge").textContent = count;
    document.getElementById("cartBadge").hidden = false;
    document.getElementById("wishlistCount").textContent = JSON.parse(localStorage.getItem("shemart_wishlist") || "[]").length;
    document.getElementById("sharedCartItems").innerHTML = cart.length
      ? cart.map((item) => `<div class="shared-cart-row"><img src="${item.image || "img/main_banner.png"}" alt="${item.title || item.name || "SheMart product"}"><div class="shared-cart-item"><div><b>${item.title || item.name || "SheMart product"}</b><span>${item.category || "SheMart collection"} · Standard Fit</span></div><div class="shared-cart-bottom"><div class="shared-qty"><button data-shared-qty="${item.id}" data-delta="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-shared-qty="${item.id}" data-delta="1" aria-label="Increase quantity">+</button></div><div><strong>Rs. ${(Number(item.price || 0) * Number(item.qty || 0)).toLocaleString()}</strong><span class="shared-cart-remove" data-shared-remove="${item.id}">Remove</span></div></div></div></div>`).join("")
      : '<div class="shared-cart-empty">Your shopping bag is empty.</div>';
    document.getElementById("sharedShippingFill").style.width = `${shippingPercent}%`;
    document.getElementById("sharedShippingPercentage").textContent = `${shippingPercent}%`;
    document.getElementById("sharedShippingStatus").textContent = subtotal >= shippingThreshold ? "🎉 You've unlocked Free Nationwide Shipping!" : `Add Rs. ${(shippingThreshold - subtotal).toLocaleString()} more for Free Delivery`;
    document.getElementById("sharedCartSubtotal").textContent = `Rs. ${subtotal.toLocaleString()}`;
    document.getElementById("sharedCartShipping").textContent = shipping ? `Rs. ${shipping}` : subtotal ? "FREE" : "Rs. 0";
    document.getElementById("sharedCartDiscountRow").style.display = discountApplied && subtotal ? "flex" : "none";
    document.getElementById("sharedCartDiscount").textContent = `-Rs. ${discount.toLocaleString()}`;
    document.getElementById("sharedCartTotal").textContent = `Rs. ${total.toLocaleString()}`;
    document.querySelectorAll("[data-shared-qty]").forEach((button) => button.addEventListener("click", () => {
      const next = readCart();
      const item = next.find((entry) => Number(entry.id) === Number(button.dataset.sharedQty));
      if (!item) return;
      item.qty += Number(button.dataset.delta);
      writeCart(next.filter((entry) => entry.qty > 0));
      renderCart();
    }));
    document.querySelectorAll("[data-shared-remove]").forEach((button) => button.addEventListener("click", () => {
      writeCart(readCart().filter((entry) => Number(entry.id) !== Number(button.dataset.sharedRemove)));
      renderCart();
    }));
  }

  function installSharedCart() {
    const existingShopCart = document.getElementById("cartBackdrop");
    if (existingShopCart) {
      existingShopCart.remove();
    }
    document.body.insertAdjacentHTML("beforeend", `<div class="shared-cart-backdrop" id="sharedCartBackdrop"><aside class="shared-cart-drawer" aria-label="Shopping cart"><div class="shared-cart-head"><div><div class="eyebrow">Your SheMart order</div><h2>Your Bag</h2></div><button class="shared-cart-close" id="sharedCartClose" aria-label="Close cart">×</button></div><div class="shared-shipping"><div class="shared-shipping-text"><span id="sharedShippingStatus">Add Rs. 3,500 for Free Delivery</span><span id="sharedShippingPercentage">0%</span></div><div class="shared-shipping-track"><div class="shared-shipping-fill" id="sharedShippingFill"></div></div></div><div class="shared-cart-items" id="sharedCartItems"></div><div class="shared-cart-summary"><div class="shared-promo"><input id="sharedCoupon" type="text" placeholder="Promo code (SHE10)"><button id="sharedApplyCoupon" type="button">Apply</button></div><div class="shared-cart-summary-row"><span>Subtotal</span><span id="sharedCartSubtotal">Rs. 0</span></div><div class="shared-cart-summary-row"><span>Estimated Delivery</span><span id="sharedCartShipping">Rs. 0</span></div><div class="shared-cart-summary-row" id="sharedCartDiscountRow" style="display:none;color:#2e7d56"><span>Promo Discount (10%)</span><span id="sharedCartDiscount">-Rs. 0</span></div><div class="shared-cart-summary-row total"><span>Total Amount</span><span id="sharedCartTotal">Rs. 0</span></div><a class="shared-checkout-link" href="checkout.html">Proceed to Checkout <span>→</span></a></div></aside></div>`);
    document.getElementById("cartOpenBtn").addEventListener("click", () => {
      renderCart();
      document.getElementById("sharedCartBackdrop").classList.add("open");
    });
    document.getElementById("sharedCartClose").addEventListener("click", () => document.getElementById("sharedCartBackdrop").classList.remove("open"));
    document.getElementById("sharedCartBackdrop").addEventListener("click", (event) => {
      if (event.target.id === "sharedCartBackdrop") event.currentTarget.classList.remove("open");
    });
    document.getElementById("sharedApplyCoupon").addEventListener("click", () => {
      const code = document.getElementById("sharedCoupon").value.trim().toUpperCase();
      discountApplied = code === "SHE10";
      renderCart();
    });
    window.addEventListener("shemart-cart-updated", renderCart);
    renderCart();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    installSharedCart();
  });
})();
