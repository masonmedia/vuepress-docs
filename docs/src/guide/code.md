---
title: Code
---

# Coding Conventions
---

## Intro

TAM code is in a state of constant evolution and development. While standard practices are in place, they are always being updated and modified as courses and contexts dictate. 

## Current state

TAM is currently overhauling a number of practices and standards. This will no doubt lead to a number of ongoing updates however we can begin to log these here:

## HTML

HTML is in the process of being streamlined so code is clean and DRY.

Items for improving effeciency:

1. **Develop and implement a standardized set of layout components** that can be reused with ease. At minimum, these would including a **banner**, a **section wrapper** (containers etc), and **footer**. 
2. Only add **padding** to section wrappers, not margin (this throws off layout).
3. Only add padding to **ONE** element in a wrapper section where possible (see below). 

<code-group>
<code-block title="Bad">
```bash
<b-container fluid class="px-0 p-lg-5">
    <b-container class="py-4 px-3 px-md-4 py-lg-5">
        <b-row class="p-5">
            <b-col>
                <h1>Title goes here</h1>
            </b-col>
        </b-row>
    </b-container>
</b-container>
```
</code-block>

<code-block title="Good">
```bash
<b-container fluid>
    <b-container class="py-4">
        <b-row>
            <b-col>
                <h1>Title goes here</h1>
            </b-col>
        </b-row>
    </b-container>
</b-container>
```
</code-block>
</code-group>

This could be a case for global styles which apply to reused components across an application i.e. removing all x-axis padding from container-fluid elements:

<code-group>
<code-block title="SCSS">
```bash
.container-fluid {
   @extend .px-0;
}
```
</code-block>
</code-group>

## SCSS/CSS

1. Delete and/or do not leave empty classes i.e. `class=""`.
2. Be careful to not repeat classes, especially on the same element i.e.
```
<b-img fluid class="img-fluid"></b-img>
```
3. As much as possible, make use of BootstrapVue native classes: 
    - Avoid creating custom classes for things like padding and margins where BS utilities already exist.
    - Avoid duplicating styles and properties in different classes
    - If a class might be a reused element, create a new utility class for it: i.e. `.lh-base`, or `.lh-tight` for specific line-height properties.
    - Group global styles into partials of similar styles i.e. _colors, _borders, _buttons. No element is really too small to get a partial so long as it will be reused.

## Class order

A helpful approach when using atomic css, where multiple classes litter an HTML page, is to create a standardized method of ordering classes when writing css so developers can expect a consistent, linear hierarchy.

For example the convention could be loosely **size, position, bg-image/bg-color, spacing, decoration**

<code-group>
<code-block title="Example order">
```bash
<b-col class="min-vh-100 w-100 bg-citi-blue px-3 py-5 my-auto border rounded shadow-lg">
    <b-img class="w-100 p-5 m-3 img-thumbnail rounded shadow">
</b-col>
```
</code-block>
</code-group>

<!-- big time -->

i.e.
- size (height + width) 
- positioning (absolute, relative, z-index)
- background-image or background-color
- padding
- margin
- borders
- shadows  

## CSS, Components, and the CLI

The Vue CLI opens up a component-specific approach to CSS. Where components are small units of UI, specific styling can be added directly to the component to manage applications as they scale.

The trick to this however is being careful: 
1. To not duplicate styles across components;
2. To not add styles that might affect global elements (i.e. body, main) within a component
3. To not create classes that might be used elsewhere (i.e. a line divider, a background image, a font-size), or that might conflict with other styles.

## Layout

Though layouts all differ, having a consistent approach to grid and spacing of elements can help devs work more efficiently:

1. Where possible, always ensure columns add up to 12, so no odd wrapping or breaking occurs.
2. Suggest using the **`lg`** column breakpoint as a baseline. It almost always ensures that two-column content breaks at a better point before text and images get squeezed.
3. Use a consistent naming convention for directive and props based on level of layout importance: i.e. column size, alignment, functions, styling, animation:

<code-group>
<code-block title="Example order">
```bash
<b-col lg="" alignment="" class="" :class="" @functions animation-data-attributes=""></b-col>
```
</code-block>
</code-group>

4. It also makes sense to stack/line-break elements in cases like the above where multiple elements are added:

<code-group>
<code-block title="Example stacking">
```bash
<b-col 
lg="" 
alignment="" 
class="" 
:class="" 
@function 
animation-data-attributes=""></b-col>
```
</code-block>
</code-group>

## JS

