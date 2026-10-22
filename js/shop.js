      // 1. Comprehensive Product Catalog Data
      const productsData = [
        {
          id: 1,
          title: "Seamless Cloud Wirefree Bralette",
          category: "Innerwear",
          price: 2450,
          oldPrice: 2950,
          rating: 4.9,
          reviews: 142,
          tag: "Best Seller",
          tagType: "best",
          inStock: true,
          description: "Buttery-soft microfibre bralette offering natural shape and zero poke, designed for all-day seamless comfort beneath eastern or western fits.",
          image: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?auto=format&fit=crop&w=700&q=80",
          swatches: ["#d95783", "#f8dce8", "#221721"]
        },
        {
          id: 2,
          title: "Embroidered Raw Silk Festive Pret Set",
          category: "Clothing",
          price: 8850,
          oldPrice: 10500,
          rating: 4.8,
          reviews: 89,
          tag: "20% OFF",
          tagType: "sale",
          inStock: true,
          description: "Exquisite two-piece kurta set handcrafted with delicate tonal tilla and pearl embellishments on premium woven mulberry raw silk.",
          image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80",
          swatches: ["#c2904b", "#4a192c", "#ffffff"]
        },
        {
          id: 3,
          title: "Velvet Matte Moisture Lipstick - Desert Rose",
          category: "Cosmetics",
          price: 1850,
          oldPrice: 2200,
          rating: 4.7,
          reviews: 210,
          tag: "Trending",
          tagType: "new",
          inStock: true,
          description: "Long-wearing matte pigment infused with organic rosehip seed oil and vitamin E for weightless, transfer-proof hydration.",
          image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=700&q=80",
          swatches: ["#bd3e6a", "#a4334f", "#cf718f"]
        },
        {
          id: 4,
          title: "Radiance Niacinamide & Rice Water Glow Serum",
          category: "Beauty & Skincare",
          price: 2900,
          oldPrice: 3400,
          rating: 5.0,
          reviews: 312,
          tag: "Best Seller",
          tagType: "best",
          inStock: true,
          description: "Target hyperpigmentation, uneven tone, and acne scars with our dermatologically-tested pure rice fermented botanical serum.",
          image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
          swatches: ["#fff", "#fce8ef"]
        },
        {
          id: 5,
          title: "Pure Mulberry Silk Kimono Robe & Camisole",
          category: "Sleepwear",
          price: 6400,
          oldPrice: 7500,
          rating: 4.9,
          reviews: 67,
          tag: "Luxury Edit",
          tagType: "new",
          inStock: true,
          description: "Featherweight 19-momme natural mulberry silk finished with delicate French eyelash lace trims. Hypoallergenic and temperature-regulating.",
          image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
          swatches: ["#fce8ef", "#30212d", "#b88745"]
        },
        {
          id: 6,
          title: "Breathable Modal High-Waist Hipster (Pack of 3)",
          category: "Innerwear",
          price: 2650,
          oldPrice: 3100,
          rating: 4.6,
          reviews: 178,
          tag: "Essentials",
          tagType: "best",
          inStock: true,
          description: "Eco-certified Austrian modal fabric designed with 4-way stretch and anti-chafing bonded leg hems for ultimate breathability.",
          image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
          swatches: ["#29212a", "#fbebf1", "#cfcfcf"]
        },
        {
          id: 7,
          title: "Pastel Chiffon 3-Piece Embroidered Lawn",
          category: "Clothing",
          price: 7490,
          oldPrice: 8990,
          rating: 4.7,
          reviews: 95,
          tag: "Summer '26",
          tagType: "new",
          inStock: true,
          description: "Lawn shirt adorned with delicate cross-stitch motifs, digital print pure crinkle chiffon dupatta, and dyed cambric trousers.",
          image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
          swatches: ["#e3d1dd", "#ffd9c0", "#cce3de"]
        },
        {
          id: 8,
          title: "Hydrating Rosewater Facial Mist & Toner",
          category: "Beauty & Skincare",
          price: 1350,
          oldPrice: 1650,
          rating: 4.8,
          reviews: 140,
          tag: "100% Organic",
          tagType: "best",
          inStock: true,
          description: "Steam-distilled Damask roses harvested at dawn from Punjab organic farms. Balances pH, revitalizes tired skin, and locks makeup.",
          image: "https://images.unsplash.com/photo-1608248597359-269e802ea7b2?auto=format&fit=crop&w=700&q=80",
          swatches: ["#fce8ef"]
        },
        {
          id: 9,
          title: "Everyday Contour Wireless T-Shirt Bra",
          category: "Innerwear",
          price: 2890,
          oldPrice: 3400,
          rating: 4.9,
          reviews: 204,
          tag: "Best Seller",
          tagType: "best",
          inStock: true,
          description: "Moulded memory foam cups adapt uniquely to your contours with zero gaping and invisible laser-cut edges under thin fabrics.",
          image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=700&q=80",
          swatches: ["#dfbead", "#29212a", "#fff"]
        }
      ];

      // 2. Application State
      let cart = JSON.parse(localStorage.getItem("shemart_cart") || "[]");
      let wishlist = JSON.parse(localStorage.getItem("shemart_wishlist") || "[]");
      let activeCategory = "All";
      let activeSort = "featured";
      let searchQuery = "";
      let maxPrice = 12000;
      let onlyInStock = true;
      let minRating = 0;
      let discountApplied = false;
      let activeModalProduct = null;

      // 3. Categories definition
      const categoriesList = [
        "All",
        "Innerwear",
        "Clothing",
        "Cosmetics",
        "Beauty & Skincare",
        "Sleepwear"
      ];

      // 4. Initialize DOM & Listeners
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("currentYear").textContent = new Date().getFullYear();

        // Check URL parameters (e.g. ?category=Cosmetics)
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get("category");
        if (categoriesList.includes(catParam)) {
          selectCategory(catParam);
        }

        renderCategoryPills();
        renderProducts();
        updateCartBadge();
        updateWishlistCount();
        updateMenuSelection();
        setupEventListeners();
      });

      function updateMenuSelection() {
        const selected = activeCategory;
        const currentPage = window.location.pathname.split("/").pop() || "shop.html";
        document.querySelectorAll("[data-menu-category]").forEach((link) => {
          const isActive = link.dataset.menuCategory === selected;
          link.classList.toggle("active", isActive);
          if (isActive) {
            link.setAttribute("aria-current", "page");
          } else {
            link.removeAttribute("aria-current");
          }
        });
        document.querySelectorAll("[data-menu-page]").forEach((link) => {
          const isActive = link.dataset.menuPage === currentPage.replace(".html", "");
          link.classList.toggle("active", isActive);
          if (isActive) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      }

      function setupEventListeners() {
        // Sticky Header scroll styling
        window.addEventListener("scroll", () => {
          const header = document.getElementById("mainHeader");
          if (!header) return;
          if (window.scrollY > 20) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });

        // Search inputs
        const searchInput = document.getElementById("searchInput");
        const clearBtn = document.getElementById("searchClearBtn");

        searchInput.addEventListener("input", (e) => {
          searchQuery = e.target.value.trim().toLowerCase();
          clearBtn.style.display = searchQuery ? "block" : "none";
          renderProducts();
        });

        clearBtn.addEventListener("click", () => {
          searchInput.value = "";
          searchQuery = "";
          clearBtn.style.display = "none";
          renderProducts();
        });

        // Sorting
        document.getElementById("sortSelect").addEventListener("change", (e) => {
          activeSort = e.target.value;
          renderProducts();
        });

        // Price Slider
        const priceRange = document.getElementById("priceRange");
        const priceOutput = document.getElementById("priceOutput");
        priceRange.addEventListener("input", (e) => {
          maxPrice = parseInt(e.target.value);
          priceOutput.textContent = `Rs. ${maxPrice.toLocaleString()}`;
          renderProducts();
        });

        // In-Stock toggle
        document.getElementById("inStockToggle").addEventListener("change", (e) => {
          onlyInStock = e.target.checked;
          renderProducts();
        });

        // Rating radio buttons
        document.querySelectorAll("input[name='ratingFilter']").forEach((radio) => {
          radio.addEventListener("change", (e) => {
            minRating = parseFloat(e.target.value);
            renderProducts();
          });
        });

        // Collection checkboxes
        document.getElementById("filterBestSellers").addEventListener("change", renderProducts);
        document.getElementById("filterDiscounts").addEventListener("change", renderProducts);
        document.getElementById("filterNewArrivals").addEventListener("change", renderProducts);

        // View toggle (Grid vs List)
        const gridBtn = document.getElementById("gridViewBtn");
        const listBtn = document.getElementById("listViewBtn");
        const container = document.getElementById("productsContainer");

        gridBtn.addEventListener("click", () => {
          gridBtn.classList.add("active");
          listBtn.classList.remove("active");
          container.classList.remove("list-view");
        });

        listBtn.addEventListener("click", () => {
          listBtn.classList.add("active");
          gridBtn.classList.remove("active");
          container.classList.add("list-view");
        });

        // Cart Drawer
        // Promo code
        const promoButton = document.getElementById("applyPromoBtn");
        if (promoButton) promoButton.addEventListener("click", applyCoupon);

        // Quick View Modal
        document.getElementById("closeQuickView").addEventListener("click", closeQuickView);
        document.getElementById("quickViewBackdrop").addEventListener("click", (e) => {
          if (e.target.id === "quickViewBackdrop") closeQuickView();
        });

        // Checkout Modal
        const checkoutButton = document.getElementById("openCheckoutModalBtn");
        if (checkoutButton) checkoutButton.addEventListener("click", () => {
          if (cart.length === 0) {
            showToast("Your cart is empty. Add items first!");
            return;
          }
          closeCart();
          document.getElementById("checkoutBackdrop").classList.add("active");
        });

        document.getElementById("closeCheckoutModal").addEventListener("click", () => {
          document.getElementById("checkoutBackdrop").classList.remove("active");
        });

        // Mobile Filter modal toggle
        const mobFilterBtn = document.getElementById("mobileFilterBtn");
        const sidebar = document.getElementById("filterSidebar");
        mobFilterBtn.addEventListener("click", () => {
          sidebar.classList.toggle("mobile-open");
        });

      }

      // 5. Render Category Pills
      function renderCategoryPills() {
        const container = document.getElementById("categoryPills");
        container.innerHTML = categoriesList
          .map((cat) => {
            const count =
              cat === "All"
                ? productsData.length
                : productsData.filter((p) => p.category === cat).length;
            const isActive = cat === activeCategory ? "active" : "";
            return `
            <button class="cat-pill ${isActive}" onclick="selectCategory('${cat}')">
              <span>${cat}</span>
              <span class="count">${count}</span>
            </button>
          `;
          })
          .join("");
      }

      function selectCategory(categoryName) {
        activeCategory = categoryName;
        renderCategoryPills();
        renderProducts();
        updateMenuSelection();
      }

      function quickSearch(tag) {
        document.getElementById("searchInput").value = tag;
        searchQuery = tag.toLowerCase();
        document.getElementById("searchClearBtn").style.display = "block";
        renderProducts();
      }

      function resetAllFilters() {
        activeCategory = "All";
        searchQuery = "";
        maxPrice = 12000;
        minRating = 0;
        onlyInStock = true;

        document.getElementById("searchInput").value = "";
        document.getElementById("searchClearBtn").style.display = "none";
        document.getElementById("priceRange").value = 12000;
        document.getElementById("priceOutput").textContent = "Rs. 12,000";
        document.getElementById("inStockToggle").checked = true;
        document.querySelector("input[name='ratingFilter'][value='0']").checked = true;
        document.getElementById("filterBestSellers").checked = false;
        document.getElementById("filterDiscounts").checked = false;
        document.getElementById("filterNewArrivals").checked = false;

        renderCategoryPills();
        renderProducts();
      }

      // 6. Filter & Render Products
      function getFilteredProducts() {
        const bestSellerOnly = document.getElementById("filterBestSellers")?.checked;
        const discountOnly = document.getElementById("filterDiscounts")?.checked;
        const newOnly = document.getElementById("filterNewArrivals")?.checked;

        return productsData.filter((item) => {
          if (activeCategory !== "All" && item.category !== activeCategory) return false;
          if (item.price > maxPrice) return false;
          if (onlyInStock && !item.inStock) return false;
          if (item.rating < minRating) return false;

          if (bestSellerOnly && item.tag !== "Best Seller") return false;
          if (discountOnly && (!item.oldPrice || item.oldPrice <= item.price)) return false;
          if (newOnly && item.tagType !== "new") return false;

          if (searchQuery) {
            const haystack = `${item.title} ${item.category} ${item.description}`.toLowerCase();
            if (!haystack.includes(searchQuery)) return false;
          }

          return true;
        });
      }

      function sortProducts(items) {
        const copy = [...items];
        switch (activeSort) {
          case "price-asc":
            return copy.sort((a, b) => a.price - b.price);
          case "price-desc":
            return copy.sort((a, b) => b.price - a.price);
          case "rating":
            return copy.sort((a, b) => b.rating - a.rating);
          case "newest":
            return copy.sort((a, b) => (b.tagType === "new" ? 1 : -1));
          default:
            return copy;
        }
      }

      function renderProducts() {
        const container = document.getElementById("productsContainer");
        const filtered = sortProducts(getFilteredProducts());

        document.getElementById("resultsCount").textContent = `Showing ${filtered.length} of ${productsData.length} items`;

        if (filtered.length === 0) {
          container.innerHTML = `
            <div class="empty-state">
              <div class="empty-icon">♡</div>
              <h3>No match found in our collection</h3>
              <p>We couldn't find items matching your criteria. Try adjusting your budget slider or searching for a different keyword.</p>
              <button class="checkout-btn" style="width: auto; margin: 0 auto; padding: 10px 24px" onclick="resetAllFilters()">
                Reset Filters
              </button>
            </div>
          `;
          return;
        }

        container.innerHTML = filtered
          .map((prod) => {
            const isWish = wishlist.includes(prod.id);
            const discountPercent = prod.oldPrice
              ? Math.round(((prod.oldPrice - prod.price) / prod.oldPrice) * 100)
              : 0;

            const swatchesHtml = prod.swatches
              .map(
                (c) =>
                  `<span class="swatch-dot" style="background:${c}" title="Color option"></span>`
              )
              .join("");

            return `
            <article class="product-card" data-id="${prod.id}">
              <div class="card-media">
                <div class="badge-stack">
                  ${prod.tag ? `<span class="tag-badge ${prod.tagType}">${prod.tag}</span>` : ""}
                  ${discountPercent > 0 ? `<span class="tag-badge sale">-${discountPercent}%</span>` : ""}
                </div>

                <button class="wishlist-btn ${isWish ? "active" : ""}" onclick="toggleWishlist(${prod.id})" aria-label="Add to Wishlist">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </button>

                <img src="${prod.image}" alt="${prod.title}" loading="lazy" />

                <button class="quick-view-overlay" onclick="openQuickView(${prod.id})">
                  Quick View &amp; Sizing
                </button>
              </div>

              <div class="card-info">
                <div class="card-category-row">
                  <span class="card-cat">${prod.category}</span>
                  <div class="rating-stars">
                    <span>★</span>
                    <span>${prod.rating.toFixed(1)}</span>
                    <span style="color:var(--muted); font-size:10.5px">(${prod.reviews})</span>
                  </div>
                </div>

                <h3 class="card-title">${prod.title}</h3>
                <p class="card-desc">${prod.description}</p>

                <div class="swatches">${swatchesHtml}</div>

                <div class="card-footer">
                  <div class="price-box">
                    <span class="current-price">Rs. ${prod.price.toLocaleString()}</span>
                    ${
                      prod.oldPrice
                        ? `<span class="old-price">Rs. ${prod.oldPrice.toLocaleString()}</span>`
                        : ""
                    }
                  </div>

                  <button class="add-btn" onclick="addToCart(${prod.id})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </article>
          `;
          })
          .join("");
      }

      // 7. Shopping Bag Functionality
      function addToCart(productId) {
        const item = productsData.find((p) => p.id === productId);
        if (!item) return;

        const existing = cart.find((i) => i.id === productId);
        if (existing) {
          existing.qty += 1;
        } else {
          cart.push({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image,
            category: item.category,
            qty: 1
          });
        }

        saveCart();
        updateCartBadge();
        renderCartItems();
        showToast(`Added "${item.title}" to your bag!`);
      }

      function updateItemQty(productId, delta) {
        const item = cart.find((i) => i.id === productId);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
          removeFromCart(productId);
          return;
        }
        saveCart();
        updateCartBadge();
        renderCartItems();
      }

      function removeFromCart(productId) {
        cart = cart.filter((i) => i.id !== productId);
        saveCart();
        updateCartBadge();
        renderCartItems();
      }

      function saveCart() {
        localStorage.setItem("shemart_cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("shemart-cart-updated"));
      }

      function updateCartBadge() {
        const totalCount = cart.reduce((acc, curr) => acc + curr.qty, 0);
        document.getElementById("cartBadge").textContent = totalCount;
      }

      function openCart() {
        const sharedCart = document.getElementById("sharedCartBackdrop");
        if (sharedCart) sharedCart.classList.add("open");
      }

      function closeCart() {
        const sharedCart = document.getElementById("sharedCartBackdrop");
        if (sharedCart) sharedCart.classList.remove("open");
      }

      function renderCartItems() {
        const list = document.getElementById("cartList");
        if (!list) {
          window.dispatchEvent(new Event("shemart-cart-updated"));
          return;
        }
        const totalItems = cart.reduce((acc, curr) => acc + curr.qty, 0);
        document.getElementById("drawerItemCount").textContent = `${totalItems} ${
          totalItems === 1 ? "item" : "items"
        } selected`;

        if (cart.length === 0) {
          list.innerHTML = `
            <div style="text-align:center; padding: 40px 10px; color: var(--muted)">
              <div style="font-size:36px; margin-bottom:10px">🛍</div>
              <p style="font-weight:700; color:var(--ink); margin-bottom:6px">Your shopping bag is empty</p>
              <p style="font-size:12.5px">Browse our latest collection and treat yourself to something lovely.</p>
            </div>
          `;
          updateCartSummary(0);
          return;
        }

        list.innerHTML = cart
          .map(
            (item) => `
            <div class="cart-item-row">
              <img src="${item.image}" alt="${item.title}" class="cart-item-thumb" />
              <div class="cart-item-info">
                <div>
                  <h4 class="cart-item-title">${item.title}</h4>
                  <span class="cart-item-variant">${item.category} · Standard Fit</span>
                </div>
                <div class="cart-item-bottom">
                  <div class="qty-counter">
                    <button onclick="updateItemQty(${item.id}, -1)">−</button>
                    <span>${item.qty}</span>
                    <button onclick="updateItemQty(${item.id}, 1)">+</button>
                  </div>
                  <div style="text-align:right">
                    <span class="cart-item-price">Rs. ${(item.price * item.qty).toLocaleString()}</span>
                    <div><span class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</span></div>
                  </div>
                </div>
              </div>
            </div>
          `
          )
          .join("");

        const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
        updateCartSummary(subtotal);
      }

      function updateCartSummary(subtotal) {
        const freeShippingThreshold = 3500;
        const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 250;

        // Shipping Progress
        const percent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
        document.getElementById("shippingProgressFill").style.width = `${percent}%`;
        document.getElementById("shippingPercentage").textContent = `${percent}%`;

        const shippingStatus = document.getElementById("shippingBarStatus");
        if (subtotal >= freeShippingThreshold) {
          shippingStatus.textContent = "🎉 You've unlocked Free Nationwide Shipping!";
        } else {
          const remaining = freeShippingThreshold - subtotal;
          shippingStatus.textContent = `Add Rs. ${remaining.toLocaleString()} more for Free Delivery`;
        }

        document.getElementById("cartSubtotalVal").textContent = `Rs. ${subtotal.toLocaleString()}`;
        document.getElementById("cartShippingVal").textContent =
          shippingFee === 0
            ? subtotal === 0
              ? "Rs. 0"
              : "FREE"
            : `Rs. ${shippingFee}`;

        let discount = 0;
        const discountRow = document.getElementById("discountRow");
        if (discountApplied && subtotal > 0) {
          discount = Math.round(subtotal * 0.1);
          discountRow.style.display = "flex";
          document.getElementById("discountVal").textContent = `-Rs. ${discount.toLocaleString()}`;
        } else {
          discountRow.style.display = "none";
        }

        const grandTotal = Math.max(0, subtotal + shippingFee - discount);
        document.getElementById("cartGrandTotal").textContent = `Rs. ${grandTotal.toLocaleString()}`;
      }

      function applyCoupon() {
        const code = document.getElementById("couponCode").value.trim().toUpperCase();
        if (code === "SHE10") {
          discountApplied = true;
          showToast("Coupon 'SHE10' applied! 10% discount granted.");
          renderCartItems();
        } else {
          showToast("Invalid promo code. Try 'SHE10'");
        }
      }

      // 8. Wishlist
      function toggleWishlist(productId) {
        if (wishlist.includes(productId)) {
          wishlist = wishlist.filter((id) => id !== productId);
          showToast("Removed from your wishlist");
        } else {
          wishlist.push(productId);
          showToast("Added to your wishlist ♡");
        }
        localStorage.setItem("shemart_wishlist", JSON.stringify(wishlist));
        updateWishlistCount();
        renderProducts();
      }

      function updateWishlistCount() {
        document.getElementById("wishlistCount").textContent = wishlist.length;
      }

      // 9. Quick View Modal
      function openQuickView(productId) {
        const item = productsData.find((p) => p.id === productId);
        if (!item) return;

        activeModalProduct = item;
        document.getElementById("qvImage").src = item.image;
        document.getElementById("qvCategory").textContent = item.category;
        document.getElementById("qvTitle").textContent = item.title;
        document.getElementById("qvPrice").textContent = `Rs. ${item.price.toLocaleString()}`;
        document.getElementById("qvOldPrice").textContent = item.oldPrice
          ? `Rs. ${item.oldPrice.toLocaleString()}`
          : "";
        document.getElementById("qvDesc").textContent = item.description;

        const swatchesEl = document.getElementById("qvSwatches");
        swatchesEl.innerHTML = item.swatches
          .map(
            (c) =>
              `<span class="swatch-dot" style="background:${c}; width:20px; height:20px;"></span>`
          )
          .join("");

        document.getElementById("qvAddToCartBtn").onclick = () => {
          addToCart(item.id);
          closeQuickView();
        };

        document.getElementById("quickViewBackdrop").classList.add("active");
      }

      function closeQuickView() {
        document.getElementById("quickViewBackdrop").classList.remove("active");
      }

      // 10. Checkout & Order Generation (COD / WhatsApp)
      function handleOrderSubmit(e) {
        e.preventDefault();
        const name = document.getElementById("custName").value.trim();
        const phone = document.getElementById("custPhone").value.trim();
        const address = document.getElementById("custAddress").value.trim();
        const city = document.getElementById("custCity").value;
        const payment = document.getElementById("custPayment").value;
        const notes = document.getElementById("custNotes").value.trim();

        const subtotal = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
        const shippingFee = subtotal >= 3500 || subtotal === 0 ? 0 : 250;
        const discount = discountApplied ? Math.round(subtotal * 0.1) : 0;
        const grandTotal = subtotal + shippingFee - discount;

        let message = `*✨ NEW SHEMART ORDER ✨*\n\n`;
        message += `*Customer:* ${name}\n`;
        message += `*Phone:* ${phone}\n`;
        message += `*Address:* ${address}, ${city}\n`;
        message += `*Payment:* ${payment}\n`;
        if (notes) message += `*Notes:* ${notes}\n`;
        message += `\n*Order Items:*\n`;

        cart.forEach((i, idx) => {
          message += `${idx + 1}. ${i.title} (${i.qty}x) - Rs. ${(i.price * i.qty).toLocaleString()}\n`;
        });

        message += `\n*Subtotal:* Rs. ${subtotal.toLocaleString()}`;
        message += `\n*Delivery:* Rs. ${shippingFee}`;
        if (discount > 0) message += `\n*Discount:* -Rs. ${discount.toLocaleString()}`;
        message += `\n*TOTAL AMOUNT:* Rs. ${grandTotal.toLocaleString()}`;

        const encodedMsg = encodeURIComponent(message);
        const waNumber = "923008472910";
        const waUrl = `https://wa.me/${waNumber}?text=${encodedMsg}`;

        // Reset cart
        cart = [];
        saveCart();
        updateCartBadge();
        document.getElementById("checkoutBackdrop").classList.remove("active");

        showToast("Opening WhatsApp with your order details...");
        window.open(waUrl, "_blank");
      }

      function simulateCodOrder() {
        const name = document.getElementById("custName").value.trim() || "Guest";
        if (!document.getElementById("custPhone").value.trim()) {
          showToast("Please provide your phone number");
          return;
        }

        cart = [];
        saveCart();
        updateCartBadge();
        document.getElementById("checkoutBackdrop").classList.remove("active");
        showToast(`Thank you, ${name}! Your Cash on Delivery order has been registered.`);
      }

      // 11. Toast Helper
      let toastTimer = null;
      function showToast(message) {
        const toast = document.getElementById("toast");
        document.getElementById("toastMessage").textContent = message;
        toast.classList.add("show");

        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toast.classList.remove("show");
        }, 3200);
      }
