---
title: Dropdown
category: components
intro: "Dropdowns have two versions, one with JavaScript and one without."
files:
    - components/dropdown
items:
    -
        title: On hover (CSS)
        demo: |-
            <div class="container-dropdown dropdown-hover">
                <a href="#" class="btn btn-primary btn-background btn-icon btn-icon-right">Button <i class="icon icon-caret-down-solid"></i></a>

                <ul class="dropdown">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </div>
    -
        title: On click (JS)
        demo: |-
            <div class="container-dropdown dropdown-click">
                <button class="btn btn-primary btn-background btn-icon btn-icon-right" onclick="openDropdown(this)">Button <i class="icon icon-caret-down-solid"></i></button>

                <ul class="dropdown">
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
            </div>
---
