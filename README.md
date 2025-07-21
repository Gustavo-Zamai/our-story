# 💖 Our Story Website

## 📝 Description

This project is a personal website that celebrates a romantic relationship, featuring:

- A time counter in years, months, days, hours, minutes, and seconds since the relationship started  
- A timeline with important milestones of the relationship  
- An interactive photo gallery  
- A love letter section  
- Responsive and elegant design  

## ✨ Features

- **Automatic Time Counter:** shows exactly how long the couple has been together  
- **Photo Lightbox:** interactive gallery that expands photos on click  
- **Visual Timeline:** displays key moments in chronological order  
- **Responsive Design:** works well on mobile devices, tablets, and desktops  
- **"Under Construction" Section:** areas marked for future updates  

## 🛠️ Technologies Used

- HTML5  
- CSS3 (with Flexbox and Grid)  
- JavaScript (ES6)
- Typescript  

## 🚀 How to Run the Project

#### 1. Clone the repository:

```bash
git clone https://github.com/Gustavo-Zamai/our-story.git
cd our-story
```
#### 2. Open the main file:

- Open `index.html` in your preferred browser

#### 3. For development (if you make changes to TypeScript):

```bash
    run npm build
    "build": "tsup src/script.ts --format cjs,esm --dts --minify",
```

## 🖼️ File Structure
```bash
our-story/
├── index.html          # Main page
├── style.css           # Main styles
├── src/
├  ├── script.ts
├── dist/
├  ├── script.js        # Compiled Javascript    
├── images/             # Folder for couple's photos
├── assets/             # Additional resources
```

## 🎨 Customization
To personalize the site with your own info:

#### Change the start date:
- In `script.js`, modify:

```js
const startDate = new Date(2025, 2, 24); // March 24, 2025
```
#### Add your photos:
- Place your photos inside the `images/` folder and update the paths in the HTML

#### Edit texts:
- Modify content inside `index.html` (timeline, love letter, etc.)

#### Change colors:
- Adjust the CSS variables at the beginning of s`tyle.css`

## 🌟 Additional Features
- Interactive Lightbox: click any photo to see it enlarged

- Smooth Animations: pleasant visual effects across the page
 
- Adaptive Design: works well on any screen size

## 📅 Upcoming Updates
- Add more photos to the gallery

- Include new milestones in the timeline
 
- Add a videos section
 
- Implement a message book

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author
#### Gustavo Zamai

[LinkedIn](https://www.linkedin.com/in/gustavo-sim%C3%A3o-zamai-664a5521a/) • 
[GitHub](https://github.com/Gustavo-Zamai)

#### Made with ❤️ by Gustavo Simao Zamai — A digital gift for Wania Fagundes
