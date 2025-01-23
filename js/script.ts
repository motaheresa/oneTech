document.addEventListener("DOMContentLoaded", () => {
  const asideEle = document.querySelector("aside") as HTMLElement;
  asideEle.innerHTML = `
            <div class="container">
                <div class="aside-content">
                    <div class="categories-menu">
                        <i class="fa-solid fa-list-ul"></i>
                        CATEGORIES
                        <ul class="dropdown">
                            <li>
                                <a href="">Computers & Laptops</a>
                            </li>
                            <li>
                                <a href="">Cameras & Photos</a>
                            </li>
                            <li>
                                <a href="">Hardware</a>
                            </li>
                            <li>
                                <a href="">Smartphones & Tablets</a>
                            </li>
                            <li>
                                <a href="">TV & Audio</a>
                            </li>
                            <li>
                                <a href="">Gadgets</a>
                            </li>
                            <li>
                                <a href="">Car Electronics</a>
                            </li>
                            <li>
                                <a href="">Video Games & Consoles</a>
                            </li>

                        </ul>
                    </div>
                    <ul>
                        <li>
                            <a href="../index.html" class="">Home</a>
                        </li>
                        <li>
                            <a href="Home">Super Deals</a>
                        </li>
                        <li>
                            <a href="Home">New Arrival</a>
                        </li>
                        <li>
                            <a href="Home">Trends</a>
                        </li>
                        <li class="pagesItem">
                            <span style="cursor: pointer;">Pages <i class="fa-solid fa-caret-down"></i></span>
                            <ul class="dropdown">
                                <li>
                                    <a href="../pages/shop.html">Shop</a>
                                </li>
                                <li>
                                    <a href="">Product</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="../pages/cart.html">Cart</a>
                                </li>
                                <li>
                                    <a href="">Contact</a>
                                </li>

                            </ul>
                        </li>
                        <li>
                            <a href="Home">Blog</a>
                        </li>
                        <li>
                            <a href="Home">Contact</a>
                        </li>

                    </ul>
                    <button class="header-bars-mobile">
                        <span>MENU</span>
                        <span><i class="fa-solid fa-bars"></i></span>
                    </button>
                    <div class="header-menu-mobile">
                        <input type="search" placeholder="Search For Products...">
                        <ul>
                            <li>
                                <a href="../index.html">Home</a>
                            </li>
                            <li>
                                <a href="Home">Super Deals</a>
                            </li>
                            <li>
                                <a href="Home">New Arrival</a>
                            </li>
                            <li>
                                <a href="Home">Trends</a>
                            </li>
                            <li class="pagesItem">
                                <span>Pages <i class="fa-solid fa-caret-down"></i></span>
                                <ul class="dropdown">
                                    <li>
                                        <a href="../pages/shop.html">Shop</a>
                                    </li>
                                    <li>
                                        <a href="#">Product</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="../pages/cart.html">Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <a href="Home">Blog</a>
                            </li>
                            <li>
                                <a href="Home">Contact</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
`;

  const headerEle = document.querySelector("header") as HTMLElement;
  headerEle?.innerHTML = `
<header>
        <div class="container">
            <div class="header-content">
                <div class="header-content-logo">
                    <a href="#">OneTech</a>
                </div>
                <div class="header-content-filter">
                    <input type="search" placeholder="Search For Products..."><!-- 
            -->
                    <div class="select-wrapper"><select title="category" name="category" id="category-select">
                            <option value="All Categories">All Categories</option>
                            <option value="Computers">Computers</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Camerars">Camerars</option>
                            <option value="Hardware">Hardware</option>
                            <option value="Smartphones">Smartphones</option>
                        </select>
                    </div><!-- 
                --><a href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                </div>
                <div class="home-btns">
                    <div class="home-btns-btn home-btns-wishlist">
                        <button type="button" class="btn  position-relative">
                            <img src="imgs/wishlist.webp" alt="Wishlist">
                            <span class="position-absolute translate-middle badge rounded-pill">
                                0 </span>
                        </button>
                        <a href="#">witchlist</a>
                    </div>
                    <div class="home-btns-btn home-btns-wishlist">
                        <button type="button" class="btn  position-relative">
                            <img src="imgs/cart.webp" alt="Cart">
                            <span class="position-absolute translate-middle badge rounded-pill">
                                0 </span>
                        </button>
                        <div class="cart-wrapper">
                            <a href="/pages/cart.html">Cart</a>
                            <span>$ 0</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
`;

  // swiper
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 4.5, // Show 4 full slides
    spaceBetween: 10, // Adjust the gap between slides
    loop: true, // Enable infinite scrolling
    autoplay: {
      delay: 1000, // Delay between slides (in milliseconds)
      disableOnInteraction: false, // Continue autoplay after user interaction
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // Add responsive behavior if needed
      240: {
        slidesPerView: 1.5, // Adjust for smaller screens
      },
      768: {
        slidesPerView: 2.5, // Adjust for medium screens
      },
      1024: {
        slidesPerView: 4.5, // Show 4.5 on larger screens
      },
    },
  });

  const bars = document.querySelector(
    "aside .aside-content .header-bars-mobile"
  ) as HTMLButtonElement;
  const heaedr_menu = document.querySelector(
    "aside .aside-content .header-menu-mobile"
  ) as HTMLDivElement;

  bars.addEventListener("click", () => {
    heaedr_menu.classList.toggle("active");
  });

  // Super Deals
  const activeSections = document.querySelectorAll(
    ".super-deals-products-filter span"
  );
  activeSections.forEach((section) => {
    section.addEventListener("click", () => {
      activeSections.forEach((activeSection) => {
        if (activeSection.className.includes("active")) {
          activeSection.classList.remove("active");
        }
        section.classList.add("active");
      });
    });
  });

  // hot-new-arrival
  const hotNewArrivalActive = document.querySelectorAll(
    ".hot-new-arrival-filter span"
  );
  hotNewArrivalActive.forEach((section) => {
    section.addEventListener("click", () => {
      hotNewArrivalActive.forEach((activeSection) => {
        if (activeSection.className.includes("active")) {
          activeSection.classList.remove("active");
        }
        section.classList.add("active");
      });
    });
  });

  // Shop
  const shop_products_items_top_filter_dropdownEle = document.querySelectorAll(
    ".shop-products-items-top-filter-dropdown p"
  );
  const shop_products_items_top_filter_wrapper = document.querySelector(
    ".shop-products-items-top-filter-wrapper > p button"
  );
  shop_products_items_top_filter_dropdownEle.forEach((ele) => {
    ele?.addEventListener("click", () => {
      shop_products_items_top_filter_wrapper?.innerHTML =
        ele.innerText + ` <i class="fas fa-angle-down"></i>`;
    });
  });

  // Cart
  const plueEle = document.querySelector(
    ".cart-page-cartlist-items-item-quantity-plus"
  ) as HTMLElement;
  const minusEle = document.querySelector(
    ".cart-page-cartlist-items-item-quantity-minus"
  ) as HTMLElement;
  const cartQuantityEle = document.querySelector(
    ".cart-page-cartlist-items-item-quantity-num"
  ) as HTMLButtonElement;
  const cartPrice = document.querySelector(
    ".cart-page-cartlist-items-item-quantity-price"
  ) as HTMLButtonElement;
  const cartTotalPrice = document.querySelector(
    ".cart-page-cartlist-items-item-quantity-totalprice"
  ) as HTMLButtonElement;
  cartTotalPrice.innerText = `${
    +cartPrice.innerText * +cartQuantityEle.innerText
  }`;
  const deleteCartBtn=document.querySelector(".cart-page-cartlist-items-item-quantity-delete")

  minusEle.addEventListener("click", () => {
    let cartQuantityEleVal = +cartQuantityEle.innerText;
    let cartPriceVal = +cartPrice.innerText;
    let cartTotalPriceVal = +cartTotalPrice.innerText;
    if (cartQuantityEleVal == 1) {
      const isConfirmed = window.confirm(
        "Are you sure you want to remove this item from your cart?"
      );
      if (isConfirmed) {
        alert("removed");
      } else {
        alert("not removed");
      }
    } else {
      cartQuantityEleVal--;
      cartTotalPriceVal -= cartPriceVal;
    }

    cartQuantityEle.innerText = `${cartQuantityEleVal}`;
    cartTotalPrice.innerText = `${cartTotalPriceVal}`;
  });

  plueEle.addEventListener("click", () => {
    let cartQuantityEleVal = +cartQuantityEle.innerText + 1;
    let cartPriceVal = +cartPrice.innerText;
    let cartTotalPriceVal = +cartTotalPrice.innerText;

    cartTotalPriceVal = cartPriceVal * cartQuantityEleVal;

    cartQuantityEle.innerText = `${cartQuantityEleVal}`;
    cartTotalPrice.innerText = `${cartTotalPriceVal}`;
  });

  deleteCartBtn?.addEventListener("click",()=>{
    const isDeleted=window.confirm("Are you sure you want to remove this item from your cart ?")
    if(isDeleted){
        alert("deleted")
    }else{
        alert("not deleted")
    }
  })
});
