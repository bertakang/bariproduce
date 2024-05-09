<script setup lang="ts">
definePageMeta({
  layout: 'home'
})
</script>

<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <section id="home">
    <div class="wrapper">
      <img src="../assets/cherry-devider.jpg" alt="BARI Produce cherries.">
    </div>
  </section>
  <section id="about">
    <div class="sticky-grid">
      <div class="image-wrapper">
        <div class="sticky">
          <img class="sticky" src="../assets/about.jpg" alt="Description of the image">
        </div>
      </div>
      <div class="scrollable-about">
        <div class="text-block">
          <h1>About Us</h1>
          <p>Bari Produce LLC was created to market high quality tree fruit and table grapes under the well known
            Bari®
            and Logoluso® brands. With Frank A. Logoluso Farms as our foundation, Bari Produce brings together other
            quality-minded growers to expand the Bari® labels and to build upon the Mr. Logoluso’s legacy.</p>
          <p>“Growing grapes is a family tradition,” says Frank Logoluso. He learned the trade from his father,
            Panteleao
            Logoluso who moved to Madera, CA from Bari, Italy around 1915.</p>
          <p>When Panteleao was a child growing up in Bari, people shopped daily in the market square to buy the
            freshest
            available produce. Frank always had fond memories of his father’s memories of the marketplace and created
            the
            Bari® label as a tribute to not only his father, but to the “old school” way of life.</p>
          <p>The Bari® brand grape label was created 60 years ago and is reserved for only the best of the best in
            terms
            of size, quality and taste. The Bari® brand today means the same as it did in 1948….consistent,
            top-quality
            fruit!</p>
          <p>Bari Produce LLC ships our produce domestically as well as internationally; reaching over 23
            international
            markets. Our efforts in the field ensure consistently top-quality produce in today’s marketplace.</p>
          <p>Thank you for stopping by our website and familiarizing yourself with Bari Produce LLC. Our desire is to
            continue delivering our family touch in every piece of fruit we send across the globe.</p>
        </div>
      </div>
    </div>
  </section>
  <section id="products">
    <div class="third-divided">
      <div class="two-thirds">
        <div class="text-block">
          <h1>Quality, consistency and great eating quality are the expectation when apricots, peaches, plums and
            nectarines are placed in our label.</h1>
          <p>Bari Produce stone fruit is packed in the premium BARI® label. Certain varieties have greater consumer
            appeal, but our efforts in the field ensure each varieties’ highest eating attributes and our efforts in
            packing boost quality on the shelf. Early May starts the season with apricots and several early peaches
            and
            nectarines. The Giant Lorna Apricot provides big size and big flavor in June. We provide most of our
            volume
            in
            yellow peaches and nectarines, with good amounts of white flesh, as well as plums and pluots.</p>
        </div>
      </div>
      <div class="one-third-image">
        <div class="product-image-wrapper">
          <div class="product-image">
            <img src="../assets/stonefruit.png" alt="Description of the image">
          </div>
        </div>
      </div>
    </div>
  </section>
  <FruitSection></FruitSection>
  <div class="third-divided">
    <div class="two-thirds">
      <div class="text-block">
        <h1>We put a lot of energy into our grapes during the off and growing seasons to bring out their highest
          eating
          attributes.</h1>
        <p>Bari Produce is best known for our BARI® and LOGOLUSO® table grape brands that have been in existence for
          well
          over 50 years. Quality, consistency and great eating quality are the expectation when grapes are placed in
          these
          labels. Our blend of new varieties (Autumn King & Scarlet Royals) as well as tried-and-true varieties
          (Thompson
          Seedless and Crimson Seedless) allows us to provide a full spectrum of great eating grapes.</p>
        <p>Our table grape varieties include: Flames, Thomcords, Ivory, Champagne, Valley Pearls, Red Globes, Summer
          Royals, Autumn Royal, Autumn King, Scarlet Royal, and Vintage Red.</p>
      </div>
    </div>
    <div class="one-third-image">
      <div class="product-image-wrapper">
        <div class="product-image">
          <img src="../assets/tablegrapes.png" alt="Description of the image">
        </div>
      </div>
    </div>
  </div>
  <GrapeSection></GrapeSection>
  <RecipeSection></RecipeSection>
</template>

<style scoped>
section {
  display: flex;
  min-height: 100vh;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* Home section */
#home {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}

.wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  ;
}

/* About section */
.sticky-grid {
  display: flex;
  flex-direction: row;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.sticky-grid::-webkit-scrollbar {
  display: none;
}

.image-wrapper {
  flex: 1;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  min-height: 100vh;
}

.scrollable-about {
  flex: 2;
}

.text-block {
  flex: 2;
  padding: 100px 36px;
  line-height: 38px;
}

/*Product section*/

.third-divided {
  display: flex;
  flex-direction: row;
  width: calc(100vw - var(--scrollbar-width));
  flex: 1;
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow-x: auto;
  background-color: #A78895;
}

.card-wrapper-horizontal {
  list-style: none;
  display: flex;
  flex-direction: row;
}

.card {
  display: flex;
  flex-direction: column;
  border: 1px solid lightgrey;
  border-radius: 16px;
  padding: 32px;
  margin: 16px 8px;
}

.product-image-wrapper {
  height: 100%;
  align-content: center;
}

.one-third-list {
  flex: 1;
  overflow-y: hidden;
}

.one-third-list.scroll {
  flex: 1;
  overflow-y: scroll;
}

.one-third-image {
  position: sticky;
  flex: 1;
  height: 100vh;
  width: auto;
}

.two-thirds {
  display: flex;
  align-items: center;
  flex: 2;
  padding: 0px;

}

.sticky {
  position: sticky;
  z-index: 1;
}

@media screen and (max-width: 991px) {
  /* about section */

  .image-wrapper {
    flex: 1;
  }

  .scrollable-about {
    flex: 1;
  }

  .third-divided {
    flex-direction: column;
  }

  .text-block {
    padding: 100px 16px;
    line-height: 38px;
  }
}

@media screen and (max-width: 667px) {
  .sticky-grid {
    display: flex;
    flex-direction: column;
  }

  .third-divided {
    display: flex;
    flex-direction: column;
  }
}
</style>
