/* =========================================================
   DECISIONENGINE / CARDS
   Featured inventory and lightweight site behavior
========================================================= */


/* =========================================================
   FEATURED CARD DATA

   Later, this can come from a database/API instead.
   For tonight, we keep it extremely simple.

   To change a card:
   - title
   - category
   - description
   - price
   - image
   - link
========================================================= */

const featuredCards = [

  {
    title: "Ronald Acuña Jr. Topps Black /50",
    category: "Baseball",
    description:
      "Low-numbered Acuña parallel with strong collector appeal and limited supply.",
    price: "Featured",
    image: "",
    link: "https://www.ebay.com/usr/decardvault"
  },

  {
    title: "Lamine Yamal Prizm World Cup Pandora",
    category: "Soccer",
    description:
      "Early Yamal issue with premium visual appeal and long-term global collector interest.",
    price: "Featured",
    image: "",
    link: "https://www.ebay.com/usr/decardvault"
  },

  {
    title: "Cristiano Ronaldo FIFA 365 Icon",
    category: "Soccer",
    description:
      "A collector-friendly Ronaldo card built around one of the biggest names in global sports.",
    price: "Featured",
    image: "",
    link: "https://www.ebay.com/usr/decardvault"
  },

  {
    title: "Zinedine Zidane Futera Unique /32",
    category: "Soccer",
    description:
      "Scarce numbered legend card combining a globally recognized player with a small print run.",
    price: "Featured",
    image: "",
    link: "https://www.ebay.com/usr/decardvault"
  },

  {
    title: "Raúl Early Real Madrid Issue",
    category: "Soccer",
    description:
      "Early-career card from one of Real Madrid's defining stars and a harder card to replace.",
    price: "Featured",
    image: "",
    link: "https://www.ebay.com/usr/decardvault"
  },

  {
    title: "Ashlyn Krueger Signature Relic",
    category: "Tennis",
    description:
      "Young-player autograph and memorabilia card with a visually distinctive premium format.",
    price: "Featured",
    image: "",
    link: "https://www.ebay.com/usr/decardvault"
  }

];


/* =========================================================
   CARD TILE CREATOR
========================================================= */

function createCardTile(card) {

  const article = document.createElement("article");

  article.className = "card-tile";


  /* -----------------------------------------
     IMAGE AREA

     If no image has been assigned yet,
     the site displays a styled placeholder.
  ----------------------------------------- */

  let imageMarkup;

  if (card.image && card.image.trim() !== "") {

    imageMarkup = `
      <img
        src="${card.image}"
        alt="${card.title}"
        loading="lazy"
      />
    `;

  } else {

    imageMarkup = `
      <div class="card-placeholder">
        <div>
          <strong>${card.category}</strong>
          <br><br>
          Card image coming soon
        </div>
      </div>
    `;

  }


  /* -----------------------------------------
     CARD CONTENT
  ----------------------------------------- */

  article.innerHTML = `

    <div class="card-image-wrap">

      ${imageMarkup}

    </div>


    <div class="card-body">

      <div class="card-eyebrow">
        ${card.category}
      </div>


      <h3 class="card-title">
        ${card.title}
      </h3>


      <p class="card-meta">
        ${card.description}
      </p>


      <div class="card-footer">

        <span class="card-price">
          ${card.price}
        </span>


        <a
          class="card-link"
          href="${card.link}"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on eBay →
        </a>

      </div>

    </div>

  `;


  return article;

}


/* =========================================================
   RENDER FEATURED CARDS
========================================================= */

function renderFeaturedCards() {

  const grid =
    document.getElementById("featured-grid");


  if (!grid) {
    return;
  }


  grid.innerHTML = "";


  featuredCards.forEach(card => {

    const tile =
      createCardTile(card);

    grid.appendChild(tile);

  });

}


/* =========================================================
   IMAGE ERROR HANDLING

   If we later mistype an image filename,
   the broken-image symbol will not destroy
   the layout.
========================================================= */

function setupImageFallbacks() {

  const images =
    document.querySelectorAll(
      ".card-image-wrap img"
    );


  images.forEach(image => {

    image.addEventListener(
      "error",
      function () {

        const container =
          this.parentElement;


        container.innerHTML = `

          <div class="card-placeholder">

            <div>

              <strong>
                Image unavailable
              </strong>

              <br><br>

              Check image filename

            </div>

          </div>

        `;

      }
    );

  });

}


/* =========================================================
   SMOOTH INTERNAL NAVIGATION
========================================================= */

function setupSmoothNavigation() {

  const internalLinks =
    document.querySelectorAll(
      'a[href^="#"]'
    );


  internalLinks.forEach(link => {

    link.addEventListener(
      "click",
      function (event) {

        const targetId =
          this.getAttribute("href");


        if (
          !targetId ||
          targetId === "#"
        ) {
          return;
        }


        const target =
          document.querySelector(
            targetId
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      }
    );

  });

}


/* =========================================================
   INITIALIZE SITE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    renderFeaturedCards();

    setupImageFallbacks();

    setupSmoothNavigation();

  }
);
