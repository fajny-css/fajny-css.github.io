---
title: video
order: 2
intro: Container for videos. Be careful, the HTML 5 autoplay function only works with the sound off.
import: video
items:
    - title: HTML video with controls
      demo: |-
        <video controls>
            <source src="/assets/images/video-html.mp4" />
            Your browser doesn't support the video tag.
        </video>
    - title: HTML video with autoplay
      demo: |-
        <video autoplay muted loop>
            <source src="/assets/images/video-html.mp4" />
            Your browser doesn't support the video tag.
        </video>
    - title: YouTube video
      demo: |-
        <iframe src="https://www.youtube.com/embed/XEfDYMngJeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="youtube"></iframe>
attributes:
    - name: data-fit
      example: contain
      possible: object_fit
      default: None
      required: "No"
---
