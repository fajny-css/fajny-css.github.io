---
title: card
order: 27
intro: Cards are a nice way to display content.
import: card
items:
    - title: Basic card
      demo: |-
        <div class="flexbox" data-col="2" data-gap="s" data-align="flex-start">
            <div class="card card-basic" data-orientation="portrait">
                <fajny-icon icon-name="headphones-solid"></fajny-icon>

                <div class="card-content">
                    <h5>Title</h5>
                    <p>Content</p>
                </div>
            </div>

            <a href="#" class="card card-basic" data-orientation="landscape">
                <fajny-icon icon-name="headphones-solid"></fajny-icon>

                <div class="card-content">
                    <h5>Title</h5>
                    <p>Content</p>
                </div>
            </a>
        </div>
      code: |-
        <div class="card card-basic" data-orientation="portrait">
            <fajny-icon icon-name="headphones-solid"></fajny-icon>

            <div class="card-content">
                <h5>Title</h5>
                <p>Content</p>
            </div>
        </div>

        <a href="#" class="card card-basic" data-orientation="landscape">
            <fajny-icon icon-name="headphones-solid"></fajny-icon>

            <div class="card-content">
                <h5>Title</h5>
                <p>Content</p>
            </div>
        </a>
    - title: Image card
      demo: |-
        <div class="flexbox" data-col="2" data-gap="s">
            <div class="card card-image">
                <img src="/assets/images/m-pic-card.jpg" alt="Image">

                <h5>Title</h5>
            </div>

            <a href="#" class="card card-image">
                <img src="/assets/images/m-pic-card.jpg" alt="Image">

                <fajny-icon icon-name="play-solid"></fajny-icon>

                <h5>Title</h5>
            </a>
        </div>
      code: |-
        <div class="card card-image">
            <img src="/assets/images/m-pic-card.jpg" alt="Image">

            <h5>Title</h5>
        </div>

        <a href="#" class="card card-image">
            <img src="/assets/images/m-pic-card.jpg" alt="Image">

            <fajny-icon icon-name="play-solid"></fajny-icon>

            <h5>Title</h5>
        </a>
    - title: Action card
      demo: |-
        <div class="flexbox" data-col="2" data-gap="s" data-align="flex-start">
            <div class="card card-action" data-orientation="portrait">
                <div class="img-container">
                    <img src="/assets/images/m-pic-card.jpg" alt="Image">

                    <button class="like-button">
                        <fajny-icon icon-name="heart-solid"></fajny-icon>
                    </button>
                </div>

                <div class="card-content">
                    <div class="flexbox" data-align="center" data-justify="space-between">
                        <h5>Title</h5>

                        <span class="rating">
                            <fajny-icon icon-name="star-full-solid"></fajny-icon>

                            4.9
                        </span>
                    </div>

                    <p>Content</p>

                    <div class="flexbox" data-align="center" data-justify="flex-end">
                        <button class="btn">Button</button>
                    </div>
                </div>
            </div>

            <div class="card card-action" data-orientation="landscape">
                <div class="img-container">
                    <img src="/assets/images/m-pic-card.jpg" alt="Image">

                    <button class="like-button">
                        <fajny-icon icon-name="heart-solid"></fajny-icon>
                    </button>
                </div>

                <div class="card-content">
                    <div class="flexbox" data-align="center" data-justify="space-between">
                        <h5>Title</h5>

                        <span class="rating">
                            <fajny-icon icon-name="star-full-solid"></fajny-icon>

                            4.9
                        </span>
                    </div>

                    <p>Content</p>

                    <div class="flexbox" data-align="center" data-justify="flex-end">
                        <button class="btn">Button</button>
                    </div>
                </div>
            </div>
        </div>
      code: |-
        <div class="card card-action" data-orientation="portrait">
            <div class="img-container">
                <img src="/assets/images/m-pic-card.jpg" alt="Image">

                <button class="like-button">
                    <fajny-icon icon-name="heart-solid"></fajny-icon>
                </button>
            </div>

            <div class="card-content">
                <div class="flexbox" data-align="center" data-justify="space-between">
                    <h5>Title</h5>

                    <span class="rating">
                        <fajny-icon icon-name="star-full-solid"></fajny-icon>

                        4.9
                    </span>
                </div>

                <p>Content</p>

                <div class="flexbox" data-align="center" data-justify="flex-end">
                    <button class="btn">Button</button>
                </div>
            </div>
        </div>

        <div class="card card-action" data-orientation="landscape">
            <div class="img-container">
                <img src="/assets/images/m-pic-card.jpg" alt="Image">

                <button class="like-button">
                    <fajny-icon icon-name="heart-solid"></fajny-icon>
                </button>
            </div>

            <div class="card-content">
                <div class="flexbox" data-align="center" data-justify="space-between">
                    <h5>Title</h5>

                    <span class="rating">
                        <fajny-icon icon-name="star-full-solid"></fajny-icon>

                        4.9
                    </span>
                </div>

                <p>Content</p>

                <div class="flexbox" data-align="center" data-justify="flex-end">
                    <button class="btn">Button</button>
                </div>
            </div>
        </div>
attributes:
    - name: data-orientation (basic and action)
      example: landscape
      possible: '"portrait" | "landscape"'
      default: portrait
      required: "No"
---
