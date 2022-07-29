---
title: badge
order: 8
intro: "Badges can be used to notify users about important informations: new items, unread messages, etc."
import: badge
items:
    - title: Empty
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <span class="badge" data-size="xxl" data-color="primary"></span>
            <span class="badge" data-size="xl" data-color="secondary"></span>
            <span class="badge" data-size="l" data-color="success"></span>
            <span class="badge" data-size="m" data-color="danger"></span>
            <span class="badge" data-size="s" data-color="warning"></span>
            <span class="badge" data-size="xs" data-color="gray"></span>
            <span class="badge" data-size="xxs" data-color="black"></span>
        </div>
      code: |-
        <span class="badge" data-size="xxl" data-color="primary"></span>
        <span class="badge" data-size="xl" data-color="secondary"></span>
        <span class="badge" data-size="l" data-color="success"></span>
        <span class="badge" data-size="m" data-color="danger"></span>
        <span class="badge" data-size="s" data-color="warning"></span>
        <span class="badge" data-size="xs" data-color="gray"></span>
        <span class="badge" data-size="xxs" data-color="black"></span>
    - title: With number
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <span class="badge" data-size="xxl" data-color="primary">1</span>
            <span class="badge" data-size="xl" data-color="secondary">1</span>
            <span class="badge" data-size="l" data-color="success">1</span>
            <span class="badge" data-size="m" data-color="danger">1</span>
            <span class="badge" data-size="s" data-color="warning">1</span>
            <span class="badge" data-size="xs" data-color="gray">1</span>
            <span class="badge" data-size="xxs" data-color="black">1</span>
        </div>
      code: |-
        <span class="badge" data-size="xxl" data-color="primary">1</span>
        <span class="badge" data-size="xl" data-color="secondary">1</span>
        <span class="badge" data-size="l" data-color="success">1</span>
        <span class="badge" data-size="m" data-color="danger">1</span>
        <span class="badge" data-size="s" data-color="warning">1</span>
        <span class="badge" data-size="xs" data-color="gray">1</span>
        <span class="badge" data-size="xxs" data-color="black">1</span>
    - title: With icon
      demo: |-
        <div class="flexbox" data-gap="xs" data-wrap="wrap">
            <span class="badge" data-size="xxl" data-color="primary">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
            <span class="badge" data-size="xl" data-color="secondary">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
            <span class="badge" data-size="l" data-color="success">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
            <span class="badge" data-size="m" data-color="danger">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
            <span class="badge" data-size="s" data-color="warning">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
            <span class="badge" data-size="xs" data-color="gray">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
            <span class="badge" data-size="xxs" data-color="black">
                <svg class="icon">
                    <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
                </svg>
            </span>
        </div>
      code: |-
        <span class="badge" data-size="xxl" data-color="primary">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
        
        <span class="badge" data-size="xl" data-color="secondary">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
        
        <span class="badge" data-size="l" data-color="success">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
        
        <span class="badge" data-size="m" data-color="danger">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
        
        <span class="badge" data-size="s" data-color="warning">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
        
        <span class="badge" data-size="xs" data-color="gray">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
        
        <span class="badge" data-size="xxs" data-color="black">
            <svg class="icon">
                <use xlink:href="/assets/icons/icon-sprite.svg#star-full-solid"></use>
            </svg>
        </span>
attributes:
    - name: data-size
      example: xl
      possible: spacers
      default: xxl
      required: "No"
    - name: data-color
      example: secondary
      possible: colors_short
      default: primary
      required: "No"
---
