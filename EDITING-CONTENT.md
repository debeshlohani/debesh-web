# How to update the website

All page text is in **`content.json`** in the main project folder. You do not need to edit React or HTML files. Open it in a text editor, find the text you want to change, edit it, and save.

## Preview without Node.js

Ask the site maintainer for these two files from the same project version:

- **`collaborator-preview.html`** — the ready-to-open preview.
- **`content.json`** — the editable website content.

1. Double-click `collaborator-preview.html` to open it in a browser.
2. Edit `content.json` in a plain text editor and save.
3. At the top of the HTML preview, click **Choose content.json** and select your saved file.
4. After your next edit, save and choose the same JSON file again.

The preview opens with the content included when it was generated. Choosing a JSON file replaces that preview with your edits, including changed lists, buttons and titles. Invalid JSON displays an error and keeps the previous working page. Loading the file does not save changes to it or publish anything.

The app and standard portrait are embedded, so the preview works without Node.js, a web server or an internet connection. Google Fonts use system-font fallbacks when offline. If you choose a different portrait path, the corresponding image must also be accessible to the HTML preview; keeping the standard `/portrait.jpg` setting uses the embedded photo.

Closing and reopening the preview resets it to the included content; choose your edited JSON again. Changes to the React layout or styling require a newly generated HTML preview from the maintainer, but text changes do not.

## Where to find things

| Section in the file | What it controls |
| --- | --- |
| `site` | Browser tab title, search-engine description, page language |
| `navigation` | Name in the top bar, navigation links, theme button text |
| `hero` | Name, introduction, rotating roles, buttons, portrait, profile facts |
| `stats` | Four headline numbers and their labels |
| `about` | Biography, topics and education |
| `career` | Career section text, filter labels, job history |
| `expertise` | Expertise cards, descriptions and icons |
| `recognition` | Awards and scholarships |
| `credentials` | Certifications, memberships and former board positions |
| `writing` | Publications, search labels, conference talks |
| `contact` | Contact description, email button and blog link |
| `footer` | Copyright name/location and back-to-top text |

## Change existing text

For example, find this profile entry:

```json
{
  "label": "Latest role",
  "value": "Freelance Consultant, Trainer, Educator"
}
```

Change only the words between the quotation marks after `value`. Keep the field names, quotation marks, commas and brackets.

Content is plain text. Do not add HTML or Markdown formatting. Use an apostrophe normally (`bank's`). To include double quotation marks inside text, write `\"`, such as `"Speaking on \"Digital Banking\""`.

## Add a job, publication, award or other entry

Copy a complete existing entry within the appropriate list, paste it beside the others, and edit its values. Put a comma between entries, but no comma after the last one. Entries appear in the order listed in the file.

A publication in `writing.publications` looks like this:

```json
{
  "year": "2027",
  "title": "The title of the new article",
  "publisher": "Magazine name"
}
```

To remove an entry, remove its whole object and adjust the comma between its neighbours. Lists can be empty (`[]`), except `hero.roles` and `career.tracks`.

For jobs, keep `track` as `bank`, `consult` or `acad` so the filters work. If adding a new track, add its unique `id` and visible `label` to `career.tracks` too. Keep the `all` track.

## Numbers, links and the portrait

- In `stats`, `value` is a whole number **without quotes**, such as `31`. The separate `suffix` controls the `+`; use `""` to show no suffix. Other dates and years are text inside quotes. Headline statistics are edited independently from the lists.
- A button or navigation link has `label` (the visible text) and `href` (its destination). Use `#career` for a section, `mailto:debesh@msn.com` for email, or a full web address for another website.
- Optional `"newTab": true` opens an external link in a new tab. Changing the displayed email label does not change the destination: update `href` too.
- Existing section destinations are `#top`, `#about`, `#career`, `#expertise`, `#creds`, `#writing` and `#contact`. Keep these destinations when renaming navigation labels.
- Replace `public/portrait.jpg` to change the photo. Alternatively, put a new image in `public/` and update `hero.portrait.src` to its path, such as `/new-portrait.jpg`. Update `alt` with a short description.
- The copyright year updates automatically.

## Check and publish

If the local preview is already running, save the file and the page reloads with your changes. To start a preview, ask the person maintaining the site to run `npm run dev`.

To check your edits, run:

```sh
npm run check:content
```

This reports broken JSON, missing or misspelled fields, invalid numbers and unknown career tracks. Keep at least one non-empty rotating role. The production build runs the same validation automatically.

The public website updates after the project is **rebuilt and redeployed**. A person maintaining deployment can do that, or it happens automatically if your hosting is configured to deploy when repository changes are pushed. Editing a local file alone does not update the public website.
