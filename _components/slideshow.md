---
title: slideshow
order: 25
intro: Slideshows are a nice way to show images or changing content.
import: slideshow
script: slideshow
items:
    - title: With controls and pagination
      demo: |-
        <div class="slideshow" data-controls data-pagination>
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1636390785258-f59cd6883a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="1" />
            </div>

            <div class="slide">
                <img src="https://images.unsplash.com/photo-1636390785299-b4df455163dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="2" />
            </div>

            <div class="slide">
                <img src="https://images.unsplash.com/photo-1634705146926-b8fbca28f431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1928&q=80"
                    alt="3" />
            </div>

            <div class="slide">
                <img src="https://images.unsplash.com/photo-1636207543865-acf3ad382295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="4" />
            </div>
        </div>
      code: |-
        <div class="slideshow" data-controls data-pagination>
            <div class="slide">
                <img src="path/to/image.jpg" alt="Alt" />
            </div>
        </div>
    - title: Automatic
      demo: |-
        <div class="slideshow" data-autoplay="2000">
            <div class="slide">
                <img src="https://images.unsplash.com/photo-1636390785258-f59cd6883a03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="1" />
            </div>

            <div class="slide">
                <img src="https://images.unsplash.com/photo-1636390785299-b4df455163dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                    alt="2" />
            </div>

            <div class="slide">
                <img src="https://images.unsplash.com/photo-1634705146926-b8fbca28f431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1928&q=80"
                    alt="3" />
            </div>

            <div class="slide">
                <img src="https://images.unsplash.com/photo-1636207543865-acf3ad382295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="4" />
            </div>
        </div>
      code: |-
        <div class="slideshow" data-autoplay="2000">
            <div class="slide">
                <img src="path/to/image.jpg" alt="Alt" />
            </div>
        </div>
attributes:
    - name: data-autoplay
      example: 3000
      possible: "-"
      default: 1000, which is the default if there is no controls or pagination
      required: "No"
    - name: data-controls
      example: "-"
      possible: "-"
      default: None
      required: "No"
    - name: data-pagination
      example: "-"
      possible: "-"
      default: None
      required: "No"
---
