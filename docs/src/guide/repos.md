---
title: Repos
---

# **Repos & Version control**
---
## Intro

TAM uses Bitbucket for version control, and VS Code for a main text editor. With the RTE framework, we use the **Live Server** extension for hot reloading and **Live Sass Compiler** for `scss` => `css` compilation.

## Workflow

As is general best developer practice, commit and push regularly and often. However a point to note is that **TAM devs routinely work on a project simultaneously.** This requires good communication to be sure a) no two devs are working on the same exact **page** of a project at the same time (including `css/js`), and b) that conflicts are avoided.

## Repo set up

### Naming

Following established TAM naming conventions, all repos generally follow: 

<code-group>
<code-block title="Convention">
```bash
<company>_<area-of-business>
```
</code-block>

<code-block title="Example">
```bash
citi_owstraining
```
</code-block>
</code-group>

In most cases, WBT names have multiple words, as such naming can be extended with underscores: 

<code-group>
<code-block title="Convention">
```bash
<company>_<general-area>_<specific-area>
```
</code-block>

<code-block title="Example">
```bash
citi_volcker_markets
citi_booking_model_icg
```
</code-block>
</code-group>

When creating a repo in Bitbucket, you'll be presented with an options page: select a "Project" from the dropdown menu (which groups projects by company, i.e. **Citi.**, **TD**, etc.). In cases where no category fits, select **Uncategorized**.

### Add a README.md file

**Always include a `README.md` file**. While this isn't strictly necessary at setup time, it is key for developers and future project maintenance to have a README in every repo. Currently TAM has **68 pages of repos**, including 4 for example (so far) dedicated solely to Citi projects. Without a README and project description (see below), it makes it next to impossible for a dev to navigate the codebase for specific repos, components, items, notes, whatever, without a previous reference or guidance from a developer who worked on a course.

### Add a description

Similar to the above, it's also good practice to include a short project description directly in Bitbucket at setup. This helps developers navigate the TAM Bitbucket home/projects page and is helpful with a large number of repos. 

<code-group>
<code-block title="Convention">
```bash
Something short and sweet, descriptive for a quick look while perusing repos.
```
</code-block>

<code-block title="Example">
```bash
"A repository for the core content contained in the Citi Volcker Rule Training suite of
courses."
```
</code-block>
</code-group>
