---
title: image
order: 1
intro: |-
    Container for images. If you want to use a <code>&lt;picture&gt;</code> tag, import each image to your site in 3 different sizes, and call them <code>s-name-of-image.jpg</code>, <code>m-name-of-image.jpg</code> and <code>l-name-of-image.jpg</code>.
import: image
items:
    - title: Auto height
      demo: |-
        <img src="/assets/images/l-pic-img.jpg" alt="Image">
    - title: Fixed height, cover
      demo: |-
        <img src="/assets/images/l-pic-img.jpg" alt="Image" data-fit="cover" height="250">
    - title: Fixed height, contain
      demo: |-
        <img src="/assets/images/l-pic-img.jpg" alt="Image" data-fit="contain" height="250">
    - title: With caption
      demo: |-
        <div class="img-container">
            <img src="/assets/images/l-pic-img.jpg" alt="Image" data-fit="cover" height="300">

            <p class="caption">Caption</p>
        </div>
attributes:
    - name: data-fit
      example: cover
      possible: object_fit
      default: None
      required: "No"
---
