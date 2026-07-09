# ⚡ My Portfolio
<img width="1920" height="1080" alt="portfolio" src="https://github.com/user-attachments/assets/7f1bcf4b-3751-4532-a2e8-5d443a1426c7" />


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

| Project | Tech Stack | Scope | Description |
| --- | --- | --- | --- |
| **Vaultly (Digital Banking System)** | Vue 3, Pinia, Laravel 12, MySQL, Sanctum, Cloudinary, Vite | 13 pages, 21 API endpoints, 4 cloud services | Production-style digital banking system using Laravel transactions, row-level locking, and deadlock retries to protect deposits, transfers, and withdrawals. |
| **JobNet (Global Recruitment Engine)** | Angular 18, PHP 8.2, MySQL, Firebase Auth, Docker | 61 API endpoints, 31 Angular pages, 3 dashboards | Global recruitment platform with hybrid Firebase and MySQL authentication, multi-role dashboards, and salary normalization through exchange-rate data. |
| **NairaNest (Core Banking Infrastructure)** | React, Redux Toolkit, Node.js, MongoDB, Material UI | 21 API endpoints, 14 banking features, 8 security features | Core banking simulation with MongoDB sessions for atomic balance updates, protected transfers, RBAC, rate limiting, and analytics dashboards. |
| **Phone OS Simulator (Browser-Based Mobile OS)** | Vanilla JavaScript, Canvas API, Webcam API, LocalStorage, CSS3 | 10 applications, 5 persistent modules, 4+ browser APIs | Browser-based mobile environment that coordinates isolated apps, USSD validation, Canvas gameplay, webcam access, and persistent device-like state. |

---

### 📬 Contact

**Ademola Afolabi Collins**

* **GitHub:** [@SlinkyCollins](https://github.com/SlinkyCollins)
* **LinkedIn:** [Ademola Afolabi](https://www.linkedin.com/in/afolabi-ademola-851842280/)
* **Twitter:** [@collynxcodes](https://x.com/collynxcodes)
* **Email:** afolabiademola27@gmail.com

---

*Built with ❤️ using React & Tailwind*
