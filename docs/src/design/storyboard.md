# TAM Storyboard process
---
## Suggestions for storyboard layout from a development perspective

Developers have noted a number of issues with the current storyboard layout and workflow that have potential for improvement. This doc outlines the current practice, the issues that are problematic, and some suggestions for future state improvement.

As developers are in charge of translating the content of a storyboard into a working, visual web format, it is especially important that they have a clear, simple, storyboard format that lays out the content of a course in a way that directly reflects how it will be presented live, on-screen. As WBT courses are visual, vertical, and proceed in sections (akin to a regular website), it’s far easier to interpret, add, edit, and update content when it is presented in such a fashion in a storyboard.
Current practice

The current two-column SB layout presents the entirety of a course’s content, in addition to the comments, notes, and visuals (images, image file paths, notes, component references, etc) added by all course stakeholders. This amounts to a large amount of data that, while useful for project management, is not all functionally necessary for implementation and day to day work. It also makes it difficult to visually parse the content, understand how it will be presented on the page, and apply edits specified by various stakeholders through the duration of a project.

#### Edits, comments

This gets complicated further with ongoing comments and edits made by project stakeholders, which include feedback notes, text edits, design comments, developer notes, questions, etc. With all of these come text color changes and highlighting, multiple comments for a single text edit (delete comma, add comma, delete a letter of a word, add a new letter instead) strike-throughs, deletions, and more. And all of this content - new and old - remains in the storyboard for the entire duration of a project. This makes it difficult to be aware of the most current content, feedback etc, (developers need to look at which comments are the most current by date) and adds visual clutter to the document.

#### Right column

The content in the right column of the current layout has notes for developers and visual references. While useful, these contain screenshots of layout ideas, image file paths, layout directions, and text notes, all of which tend to only apply to the very initial stages of a project - where LXDs and designers are fleshing out potential ideas for layout. As a project moves beyond this point, the right column of the storyboard and its content becomes mostly obsolete for day to day production.
Potential improvements


A storyboard that presents the content of a course in a cleaner, plain text, easy to read format could be a better option for a future state. A few ideas for this are as follows:

- The storyboard could remain a google doc, though simply be a regular, one column, text-based layout;
- Course text can have basic formatting applied out of the box (HTML tags - h1, h2, h3, h4, bolding, italic, linked text, etc) without the need for additional notes;
- Images: 
Could be referenced as file names, and/or inserted into the doc in relation to the section they occupy on-screen;
Could alternately be added as comments, and omitted entirely from the storyboard for a cleaner, easier-reading experience. They could be given to developers as page-based folders of all images used (i.e. page1_assets, page2_assets, icons, etc), as in the Volcker course;

Any extra SB content that pertains to dates, authors, contact info, IDs, etc can be omitted, be added in a comment, or continue being at the top of the page, but in a clearly separate, non-essential location (see point 1 below)..
Content approach, naming convention, etc


As an example, the content below from the Volcker course has been added in a way that is more visually representational of the on-page product.

1. The only content presented should be “On screen content”. Any notes, numbers, or IDs currently in the grey rows at the top of each page can be or could be removed and/or placed into another section, or a comment.
2. Pages can be marked as Page 1, Page 2, etc. (Actual page menu links/names could also be used); for developers, the .html page # can also be included (lo_00_01.html);
3. Sections within a page are marked as “section 1, section 2” etc, and are given a simple, meaningful description related to their content; they could also simply receive a background color to differentiate them, thereby further reducing peripheral text on-page (see below);
4. Headings are formatted as the HTML tag it will be in the code (if a heading is an H2, it is formatted as such using google docs text/heading styles); likewise any bold text, etc is formatted as such. Developers will be able to tell from this how to format their code.
5. Unformatted text is treated as paragraph (`<p>`) text;
6. If there is no title element (h1-h4) in a section, content can be interpreted as paragraph text, or a bullet list unless otherwise specified.
7. As an option, sections can also be laid out in multiple columns as desired (i.e. text col left ~ image col right, see below)
This format could also carry over seamlessly into TAM development JSON naming practices: 
8. As proposed for development, refactoring JSON naming to have a convention that employs meaningful key names, organized with a visual, page-based hierarchy can make development easier. 

