const productContainer = document.querySelector(".featured-center");

export async function getData() {
  const resp = await fetch("products.json");
  const data = await resp.json();
  console.log(data.items);

  for (let x = 0; x < data.items.length; x++) {
    let html = `
    <article class="tour-card">
          <div class="tour-img-container">
            <img src="${data.items[x].image}" class="tour-img" />
            <p class="tour-date">${data.items[x].price}kr</p>
          </div>
          <!-- tour info -->
          <div class="tour-info">
            <div class="tour-title">
              <h4>${data.items[x].title}</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel
              voluptate soluta illum beatae mollitia minus non dolor molestiae
              praesentium.
            </p>
            <div class="tour-footer">
              <p>
                <span>
                  <i class="fas fa-map"></i>
                  nyhet
                </span>
              </p>
              <button class="btn">köp</button>
            
            </div>
          </div>
        </article>
    `;
    productContainer.insertAdjacentHTML("afterbegin", html);
  }
}
getData();

document.querySelectorAll(".scroll-link").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let id = e.target.getAttribute("href").slice(1);
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".nav-toggle").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("show-links");
});

// bygg en sökfunktion som visar data utefter söket
