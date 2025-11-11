# Alure LLC Frontend Replication Guide

This guide will help you replicate the exact frontend experience of the Alure LLC website, including the Home, Demo, News, and Contact pages with the same assets and styling.

## 🎯 **Target Pages to Replicate**
- **Home** (`/`) - Main landing page
- **Demo** (`/demo`) - Product demonstration page
- **News** (`/news`) - News and media coverage page
- **Contact** (`/contact`) - Contact form and information page
- **Login** (`/login`) - User authentication page

## 📦 **Required Dependencies**

Add these to your `package.json`:

```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.5.0",
    "react-icons": "^5.5.0",
    "leaflet": "^1.9.4",
    "leaflet.heat": "^0.2.0",
    "react-leaflet": "^5.0.0",
    "react-scripts": "5.0.1"
  }
}
```

Install with: `npm install`

## 📁 **File Structure Setup**

Create the following directory structure in your `src` folder:

```
src/
├── assets/
│   ├── aditya.jpg
│   ├── beetle.png
│   ├── beetle_samples.png
│   ├── beetle_samples.png
│   ├── backgrounds/
│   │   ├── about-bg.png
│   │   ├── contact-bg.png
│   │   ├── demo-bg.png
│   │   └── project-bg.png
│   ├── blogs/
│   │   ├── japanese_beetle.png
│   │   ├── manufacturing.JPG
│   │   ├── mncup.JPG
│   │   └── vineyards.png
│   ├── demos/
│   │   ├── AlureDemo.mov
│   │   └── AlureRender.mov
│   ├── logos/
│   │   ├── 5eyewitness.png
│   │   ├── brownfieldag.png
│   │   ├── cbsnews.png
│   │   ├── efest.png
│   │   ├── mncup.png
│   │   ├── physorg.png
│   │   ├── startribune.png
│   │   ├── tcb.png
│   │   └── umn.png
│   ├── mo.jpg
│   ├── news1.png
│   ├── news2.png
│   ├── news3.png
│   ├── news4.png
│   ├── project1.JPG
│   ├── project2.JPG
│   ├── project3.JPG
│   ├── project4.JPG
│   ├── react1.jpg
│   ├── react2.jpg
│   ├── vineyard.mp4
│   ├── vineyard1.JPG
│   └── vineyard2.JPG
├── components/
│   ├── AboutContent.js
│   ├── AboutContentStyles.css
│   ├── BeetleAnimation.js
│   ├── BeetleAnimationStyles.css
│   ├── Blog.js
│   ├── BlogContent.js
│   ├── BlogStyles.css
│   ├── Demo.jsx
│   ├── DemoStyles.css
│   ├── Footer.js
│   ├── FooterStyles.css
│   ├── Form.js
│   ├── FormStyles.css
│   ├── HeroImg.js
│   ├── HeroImg2.js
│   ├── HeroImg2Styles.css
│   ├── HeroImgStyles.css
│   ├── Info.js
│   ├── InfoStyles.css
│   ├── Loading.js
│   ├── LoginForm.js
│   ├── LoginFormStyles.css
│   ├── Modal.js
│   ├── ModalStyles.css
│   ├── Navbar.js
│   ├── NavbarStyles.css
│   ├── News.js
│   ├── NewsData.js
│   ├── NewsStyles.css
│   ├── PricingCard.js
│   ├── PricingCardStyles.css
│   ├── Work.js
│   ├── WorkCard.js
│   ├── WorkCardData.js
│   └── WorkCardStyles.css
├── routes/
│   ├── About.js
│   ├── Contact.js
│   ├── Demo.js
│   ├── Home.js
│   ├── Login.js
│   ├── Map.js
│   └── News.js
├── App.js
├── index.js
└── index.css
```

## 🚀 **Core Setup Steps**

### 1. **App.js Configuration**
```javascript
import React from 'react';
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Demo from "./routes/Demo";
import NewsPage from "./routes/News";
import Login from "./routes/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/demo" element={<Demo />}/>
        <Route path="/news" element={<NewsPage />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
```

### 2. **Navbar Component**
The navbar includes navigation to all 5 target pages:
- Home (`/`)
- Demo (`/demo`)
- News (`/news`)
- Contact (`/contact`)
- Login (`/login`)

**Key Features:**
- Responsive hamburger menu
- Scroll-based background color change
- Alure logo with beetle icon
- Smooth transitions

### 3. **Required Components for Each Page**

#### **Home Page (`/`)**
- `HeroImg.js` - Hero section with background image
- `Info.js` - Information sections
- `Work.js` - Work/project showcase
- `Footer.js` - Footer component