This can follow the same layout as the storyboard, with a “section” based structure, and reused, repeatable tags for content that are based on the literal roles of the text in the course: i.e. title, subtitle, text, list, cta (call to action), img (image url).

```
Title: Welcome to Volcker
Subtitle: This is the subtitle
Text1: Lorem ipsum dolor sit amet
Text2: Lorem ipsum dolor lorem
cta : scroll down to continue
Img: <image-file-path-here>
```
To clarify, while a title implies a main page title, in this case, the title would refer to the main heading in a section i.e.: section 2 => title. If there is no title, it can be omitted.

This would offer a consistent naming structure for HTML elements between LXD, design, and development, and make the translation of storyboard content to JSON easier, in addition to facilitating simpler cross-departmental communication.
As a step further, by using a user interface/CMS set up by the development team, LXDs and writers could input/update storyboard content themselves through the initial stages of development, which would then automatically be pulled into WBT code by devs.

### Storyboard Navigation

If you consult the left sidebar of the document, you’ll see that each section of storyboard content is clearly labelled - this provides all stakeholders with an easy way to navigate and reference course content.
Word count


By reducing storyboard notes, IDs, file names, and direction text, it can also free up the storyboard to offer an accurate and real-time word count of course content.
Spelling corrections, Comments and Notes

A big difficulty for developers is translating and transferring the myriad text and spelling updates made to a project via google’s comments or suggestions.

In many cases a small grammatical edit requires 5-10 different comments, some of which outline the new edit, while others document the old content that was removed. 

The only essential content in this case is the current, updated text. If writers or LXDs can make their edits or updates to text directly to the storyboard, without making notes or suggestions in comments, developers would have an easier time knowing what content is current.
Design considerations

Designers could add hex color codes, image file paths, padding/margin values (related to BSVue classes), or other notes either at the very beginning of each section, or as comments alongside the related element.

Sample layout 1 (see sample layout 2 here)


Volcker Rule Training 2021
Core Content
WBT STORYBOARD 




Notes for developers



Course Description: Training that focuses on the necessary requirements to ensure compliance with the Volcker Rule, a part of the U.S. Dodd-Frank Act  


Content is pulled directly from this deck.
Interaction Design slides are pulled from this deck.



Menu




Attention screen reader users: this course has been optimized for accessibility and fully supports screen readers.

[Desktop Top Bar] 
Animations on/off
Select your language 

[Mobile Top Bar] Animations

Menu/Page links:

[Tab 1] Introduction 
[Tab 2] Volcker Rule Overview
[Tab 3] Role Specific TBD
[Tab 4] Role Specific TBD
[Tab 5] Question Bank




// PAGE 1 => lo_00_01.html		




SECTION 1: BANNER


Citi [Insert Role Title]
2021 Volcker Rule Training
Scroll down to continue.




SECTION 2: WELCOME

Welcome
Welcome to the Volcker Rule Training 2021 course.







SECTION 3: HOW TO NAVIGATE

Title: How to Navigate This Course


[Scroll Icon - icon_scroll_grey.svg]

Scroll down to proceed through the content and explore course elements.
[Animation Icon - icon_accessibility.svg]

If you have difficulty viewing animated content, turn off animations for the best learning experience.
Animations on
Animations off
[Menu Icon - still looking for alternative menu icon]

Use the menu to navigate between sections.
[Links Icon - icon_link.svg] 

[Desktop]
This course contains links to internal Citi systems. These links are for informational and reference purposes only and are not required to receive a course completion. Please log in to your Citi computer to access these links. 
[Close Icon - icon_close.svg] 

Select this icon to save your progress and exit the course. 




SECTION 4: TEXT CONTENT

The Volcker Rule restricts certain trading and fund-related activities. 

As part of the U.S. Dodd-Frank Act, the Volcker Rule imposes a number of requirements on Citi’s trading, underwriting, treasury, and investment activities, among others, in the Institutional Clients Group, consumer businesses, and corporate functions.

