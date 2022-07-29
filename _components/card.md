---
title: card
order: 27
intro: Cards are a nice way to display content.
import: card
items:
    - title: Basic card
      demo: |-
        <div class="card card-basic" data-orientation="portrait">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#headphones-solid"></use>
            </svg>

            <div class="card-content">
                <h5>Title</h5>
                <p>Content</p>
            </div>
        </div>

        <a href="#" class="card card-basic" data-orientation="landscape">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#headphones-solid"></use>
            </svg>

            <div class="card-content">
                <h5>Title</h5>
                <p>Content</p>
            </div>
        </a>
    - title: Image card
      demo: |-
        <div class="card card-image">
            <img src="/assets/images/m-pic-card.jpg" alt="Image">

            <h5>Title</h5>
        </div>

        <a href="#" class="card card-image">
            <img src="/assets/images/m-pic-card.jpg" alt="Image">

            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#play-solid"></use>
            </svg>

            <h5>Title</h5>
        </a>
    - title: Action card
      demo: |-
        <div class="card card-action" data-orientation="portrait">
            <div class="img-container">
                <img src="/assets/images/m-pic-card.jpg" alt="Image">

                <button class="like-button">
                    <svg class="icon">
                        <use xlink:href="/assets/icons/icon-sprite.svg#heart-solid"></use>
                    </svg>
                </button>
            </div>

            <div class="card-content">
                <div class="flexbox" data-align="center" data-justify="space-between">
                    <h5>Title</h5>

                    <span class="rating">
                        <svg class="icon">
                            <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                        </svg>

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
                    <svg class="icon">
                        <use xlink:href="/assets/icons/icon-sprite.svg#heart-solid"></use>
                    </svg>
                </button>
            </div>

            <div class="card-content">
                <div class="flexbox" data-align="center" data-justify="space-between">
                    <h5>Title</h5>

                    <span class="rating">
                        <svg class="icon">
                            <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                        </svg>

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
