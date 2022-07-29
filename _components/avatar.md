---
title: avatar
order: 3
intro: "Avatars are created in three different versions: with picture, with a letter and with an icon."
import: avatar
items:
    - title: With picture
      demo: |-
        <div class="flexbox" data-gap="xs">
            <span class="avatar" data-size="xxl">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>

            <span class="avatar" data-size="xl">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>

            <span class="avatar" data-size="l">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>

            <span class="avatar" data-size="m">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>

            <span class="avatar" data-size="s">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>

            <span class="avatar" data-size="xs">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>

            <span class="avatar" data-size="xxs">
                <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
            </span>
        </div>
      code: |-
        <span class="avatar" data-size="xxl">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>

        <span class="avatar" data-size="xl">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>

        <span class="avatar" data-size="l">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>

        <span class="avatar" data-size="m">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>

        <span class="avatar" data-size="s">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>

        <span class="avatar" data-size="xs">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>

        <span class="avatar" data-size="xxs">
            <img src="/assets/images/s-pic-avatar.jpg" alt="Avatar">
        </span>
    - title: With a letter
      demo: |-
        <div class="flexbox" data-gap="xs">
            <span class="avatar" data-size="xxl" data-color="primary">A</span>
            <span class="avatar" data-size="xl" data-color="secondary">A</span>
            <span class="avatar" data-size="l" data-color="success">A</span>
            <span class="avatar" data-size="m" data-color="danger">A</span>
            <span class="avatar" data-size="s" data-color="warning">A</span>
            <span class="avatar" data-size="xs" data-color="gray">A</span>
            <span class="avatar" data-size="xxs" data-color="black">A</span>
        </div>
      code: |-
        <span class="avatar" data-size="xxl" data-color="primary">A</span>
        <span class="avatar" data-size="xl" data-color="secondary">A</span>
        <span class="avatar" data-size="l" data-color="success">A</span>
        <span class="avatar" data-size="m" data-color="danger">A</span>
        <span class="avatar" data-size="s" data-color="warning">A</span>
        <span class="avatar" data-size="xs" data-color="gray">A</span>
        <span class="avatar" data-size="xxs" data-color="black">A</span>
    - title: With an icon
      demo: |-
        <div class="flexbox" data-gap="xs">
            <span class="avatar" data-size="xxl" data-color="primary">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>

            <span class="avatar" data-size="xl" data-color="secondary">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>

            <span class="avatar" data-size="l" data-color="success">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>

            <span class="avatar" data-size="m" data-color="danger">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>

            <span class="avatar" data-size="s" data-color="warning">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>

            <span class="avatar" data-size="xs" data-color="gray">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>

            <span class="avatar" data-size="xxs" data-color="black">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
                </svg>
            </span>
        </div>
      code: |-
        <span class="avatar" data-size="xxl" data-color="primary">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>

        <span class="avatar" data-size="xl" data-color="secondary">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>

        <span class="avatar" data-size="l" data-color="success">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>

        <span class="avatar" data-size="m" data-color="danger">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>

        <span class="avatar" data-size="s" data-color="warning">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>

        <span class="avatar" data-size="xs" data-color="gray">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>

        <span class="avatar" data-size="xxs" data-color="black">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#user-solid"></use>
            </svg>
        </span>
attributes:
    - name: data-size
      example: m
      possible: spacers
      default: xxl
      required: "No"
    - name: data-color
      example: success
      possible: colors_short
      default: primary
      required: "No"
---