The Volcker Rule is complex, and this course contains only a high-level summary. The application of the Volcker Rule in many instances is subject to interpretation. 

In addition, Citi has not fully utilized certain exemptions/exclusions in the Volcker Rule. Therefore, the following course should not be relied upon to analyze an activity for compliance with the Volcker Rule.  

img:





SECTION 5: TEXT CONTENT


Questions

In the event of any questions regarding the interpretation or application of the Volcker Rule, you should always consult with the Volcker Rule Office (VolckerOffice@citi.com), Legal, and/or ICRM.

This training has been updated to reflect the 2020 Volcker Rule amendments (also known as Volcker 2.0 and 2.1). 

Img:






SECTION 6: FOOTER


[Callout 2] To learn more about the Volcker Rule and its compliance requirements, select Continue.
 
[Button] Continue










OPTIONS AND ALTERNATIVES


As an alternative, sections could be put into a basic column layout as desired. *This differs from the current storyboard in that the 2-column layout below is a literal representation of the desired on-screen visual as opposed to the default storyboard presentation of all content:


[Callout 1] The Volcker Rule restricts certain trading and fund-related activities. 

As part of the U.S. Dodd-Frank Act, the Volcker Rule imposes a number of requirements on Citi’s trading, underwriting, treasury, and investment activities, among others, in the Institutional Clients Group, consumer businesses, and corporate functions.

The Volcker Rule is complex, and this course contains only a high-level summary. The application of the Volcker Rule in many instances is subject to interpretation. 

In addition, Citi has not fully utilized certain exemptions/exclusions in the Volcker Rule. Therefore, the following course should not be relied upon to analyze an activity for compliance with the Volcker Rule.  


Or for multi-colum layouts:
The Volcker Rule restricts certain trading and fund-related activities. 

Icon 1

As part of the U.S. Dodd-Frank Act, the Volcker Rule imposes a number of requirements on Citi’s trading, underwriting, treasury, and investment activities, among others, in the Institutional Clients Group, consumer businesses, and corporate functions.
Icon 2

The Volcker Rule is complex, and this course contains only a high-level summary. The application of the Volcker Rule in many instances is subject to interpretation. 
Icon 3

In addition, Citi has not fully utilized certain exemptions/exclusions in the Volcker Rule. Therefore, the following course should not be relied upon to analyze an activity for compliance with the Volcker Rule. 



Sample layout 2


Volcker Rule Training 2021
Core Content (v.2)
WBT STORYBOARD 

PAGE 1 === lo_00_01.html		


Citi [Insert Role Title]
2021 Volcker Rule Training
Scroll down to continue.

Welcome
Welcome to the Volcker Rule Training 2021 course.


Title: How to Navigate This Course


Scroll down to proceed through the content and explore course elements.
If you have difficulty viewing animated content, turn off animations for the best learning experience.
Animations on
Animations off
Use the menu to navigate between sections.
This course contains links to internal Citi systems. These links are for informational and reference purposes only and are not required to receive a course completion. Please log in to your Citi computer to access these links. 
Select this icon to save your progress and exit the course. 





The Volcker Rule restricts certain trading and fund-related activities. 

As part of the U.S. Dodd-Frank Act, the Volcker Rule imposes a number of requirements on Citi’s trading, underwriting, treasury, and investment activities, among others, in the Institutional Clients Group, consumer businesses, and corporate functions.

The Volcker Rule is complex, and this course contains only a high-level summary. The application of the Volcker Rule in many instances is subject to interpretation. 

In addition, Citi has not fully utilized certain exemptions/exclusions in the Volcker Rule. Therefore, the following course should not be relied upon to analyze an activity for compliance with the Volcker Rule. 

 


Questions

In the event of any questions regarding the interpretation or application of the Volcker Rule, you should always consult with the Volcker Rule Office (VolckerOffice@citi.com), Legal, and/or ICRM.

This training has been updated to reflect the 2020 Volcker Rule amendments (also known as Volcker 2.0 and 2.1). 