#### **Demo Page (`/demo`)**
- `HeroImg2.js` - Hero section with "What's Alure?" heading
- `Demo.jsx` - Demo video components
- `Info.js` - Product information sections
- `Work.js` - Additional work showcase

#### **News Page (`/news`)**
- `News.js` - News grid component
- `NewsData.js` - News data array
- `Footer.js` - Footer component

#### **Contact Page (`/contact`)**
- `HeroImg2.js` - Hero section with contact heading
- `Form.js` - Contact form component
- `Footer.js` - Footer component

#### **Login Page (`/login`)**
- `HeroImg2.js` - Hero section with login heading
- `LoginForm.js` - Login form component
- `Footer.js` - Footer component

## 🎨 **Styling Requirements**

### **Global Styles (`index.css`)**
- Import Google Fonts: "Outfit" (sans-serif)
- Reset CSS properties
- Global color variables
- Responsive design utilities

### **Component-Specific Styles**
Each component has its own CSS file:
- `NavbarStyles.css` - Navigation styling
- `HeroImgStyles.css` - Hero section styling
- `DemoStyles.css` - Demo page styling
- `NewsStyles.css` - News page styling
- `FormStyles.css` - Contact form styling
- `FooterStyles.css` - Footer styling

## 📱 **Responsive Design**

All pages are fully responsive with:
- Mobile-first approach
- Breakpoints at 768px, 1024px, and 1200px
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Optimized images and videos

## 🎬 **Video Assets**

### **Demo Videos**
- `AlureDemo.mov` - Field demonstration video
- `AlureRender.mov` - 3D product rendering video

### **Video Implementation**
```javascript
<video 
  autoPlay 
  loop 
  muted 
  playsInline
  src={videoSource}
  type="video/mp4"
  title="Video Title"
>
  Your browser does not support the video tag.
</video>
```

## 🖼️ **Image Assets**

### **Key Images**
- `beetle.png` - Main logo/icon
- `beetle_samples.png` - Product samples
- Background images in `backgrounds/` folder
- News images (`news1.png` through `news4.png`)
- Logo images in `logos/` folder

### **Image Implementation**
```javascript
import ImageSource from '../assets/image-name.png';

<img src={ImageSource} alt="Description" />
```

## 🔧 **Special Features**

### **Loading Component**
- `Loading.js` - Reusable loading spinner
- Used for async operations

### **Modal Component**
- `Modal.js` - Reusable modal dialog
- Used for form submissions and notifications

### **Animation Components**
- `BeetleAnimation.js` - Animated beetle graphics
- CSS animations and transitions throughout

## 📋 **Implementation Checklist**

1. **Setup Project Structure**
   - [ ] Create all required directories
   - [ ] Copy all asset files to correct locations
   - [ ] Install required dependencies

2. **Core Components**
   - [ ] Implement Navbar with all 4 navigation links
   - [ ] Create App.js with proper routing
   - [ ] Implement Footer component

3. **Page Components**
   - [ ] Home page with HeroImg, Info, and Work components
   - [ ] Demo page with videos and product information
   - [ ] News page with news grid and data
   - [ ] Contact page with form and information
   - [ ] Login page with authentication form

4. **Styling**
   - [ ] Copy all CSS files
   - [ ] Ensure responsive design works
   - [ ] Test on different screen sizes

5. **Assets Integration**
   - [ ] Verify all images load correctly
   - [ ] Test video playback
   - [ ] Check logo and icon display

6. **Testing**
   - [ ] Test navigation between all pages
   - [ ] Verify responsive design
   - [ ] Check form functionality
   - [ ] Test video autoplay and looping

## 🚀 **Running the Project**

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📝 **Notes**

- All components use functional components with hooks
- CSS is modular with component-specific stylesheets
- Images and videos are imported as modules
- The design uses a dark theme with green/yellow accents
- All pages include the same Navbar and Footer for consistency

This setup will create an exact replica of the Alure LLC frontend experience with all 4 target pages fully functional and styled identically to the original.

## 🦶 **Footer Component - Detailed Recreation Guide**

The Alure LLC footer is a beautiful, professional component that can be easily replicated for other projects. Here's the complete implementation guide:

### **📋 Footer Structure**

