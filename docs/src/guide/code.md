---
title: Code
---

# Coding Conventions
---

## Intro

TAM code is in a state of constant evolution and development. While standard practices are in place, they are always being updated and modified as courses and contexts dictate. 

## Current state

TAM is currently updating its stack to use the **Vue CLI**. As such these docs will provide a store of ongoing information and resources as we move through this process.

## Standards and conventions

Outside of using Bootstrap, When it comes to building WBT modules TAM development does not have a standardized build flow or set of standardized conventions. This pertains to all aspects of our code including HTML/layout, CSS/SASS, JS, JSON, images, folder stucture, and now with the CLI - component design, etc. While this in part is due to the constantly changing specifications of the design team, moving forward it is advised that the development team begin to formulate a consistent approach to coding that can help us grow, maintain current projects, and develop new concepts.

This involves creating a set of guidelines - across languages and build phases - that can shape the way we code, creating a more streamlined workflow, with reusable and repetitive formats, that can result in a more efficient, and easily maintainable codebase.

See below for more detail on options for developing a common standard.

## RTE Issues

The longstanding 'RTE' approach to building WBTs entailed largely duplicating project folders and making changes to suit different content. While efficient in a sense, there were/are numerous problems, i.e.:   

- code bloat from having all manner of code and files copied over from project to project that had no use;
- Repetitive code in numerous locations throughout a project folder;
- Which lead to conflicting code (i.e. CSS styles);
- Empty CSS classes, and repeated classes on the same element;
- Overflowing image folders containing files not included in the specific course;
- Commented code littered through projects with no notes as to why or if it could be deleted;
- All of which affected project load time, and developer fear as to what is safe to delete and what is essential;

This approach to building, in addition to the speed of TAM course build timelines, has created a pattern that if not checked, will carry over into any effort to update or improve the workflow: i.e. using the Vue CLI.

## Vue CLI

Steps to cross over to using the CLI:
-    Build a simple project starter
-    Discuss component design, aiming for simplicity, reusability, and maintainability for the entire team
-    Develop standards (see above) for HTML/layout, CSS/SASS
-    Develop convention for JSON naming and Data structuring
-    Refactor project folder structure (esp. images) 

## HTML

HTML is in the process of being streamlined so code is clean and DRY.

Items for improving effeciency:

1. **Develop and implement a standardized set of layout components** that can be reused with ease. These would/could including a **nav**, **page banner**, a **section wrapper** (containers etc), and **footer**. 
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

<code-block title="Better">
```bash
<spacer-component></spacer-component>
<b-container fluid>
    <b-container>
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
    - Group global styles into file partials of similar styles i.e. `_colors.scss`, `_borders.scss`, `_buttons.scss` and `@import` them into the `main.scss` file. No element is really too small to get a partial so long as it will be reused.

## Class order

A helpful approach when using atomic css is to create a standardized method of ordering classes when writing css so developers can expect a consistent, linear hierarchy.

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

## Component design

An exciting and creative part of using the CLI is building components. There is great debate over best-practices, but as this is a fledgling endeavor, the development team should discuss ideas on best approaches.  

At the core components should strive to be reusable, simple enough to suit different contexts, easy to read, easy to understand, and easy to maintain for a team of devs who drop in and out of projects as needs arise.  What might make sense to one dev, might not for another. This opens up the possibility that instead of being easy to use and maintain, components instead need to be **learned**. While an amount of learning makes sense, it defeats the purpose if a dev dropping into a new project has to spend an hour figuring out what's going on.

## Layout

Though layouts all differ, having a consistent approach to grid and spacing of elements can help devs work more efficiently:

1. Where possible, always ensure columns add up to 12, so no odd wrapping or breaking occurs.
2. Suggest using the **`lg`** column breakpoint as a baseline. It almost always ensures that two-column content breaks at a better point before text and images get squeezed.
3. Use a consistent naming convention for directives, attributes, and props based on level of layout importance: i.e. column size, alignment, classes, inline-styling, functions, animation or other:

<code-group>
<code-block title="Example order">
```bash
<b-col lg="" alignment="" class="" :class="" style="" @functions animation-data-attributes=""></b-col>
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

