<script setup lang="ts">
// Define the method to scroll to a specific section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>


<template>
    <section class="contact">
        <div class="bari-produce-logo">
            <img src="../assets/bari-produce-logo.png">
        </div>
        <div id="contact" class="contact-wrapper">
            <div class="contact-navbar">
                <nav class="contact-nav-links-wrapper">
                    <a @click.prevent="scrollToSection('home')">Home</a>
                    <a @click.prevent="scrollToSection('about')">About</a>
                    <a @click.prevent="scrollToSection('products')">Product</a>
                    <a @click.prevent="scrollToSection('recipes')">Recipe</a>
                    <a @click.prevent="scrollToSection('contact')">Contact</a>
                </nav>
            </div>
            <div class="address-wrapper">
                <div class="address-column-wrapper">
                    <div class="address">
                        <h2>Bari Produce LLC</h2>
                        <p>680 W. Shaw Ave.<br>
                            Suite 208<br>
                            Fresno, CA 93704</p>
                    </div>
                    <div class="address">
                        <h2>Phone</h2>
                        <p>Sales: (559) 560-5600<br>
                            Fax: (559) 674-4911</p>

                    </div>
                </div>
                <div class="address-column-wrapper">
                    <div class="address">
                        <h2>Peter's Fruit Farm</h2>
                        <p><i>Shed Address</i><br>
                            41018 Road 56<br>
                            Reedley, CA 93654</p>
                    </div>
                    <div class="address">
                        <h2>Phone</h2>
                        <p>Shipping: 559-638-8173</p>
                    </div>
                </div>
            </div>

            <div class="email-wrapper">
                <div class="email-wrapper-1">
                    <div class="email">
                        <h2>Ryan Logoluso</h2>
                        <button>
                            <a href="mailto:RLogoluso@bariproduce.com">Email</a>
                        </button>
                    </div>
                    <div class="email">
                        <h2>Justin D. Bedwell</h2>
                        <button>
                            <a href="mailto:JBedwell@bariproduce.com">Email</a>
                        </button>
                    </div>
                    <div class="email">
                        <h2>Sal Pacheco</h2>
                        <button>
                            <a href="mailto:SPacheco@bariproduce.com">Email</a>
                        </button>
                    </div>
                    <div class="email">
                        <h2>Tina Haga</h2>
                        <button>
                            <a href="mailto:THaga@bariproduce.com">Email</a>
                        </button>
                    </div>
                    <div class="email">
                        <h2>Jeff Olson</h2>
                        <button>
                            <a href="mailto:JOlson@bariproduce.com">Email</a>
                        </button>
                    </div>
                    <div class="email">
                        <h2>Gene Bruce</h2>
                        <button>
                            <a href="mailto:GBruce@bariproduce.com">Email</a>
                        </button>
                    </div>
                </div>
                <div class="email-wrapper-2">
                    <div class="email">
                        <h2>Jim Stilwell</h2>
                        <button>
                            <a href="mailto:JStilwell@bariproduce.com">Email</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p>Bari Produce does not collect visitor data from our site. Bari Produce does monitor the number of
                    site views
                    and other non-visitor specific data concerning the performance of the site in general. Regarding
                    information
                    that is provided to Bari Produce; Bari Produce does not sell, give, or trade any information to any
                    third
                    parties for data-mining, marketing, or any other purpose. Your privacy is of the utmost concern to
                    Bari
                    Produce. The information on our website, and any information we solicit from you, or that you
                    provide to us in
                    response to what you may read on our website, is not intended as an offer to sell, or the
                    solicitation of an
                    offer to buy, any goods or services. It is for informational purposes only.</p>
            </div>
            <div>
                <p>© 2024 Bari Produce LLC | Site designed by Berta Kang</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
button {
    color: bisque;
}

.contact {
    margin: 0px 32px 0px 32px;
}

.nav-link {
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    color: black;
}

h2 {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 600;
}

img {
    height: 100%;
    width: 100%;
}

p {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color: black;
}

.bari-produce-logo {
    align-items: center;
    width: 350px;
    height: auto;
    object-fit: contain;
}

.contact {
    padding-top: 3.5rem;
    display: flex;
    flex-direction: column;
}

.contact-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: black;
    gap: 16px;
}

.contact-nav-links-wrapper {
    display: flex;
    flex-direction: column;
}

.address-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
}


.email-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.address {
    padding: 8px;
}

.email {
    display: flex;
    flex-direction: row;
    padding: 8px;
    align-items: center;
    justify-content: space-between;
}

@media screen and (max-width: 667px) {
    .contact {
        margin: 0px 16px 0px 16px;
    }

    .nav-link {
        font-family: 'Lato', sans-serif;
        font-size: 22px;
        text-transform: uppercase;
        color: black;
    }

    h2 {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 600;
    }

    img {
        height: 100%;
        width: 100%;
    }

    p {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        color: black;
    }

    .bari-produce-logo {
        width: 100%;
        object-fit: contain;
    }

    img {
        width: 200px;
        height: auto;
    }

    .contact {
        padding-top: 3.5rem;
        display: flex;
        flex-direction: column;
    }

    .contact-wrapper {
        display: flex;
        flex-direction: column;
        color: black;
        gap: 16px;
    }

    .contact-nav-links-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .address-wrapper {
        display: flex;
        flex-direction: column;
    }


    .email-wrapper {
        display: flex;
        flex-direction: column;
    }

    .email-wrapper-1 {
        display: flex;
        flex-direction: column;
    }

    .email-wrapper-2 {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
    }

    .address {
        padding: 8px;
    }

    .email {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: bisque;
    }

}
</style>