```javascript
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Minneapolis, MN</p>
                        <p>United States</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color:"#fff", marginRight: "2rem" }}/>
                        (507) 339-4520
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        info@alurellc.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About Alure LLC</h4>
                <p>Alure LLC has developed a unique approach to managing Japanese Beetles: Bait and Kill surfaces. Our unique surface attracts the bugs and kills them on contact. No more refilling bags of dead beetles, or attracting more beetles from current traps!</p>
                <div className="social">
                    <a href="https://www.instagram.com/alure_llc/">
                        <FaInstagram size={30} style={{ color: "#E1306C", marginRight: "1rem" }}/>
                    </a>
                    <a href="https://www.facebook.com/realalurellc/">
                        <FaFacebook size={30} style={{ color: "#4267B2", marginRight: "1rem" }}/>
                    </a>
                    <a href="https://www.youtube.com/@AlureLLC">
                        <FaYoutube size={30} style={{ color: "#FF0000", marginRight: "1rem" }}/>
                    </a>
                    <a href="https://www.linkedin.com/company/alure-llc/?viewAsMember=true">
                        <FaLinkedin size={30} style={{ color: "#0077B5", marginRight: "1rem" }}/>
                    </a>
                </div>
                <p className="footer-copyright">Copyright {new Date().getFullYear()} Alure LLC. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
```

### **🎨 Footer Styling (FooterStyles.css)**

```css
.footer {
    width: 100%;
    padding: 6rem 0;
    background-color: rgba(19,19,19,0.8);
}

.footer-container {
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 36px;
}

.left {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.location {
    display: flex;
    margin-bottom: 0.8rem;
}

.location p {
    line-height: 30px;
}

.right {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
}

.social {
    margin-top: 1rem;
}

h4 {
    font-size: 1.2rem;
    padding-bottom: 0.7rem;
}

p {
    font-size: 1.2rem;
}

.footer-copyright {
    margin-top: 1.16rem;
}

@media screen and (max-width: 640px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}
```

### **🔧 Key Design Elements**

#### **Layout Structure**
- **Two-column grid layout** on desktop (left: contact info, right: about + social)
- **Single column** on mobile (stacks vertically)
- **Maximum width**: 1140px with auto margins for centering
- **Grid gap**: 36px between columns

#### **Color Scheme**
- **Background**: `rgba(19,19,19,0.8)` - Semi-transparent dark background
- **Text**: White (`#fff`) for all text and icons
- **Social Icons**: Brand-specific colors:
  - Instagram: `#E1306C`
  - Facebook: `#4267B2`
  - YouTube: `#FF0000`
  - LinkedIn: `#0077B5`

#### **Typography**
- **Headings (h4)**: 1.2rem font size
- **Body text (p)**: 1.2rem font size
- **Line height**: 30px for location text
- **Font family**: Inherits from global "Outfit" font

#### **Spacing & Padding**
- **Footer padding**: 6rem top/bottom
- **Container padding**: 1rem for left/right sections
- **Icon margins**: 2rem right margin for contact icons, 1rem for social icons
- **Element spacing**: 0.8rem between contact items, 1rem for social section

#### **Icons & Visual Elements**
- **Contact icons**: 20px size (Home, Phone, Email)
- **Social icons**: 30px size
- **Icon alignment**: Flexbox with proper spacing
- **Hover effects**: Inherit from global link styles

### **📱 Responsive Design**

#### **Desktop (640px+)**
- Two-column grid layout
- Side-by-side contact and about sections
- Full social media icon row

#### **Mobile (640px and below)**
- Single column layout
- Stacked sections (contact above about)
- Maintained spacing and readability

### **🚀 Implementation Steps**

1. **Install React Icons**:
   ```bash
   npm install react-icons
   ```

2. **Create Footer Component**:
   - Copy the JavaScript structure above
   - Customize contact information
   - Update social media links
   - Modify company description

3. **Apply Styling**:
   - Copy the CSS styles
   - Adjust colors to match your brand
   - Modify spacing if needed
   - Test responsive behavior

4. **Customization Options**:
   - **Background**: Change `rgba(19,19,19,0.8)` to your brand color
   - **Text colors**: Modify white (`#fff`) to match your theme
   - **Social icons**: Update links and add/remove platforms
   - **Content**: Replace contact info and company description
   - **Spacing**: Adjust padding and margins as needed

### **✨ Special Features**

- **Dynamic Copyright**: Automatically updates year with `new Date().getFullYear()`
- **Brand Colors**: Social icons use authentic platform colors
- **Semi-transparent Background**: Creates elegant overlay effect
- **Flexible Grid**: Adapts beautifully to different screen sizes
- **Professional Typography**: Clean, readable text hierarchy

This footer design is perfect for professional websites, portfolios, business sites, or any application requiring a polished, modern footer with contact information and social media integration.