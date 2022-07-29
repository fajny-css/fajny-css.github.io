---
title: Fonts
order: 1
intro: |-
    By default, Fajny CSS uses Lato for the font. You can change this by editing the file <code>scss/_variables.scss</code>.
import: fonts
items:
    - title: Titles display
      demo: |-
        <h1 class="display">Title H1 Display</h1>
        <h2 class="display">Title H2 Display</h2>
        <h3 class="display">Title H3 Display</h3>
        <h4 class="display">Title H4 Display</h4>
        <h5 class="display">Title H5 Display</h5>
    - title: Titles
      demo: |-
        <h1>Title H1</h1>
        <h2>Title H2</h2>
        <h3>Title H3</h3>
        <h4>Title H4</h4>
        <h5>Title H5</h5>
        <h6>Title H6</h6>
    - title: Paragraphs
      demo: |-
        <p>Paragraph</p>
        <p><strong>Paragraph strong</strong></p>
        <p><em>Paragraph italic</em></p>
        <p>Paragraph with <code>code</code></p>
        <p>Paragraph with <a href="#">link</a></p>
    - title: Small
      demo: <small>Small</small>
    - title: Blockquote
      demo: <blockquote>Blockquote</blockquote>
    - title: Unordered list
      demo: |-
        <ul>
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered list</li>
            <li>Unordered list</li>
        </ul>
    - title: Ordered list
      demo: |-
        <ol>
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered list</li>
            <li>Ordered list</li>
        </ol>
    - title: Description list
      demo: |-
        <dl>
            <dt>Description list title</dt>
            <dd>Description list content</dd>
            <dt>Description list title</dt>
            <dd>Description list content</dd>
            <dt>Description list title</dt>
            <dd>Description list content</dd>
            <dt>Description list title</dt>
            <dd>Description list content</dd>
            <dt>Description list title</dt>
            <dd>Description list content</dd>
        </dl>
attributes:
  - name: 'class="display" (h1, h2, h3, h4, h5)'
    example: "-"
    possible: "-"
    default: None
    required: "No"
  - name: data-color
    example: secondary-300
    possible: all_colors
    default: currentColor
    required: "No"
  - name: data-align
    example: center
    possible: text_align
    default: left
    required: "No"
---
