# ⚡ My Portfolio
<img width="1904" height="1075" alt="portfolio" src="https://github.com/user-attachments/assets/1fd60a11-fbc2-436d-b922-cd4235ab5807" />

![Build Status](https://img.shields.io/badge/Build-Passing-success) ![Stack](https://img.shields.io/badge/Stack-React_19_%7C_Vite_%7C_Tailwind_v4-blue) ![License](https://img.shields.io/badge/License-MIT-green)

A high-performance, responsive personal portfolio website built to showcase my projects and skills as a Full Stack Developer. This site features smooth page transitions, interactive animations, and a clean, accessible UI built with **React 19** and the new **Tailwind CSS v4**.

### 🚀 Live Demo
**[https://collynx.vercel.app/](https://collynx.vercel.app/)**

---

### ✨ Key Features
* **Interactive UI:** Powered by **Framer Motion** for staggered animations, scroll reveals, and hover effects.
* **Modern Styling:** Built with **Tailwind CSS v4**, utilizing the new `oklch` color spaces and native CSS variables for a dark-themed aesthetic.
* **Typewriter Effect:** Dynamic text rendering in the Hero section using `react-simple-typewriter`.
* **Functional Contact Form:** Fully integrated with **EmailJS** for real-time email delivery directly from the client side.
* **Component Library:** Utilizes **Radix UI** primitives (via Shadcn) for accessible, robust interactive components.
* **Responsive Design:** Mobile-first architecture ensuring perfect rendering across all device sizes.

---

### 🛠️ Tech Stack

**Frontend Core**
* **Framework:** React 19 + Vite
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion, Animate.css (tw-animate-css)
* **Icons:** Lucide React, React Icons

**Utilities & Libraries**
* **Forms:** EmailJS (Browser SDK)
* **UI Components:** Radix UI (Slot), Class Variance Authority (CVA)
* **Notifications:** React Hot Toast
* **Linting:** ESLint + Prettier

---

### 📂 Project Structure

```bash
src/
├── assets/             # Static images and icons
├── components/
│   ├── ui/             # Reusable UI components (Buttons, Inputs)
│   ├── About.jsx       # Bio and Tech Stack grid
│   ├── Contact.jsx     # EmailJS form logic
│   ├── Hero.jsx        # Main landing section
│   ├── Navbar.jsx      # Responsive navigation with mobile drawer
│   └── Projects.jsx    # Project showcase grid
├── lib/
│   └── utils.ts        # Tailwind class merging utility (cn)
└── App.jsx             # Main layout and routing logic

```

---

### ⚡ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/SlinkyCollins/Portfolio.git
cd Portfolio

```


2. **Install Dependencies**
```bash
npm install

```


3. **Configure Environment Variables**
Create a `.env` file in the root directory to enable the Contact Form. You will need your API keys from [EmailJS](https://www.emailjs.com/).
```env
VITE_SERVICE_KEY=your_service_id
VITE_TEMPLATE_KEY=your_template_id
VITE_PUBLIC_KEY=your_public_key

```


4. **Run Development Server**
```bash
npm run dev

```


The app will launch at `http://localhost:5173`.

---

### 🎨 Featured Projects

The portfolio dynamically renders these projects from the `Projects.jsx` component:

| Project | Tech Stack | Description |
| --- | --- | --- |
| **JobNet** | Angular, PHP, MySQL | Hybrid Auth recruitment platform with currency normalization. |
| **NairaNest** | MERN Stack | Banking app simulation with ACID-compliant transactions. |
| **Phone OS** | Vanilla JS | Browser-based phone simulator with USSD logic and Game APIs. |
| **Perform-MD** | Next.js, GraphQL | Patient management portal for medical scheduling. |

---

### 📬 Contact

**Ademola Afolabi Collins**

* **GitHub:** [@SlinkyCollins](https://github.com/SlinkyCollins)
* **LinkedIn:** [Ademola Afolabi](https://www.linkedin.com/in/afolabi-ademola-851842280/)
* **Twitter:** [@collynxcodes](https://x.com/collynxcodes)
* **Email:** afolabiademola27@gmail.com

---

*Built with ❤️ using React & Tailwind*
