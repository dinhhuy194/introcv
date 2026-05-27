# 🚀 Portfolio UI Redesign — Ultra Premium Edition

> Nâng cấp portfolio từ một trang HTML đơn giản thành một **trải nghiệm web đẳng cấp Awwwards**, sử dụng những kỹ thuật thiết kế VIP nhất 2025-2026.

---

## 📋 Mục Lục

1. [Phân Tích Hiện Trạng](#-phân-tích-hiện-trạng)
2. [Nghiên Cứu Xu Hướng 2025-2026](#-nghiên-cứu-xu-hướng-2025-2026)
3. [Tầm Nhìn Thiết Kế](#-tầm-nhìn-thiết-kế)
4. [Design System](#-design-system-chi-tiết)
5. [Sections Chi Tiết](#-sections-chi-tiết)
6. [Hiệu Ứng VIP](#-hiệu-ứng-vip-chi-tiết)
7. [Tech Stack & Libraries](#-tech-stack--libraries)
8. [Kiến Trúc File](#-kiến-trúc-file-mới)
9. [Proposed Changes](#-proposed-changes)
10. [Verification Plan](#-verification-plan)
11. [Timeline](#-timeline-ước-tính)
12. [Open Questions](#-open-questions)

---

## 🔍 Phân Tích Hiện Trạng

Portfolio hiện tại (`index.html`) là một single-page HTML với:

| Aspect | Đánh Giá |
|--------|----------|
| Dark theme cơ bản, GSAP animations | ✅ Có nền tốt |
| Layout đơn giản, thiếu depth | ❌ Cần cải thiện |
| Không có 3D elements, particle effects | ❌ Thiếu immersive |
| Typography & color palette chưa premium | ❌ Chưa VIP |
| Thiếu smooth page transitions | ❌ Cần scroll-driven |
| Responsive chưa tối ưu | ❌ Cần mobile-first |
| Inline CSS/JS trong 1 file | ❌ Cần tách ra |

---

## 🔬 Nghiên Cứu Xu Hướng 2025-2026

### 1. Visual Design Trends

#### Liquid Glass (Glassmorphism 2.0)
- Tiến hóa từ glassmorphism tĩnh → **kính khúc xạ động**, phản ứng theo tương tác
- Apple phổ biến hóa trong iOS 26 — mô phỏng ánh sáng thực tế
- Dùng `backdrop-filter: blur() saturate()` + adaptive transparency
- **Accessibility first**: contrast-aware tints, adaptive blur fallbacks

#### Aurora & Organic Effects
- Gradient mềm, multi-color, tạo cảm giác "ấm áp" và "con người"
- Kết hợp scroll-driven animations, không bao giờ tĩnh

#### Dark Mode "Mood Mode"
- Không dùng pure black (#000) — thay bằng deep charcoals (#121212), midnight plums
- Kết hợp neon accents + liquid glass → cảm giác premium

#### Expressive Minimalism
- Giữ clarity nhưng thêm personality: bold typography, gradient bất ngờ, layout phi tuyến tính

---

### 2. Animation & Interaction

| Tool | Vai Trò | Lý Do Hàng Đầu |
|------|---------|-----------------|
| **GSAP** | Timeline-based sequences, scroll-triggered | Tiêu chuẩn ngành, pixel-perfect control |
| **Lenis** | Smooth scroll | Buttery-smooth, sync hoàn hảo với GSAP |
| **Three.js** | 3D WebGL experiences | Gold standard cho 3D web |
| **Lottie** | Vector micro-animations | Lightweight, After Effects trên web |

#### Xu hướng nổi bật:
- **Scroll-Driven Storytelling**: Website phản ứng theo scroll → cinematic narrative
- **Kinetic Typography**: Text di chuyển, transform, phản ứng theo mouse/scroll
- **Custom Cursors**: Con trỏ phản ứng theo context
- **Liquid Motion**: Transitions mềm mại, organic → chống cảm giác "robotic"

---

### 3. Typography Premium

**Body (Workhorse):** Inter, Satoshi, Manrope  
**Display (Headlines):** Space Grotesk, Clash Display, Instrument Serif  
**Code:** JetBrains Mono

| Style | Mô Tả | Ứng Dụng |
|-------|--------|-----------|
| **Wide & Loud** | Sans-serif lớn, geometric | Tech, portfolio headers |
| **Timeless Luxury** | Modern serif, classic proportions | Editorial, high-end |
| **Quiet Sans-Serifs** | Art Deco-inspired, minimalist | Sophisticated UI |

---

### 4. Color Palettes Premium

| Tên | Background | Accent | Phù Hợp |
|-----|-----------|--------|----------|
| **Carbon Mint** | #2D3436 | #00FFC2 | SaaS, Tech |
| **Cyber Rose** | #5758BB | #EF5777 | Social, Consumer |
| **Clubroom Contrast** | #000000 | #D4AF37 | Luxury |
| **Digital Peach** | #3B3B98 | #FF7E5F | Human-centric |
| **Midnight Blue** | #111827 | #FBBF24 | FinTech |

**Trends:**
- **Dopamine Hues**: electric cyan, laser pink, lime green (dùng sparingly)
- **Multicolor Gradient Meshes**: vượt qua linear gradient → dimension
- **Iridescent Glows**: pearlescent, otherworldly premium
- Dùng **HSL** để build palette → dễ derive variations

---

### 5. Layout Patterns

- **Bento Grid**: Đã chuyển từ static → dynamic, interactive, asymmetric
- **Scroll-Driven Animations**: View Transitions API + native CSS thay thế heavy JS
- **Breaking the Grid**: Asymmetric layouts, "creative chaos" có kiểm soát
- **Gamified Navigation**: Interactive journeys thay vì standard menus

---

### 6. Portfolio Tham Khảo (Award-Winning)

| Website | Đặc Điểm Nổi Bật |
|---------|-------------------|
| **Bruno Simon** | 3D gamified portfolio bằng Three.js |
| **Dennis Snellenberg** | Masterclass smooth animations, premium dark |
| **Robin Mastromarino** | GSAP displacement effects, high-end |
| **Keita Yamada** | WebGL storytelling, interactive galleries |
| **Sagar Kumar Ghosh** | 3D avatar theo cursor, React + Three.js + GSAP |
| **Louis Paquet** | Awwwards Independent of the Year 2025 |

---

## 🎯 Tầm Nhìn Thiết Kế

Tạo một portfolio mang phong cách **"Digital Art Gallery"** — nơi mỗi section là một trải nghiệm thị giác riêng biệt:

| Element | Mô Tả |
|---------|--------|
| **Liquid Glass** | Hiệu ứng kính khúc xạ động lấy cảm hứng từ iOS 26 |
| **3D Aurora Background** | Nền aurora borealis chuyển động mượt bằng CSS + Canvas |
| **Particle Field** | Hệ thống hạt tương tác theo chuột |
| **Magnetic Cursor** | Con trỏ tùy chỉnh với hiệu ứng từ trường |
| **Scroll-Driven Cinema** | Mỗi section xuất hiện như một scene trong phim |
| **Bento Grid Layout** | Layout hiện đại kiểu Apple/Vercel cho About section |
| **Kinetic Text Reveal** | Chữ xuất hiện theo kiểu split-text cinematic |
| **Lenis Smooth Scroll** | Scrolling mượt như bơ, sync với GSAP |

---

## 🎨 Design System Chi Tiết

### Color Palette — "Cosmic Noir"

```css
/* ═══════════════════════════════════════════
   COSMIC NOIR — Color System
   ═══════════════════════════════════════════ */

/* Background Layers */
--color-bg-primary:     hsl(240, 20%, 4%);     /* Gần đen, hơi xanh */
--color-bg-secondary:   hsl(240, 15%, 8%);     /* Layer 2 */
--color-bg-elevated:    hsl(240, 12%, 12%);    /* Cards, elevated */
--color-bg-surface:     hsl(240, 10%, 16%);    /* Inputs, hover states */

/* Accent Gradient — Neon Aurora */
--accent-start:         hsl(250, 90%, 65%);    /* Electric Violet */
--accent-mid:           hsl(290, 85%, 60%);    /* Vivid Magenta */
--accent-end:           hsl(330, 80%, 55%);    /* Hot Pink */

/* Secondary Accents */
--color-cyan:           hsl(185, 90%, 55%);    /* Neon Cyan */
--color-emerald:        hsl(160, 80%, 50%);    /* Emerald glow */
--color-amber:          hsl(38, 95%, 55%);     /* Warm amber */

/* Text Hierarchy */
--text-primary:         hsl(0, 0%, 95%);       /* Near white */
--text-secondary:       hsl(240, 5%, 55%);     /* Muted */
--text-tertiary:        hsl(240, 5%, 35%);     /* Very muted */

/* Glass System */
--glass-bg:             hsla(240, 20%, 15%, 0.4);
--glass-border:         hsla(0, 0%, 100%, 0.08);
--glass-border-hover:   hsla(0, 0%, 100%, 0.15);
--glass-blur:           20px;
--glass-saturate:       180%;
```

### Typography — "Space + Inter"

```
Primary Font:   "Space Grotesk"   → headings (geometric, techy, premium)
Secondary Font: "Inter"           → body (clean, highly readable)
Mono Font:      "JetBrains Mono"  → code snippets, tags
```

| Element | Font | Weight | Size | Tracking |
|---------|------|--------|------|----------|
| H1 (Hero) | Space Grotesk | 800 | `clamp(3rem, 8vw, 6rem)` | -0.04em |
| H2 (Section) | Space Grotesk | 700 | `clamp(2rem, 4vw, 3.5rem)` | -0.03em |
| H3 (Card) | Space Grotesk | 600 | `clamp(1.2rem, 2vw, 1.5rem)` | -0.02em |
| Body | Inter | 400 | 1rem (16px) | 0 |
| Body Small | Inter | 400 | 0.875rem | 0.01em |
| Label | Inter | 600 | 0.75rem | 0.15em |
| Code/Tag | JetBrains Mono | 500 | 0.8rem | 0.02em |

### Spacing Scale (4px base)

```
--space-1:   4px      --space-6:   24px     --space-11:  80px
--space-2:   8px      --space-7:   32px     --space-12:  96px
--space-3:   12px     --space-8:   40px     --space-13:  120px
--space-4:   16px     --space-9:   48px     --space-14:  160px
--space-5:   20px     --space-10:  64px     --space-15:  200px
```

### Border Radius Tokens

```
--radius-sm:    8px       (tags, badges)
--radius-md:    12px      (buttons, small cards)
--radius-lg:    16px      (cards)
--radius-xl:    24px      (glass panels)
--radius-2xl:   32px      (hero elements)
--radius-full:  9999px    (pills, avatars)
```

### Shadow Tokens

```
--shadow-subtle:    0 2px 8px hsla(0, 0%, 0%, 0.15);
--shadow-medium:    0 8px 32px hsla(0, 0%, 0%, 0.25);
--shadow-dramatic:  0 16px 64px hsla(0, 0%, 0%, 0.4);
--shadow-glow:      0 0 40px hsla(250, 90%, 65%, 0.3);
```

---

## 📐 Sections Chi Tiết

### 1. 🌟 Hero Section — "Portal Entry"

```
┌─────────────────────────────────────────────┐
│  [Aurora Canvas Background - full viewport] │
│  [Particle Field - interactive]              │
│                                              │
│        ┌────────────────┐                    │
│        │  Avatar (Glass  │                   │
│        │  Frame + Glow)  │                   │
│        └────────────────┘                    │
│                                              │
│     ✦ HELLO, I'M                             │
│                                              │
│      J O H N   D O E                         │
│      (Split-text reveal animation)           │
│                                              │
│     IT Student & Software Engineer           │
│     (Typewriter effect with cursor)          │
│                                              │
│     [ View My Work ]  [ Get In Touch ]       │
│     (Glass buttons with hover glow)          │
│                                              │
│         ▼ Scroll to explore                  │
│     (Smooth scroll indicator)                │
└─────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- Canvas-based aurora background với gradient noise
- Particle field (~80-120 particles) phản ứng theo vị trí chuột
- Avatar có glass morphism frame + animated gradient border spinning
- Text reveal: mỗi chữ cái xuất hiện tuần tự với stagger effect (GSAP SplitText)
- Typewriter effect cho tagline với blinking cursor
- Smooth parallax khi scroll ra khỏi hero (GSAP ScrollTrigger)
- Lenis smooth scroll integration

---

### 2. 📊 About Section — "Bento Grid"

```
┌──────────────────────────────────────────────┐
│  ✦ ABOUT ME                                  │
│  A Story of Code & Creativity                │
│                                              │
│  ┌──────────────────┬────────┬────────┐      │
│  │                  │  3+    │  15+   │      │
│  │  Bio text card   │ Years  │Projects│      │
│  │  (glass, 2 cols) │ Coding │ Built  │      │
│  │                  │        │        │      │
│  ├────────┬─────────┼────────┴────────┤      │
│  │  8+    │   ∞     │                 │      │
│  │ Tech   │Curiosity│  Quote card     │      │
│  │ Stacks │         │  (accent glow)  │      │
│  └────────┴─────────┴─────────────────┘      │
└──────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- CSS Grid bento layout (asymmetric) với gap animations
- Mỗi card có glass morphism + subtle hover tilt (CSS 3D perspective transform)
- Stat numbers animate từ 0 lên giá trị cuối (count-up with easing)
- Staggered reveal khi scroll vào view (GSAP ScrollTrigger)
- Quote card có animated conic-gradient border (spinning glow)
- Cards "breathe" nhẹ nhàng khi idle

---

### 3. ⚡ Skills Section — "Interactive Orbit"

```
┌──────────────────────────────────────────────┐
│  ✦ TECH STACK                                │
│  Technologies I Master                       │
│                                              │
│  ┌─────────────────────────────────────┐     │
│  │                                     │     │
│  │    ☁️AWS        ⚛️React              │     │
│  │         \      /                    │     │
│  │    📱Flutter — ◉ — 🟢Node.js        │     │
│  │         /      \                    │     │
│  │    🐍Python     🗄️SQL               │     │
│  │                                     │     │
│  │    🎨Figma      📊MongoDB           │     │
│  │                                     │     │
│  └─────────────────────────────────────┘     │
│                                              │
│  [Hover một skill → hiện detail card]        │
│  ┌──────────────────┐                        │
│  │ ⚛️ React         │                        │
│  │ ████████░░ 85%   │                        │
│  │ "Primary UI lib" │                        │
│  └──────────────────┘                        │
└──────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- Skill icons orbit/float nhẹ nhàng (CSS animation + GSAP)
- Hover vào skill → hiện glass detail card với animated progress bar
- Magnetic effect: icons hơi kéo về phía chuột (vanilla JS)
- Glow pulse effect trên mỗi icon
- Connection lines giữa related skills (SVG)
- **Fallback mobile**: responsive grid layout vẫn premium

---

### 4. 🖼️ Projects Section — "Showcase Gallery"

```
┌──────────────────────────────────────────────┐
│  ✦ FEATURED WORK                             │
│  Projects That Define Me                     │
│                                              │
│  ┌─────────────────────────────────────┐     │
│  │                                     │     │
│  │   [Project Image / Mockup]          │     │
│  │   (parallax tilt on hover)          │     │
│  │                                     │     │
│  │   ┌────────────────────────────┐    │     │
│  │   │ Glass overlay on hover     │    │     │
│  │   │                            │    │     │
│  │   │ 🏆 AI Study Planner        │    │     │
│  │   │ Next.js · TensorFlow       │    │     │
│  │   │ [ View ] [ GitHub ]        │    │     │
│  │   └────────────────────────────┘    │     │
│  └─────────────────────────────────────┘     │
│                                              │
│  ← Drag/Swipe to see more →                 │
│  ○ ● ○ ○                                    │
└──────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- Horizontal scroll carousel với CSS snap points
- 3D tilt/perspective effect trên mỗi project card (vanilla JS mousemove)
- Glass overlay xuất hiện smooth khi hover
- Tech tag badges với subtle glow
- Drag-to-scroll trên cả desktop lẫn mobile
- GSAP ScrollTrigger pin effect cho horizontal scroll
- Image mockups generated bằng AI

---

### 5. 📅 Experience — "Cinematic Timeline"

```
┌──────────────────────────────────────────────┐
│  ✦ MY JOURNEY                                │
│  The Path So Far                             │
│                                              │
│         2026                                 │
│           │                                  │
│           ◉───── ┌─────────────────────┐     │
│           │      │ Intern @ Tech       │     │
│           │      │ Startup             │     │
│           │      │ Building full-stack..│     │
│           │      └─────────────────────┘     │
│         2025                                 │
│           │                                  │
│     ┌─────┤───◉                              │
│     │ Open│   │                              │
│     │Source│   │                              │
│     └─────┘   │                              │
│             2024                             │
│               │                              │
│               ◉───── Hackathon Winner        │
└──────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- Timeline line vẽ bằng SVG path animation (`stroke-dashoffset` animate on scroll)
- Mỗi item slide vào từ left/right xen kẽ (GSAP stagger)
- Timeline dots glow + pulse khi scroll đến
- Glass cards với animated gradient borders
- Parallax nhẹ trên background layer

---

### 6. 💬 Testimonials — "Floating Cards" *(SECTION MỚI)*

```
┌──────────────────────────────────────────────┐
│  ✦ KIND WORDS                                │
│                                              │
│     ┌──────────┐  ┌──────────┐               │
│     │ "Great   │  │ "Amazing │               │
│     │  dev..." │  │  work.." │               │
│     │ — Prof X │  │ — CTO Y  │               │
│     └──────────┘  └──────────┘               │
│          ┌──────────┐                        │
│          │ "Highly  │                        │
│          │  skilled"│                        │
│          │ — Lead Z │                        │
│          └──────────┘                        │
└──────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- Cards float nhẹ nhàng lên xuống (staggered CSS animation)
- Infinite marquee auto-scroll với pause on hover
- Glass cards với decorative quote marks (oversized, semi-transparent)
- Mỗi card có subtle gradient glow khác nhau

---

### 7. 📬 Contact — "Connection Hub"

```
┌──────────────────────────────────────────────┐
│  ✦ LET'S CONNECT                             │
│                                              │
│  ┌─────────────────────────────────────┐     │
│  │  Glass card with form               │     │
│  │                                     │     │
│  │  [ Your Name          ]             │     │
│  │  [ Your Email         ]             │     │
│  │  [ Message...         ]             │     │
│  │                                     │     │
│  │  [ ✨ Send Message ]                │     │
│  └─────────────────────────────────────┘     │
│                                              │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                │
│  │ GH │ │ LI │ │ TW │ │ ✉️ │                │
│  └────┘ └────┘ └────┘ └────┘                │
│  (Magnetic social icons with glow)           │
│                                              │
│  © 2026 Phan Đình Huy · Crafted with ♥       │
└──────────────────────────────────────────────┘
```

**Kỹ thuật VIP:**
- Contact form trong glass card lớn
- Input fields có animated underline/gradient border on focus
- Submit button với shimmer sweep effect
- Social icons có magnetic hover (kéo về phía chuột) + glow pulse
- Footer minimal, elegant, có gradient text

---

## 🔥 Hiệu Ứng VIP Chi Tiết

### A. Liquid Glass Effect

```css
.glass-card {
  background: hsla(240, 20%, 15%, 0.4);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid hsla(0, 0%, 100%, 0.08);
  border-radius: 24px;
  box-shadow:
    0 8px 32px hsla(0, 0%, 0%, 0.3),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.glass-card:hover {
  border-color: hsla(0, 0%, 100%, 0.15);
  box-shadow:
    0 16px 48px hsla(0, 0%, 0%, 0.4),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.15);
}
```

### B. Animated Gradient Border (Spinning Glow)

```css
@property --angle {
  syntax: '<angle>';
  initial-value: 0deg;
  inherits: false;
}

.glow-border {
  position: relative;
}
.glow-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: conic-gradient(from var(--angle),
    hsl(250, 90%, 65%),
    hsl(290, 85%, 60%),
    hsl(330, 80%, 55%),
    hsl(185, 90%, 55%),
    hsl(250, 90%, 65%));
  animation: spin-gradient 4s linear infinite;
  z-index: -1;
}
@keyframes spin-gradient {
  to { --angle: 360deg; }
}
```

### C. Magnetic Cursor

```javascript
// Pseudo-code
- Custom cursor div theo chuột với lerp() smoothing (0.15 factor)
- Khi hover lên interactive elements:
  → cursor scale lên 2.5x
  → mix-blend-mode: difference
  → border glow
- Trail effect: 3-4 ghost circles theo sau
- Auto-hide trên touch devices
```

### D. Particle Field (Canvas)

```javascript
// Pseudo-code
- 80-120 particles, random position + velocity
- Mỗi frame: update position, bounce off edges
- Khi distance < 120px: vẽ connecting line (opacity = distance ratio)
- Mouse interaction: particles trong radius 150px bị repel
- Particles có varying size (1-3px) và opacity (0.3-0.8)
- Fade ở edges bằng radial gradient mask
- requestAnimationFrame loop
```

### E. Aurora Background (Canvas)

```javascript
// Pseudo-code
- 3-4 large color blobs (gradient circles)
- Colors: violet, magenta, cyan, emerald
- Mỗi blob di chuyển theo simplex noise path
- Gaussian blur rất lớn (100-150px)
- Very slow movement (0.001 speed factor)
- Low opacity (0.3-0.5) để blend với bg
- Performance: chỉ render 30fps
```

### F. Scroll-Driven Cinema (GSAP + Lenis)

```javascript
// Lenis + GSAP sync
const lenis = new Lenis({ autoRaf: false });
gsap.ticker.add((time) => lenis.raf(time));
gsap.ticker.lagSmoothing(0);
lenis.on('scroll', ScrollTrigger.update);

// Mỗi section có entrance riêng:
// Hero:    parallax exit (y: -200, opacity: 0)
// About:   bento cards stagger từ dưới lên
// Skills:  orbit icons scale từ 0
// Projects: horizontal scroll pin
// Timeline: SVG path draw + items slide left/right
// Contact:  form + icons bounce vào
```

### G. Text Reveal (Split Text)

```javascript
// Split heading thành individual characters
// GSAP stagger animation:
gsap.from(chars, {
  y: 100,
  opacity: 0,
  rotateX: -90,
  stagger: 0.03,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// Typewriter cho tagline:
// Hiện từng char với delay, blinking cursor ở cuối
```

---

## 🛠️ Tech Stack & Libraries

| Thành Phần | Công Nghệ | Phiên Bản | Vai Trò |
|------------|-----------|-----------|---------|
| **Animation Engine** | GSAP + ScrollTrigger | 3.12.x | Core animation, scroll-driven cinema |
| **Smooth Scroll** | Lenis | Latest | Buttery smooth scrolling, sync GSAP |
| **3D / Canvas** | Vanilla Canvas API | Native | Aurora background, particle field |
| **Typography** | Google Fonts | — | Space Grotesk, Inter, JetBrains Mono |
| **Icons** | Lucide Icons (SVG) | Latest | Lightweight, modern icon set |
| **CSS** | Vanilla CSS + Custom Properties | — | Full control, no framework bloat |
| **Structure** | Semantic HTML5 | — | SEO optimized |

> **Không dùng framework** (React, Vue, Next.js) — giữ nguyên vanilla HTML/CSS/JS để:
> 1. Portfolio load nhanh nhất có thể (< 2s)
> 2. Showcase kỹ năng code thuần
> 3. Dễ deploy (zero build step)

### CDN Links

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis Smooth Scroll -->
<script src="https://unpkg.com/lenis@latest/dist/lenis.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
```

---

## 🏗️ Kiến Trúc File Mới

```
d:\advanced web\th\ok\
│
├── index.html                  ← [MODIFY] Cấu trúc HTML mới, semantic
├── DESIGN_PLAN.md              ← File này
│
├── css/
│   ├── design-system.css       ← [NEW] Tokens, variables, typography
│   ├── layout.css              ← [NEW] Grid systems, containers, nav
│   ├── components.css          ← [NEW] Cards, buttons, badges, forms
│   ├── effects.css             ← [NEW] Glass, glow, aurora CSS effects
│   └── animations.css          ← [NEW] Keyframes, transitions
│
├── js/
│   ├── app.js                  ← [NEW] Main orchestrator, init modules
│   ├── cursor.js               ← [NEW] Magnetic custom cursor
│   ├── particles.js            ← [NEW] Canvas particle field system
│   ├── scroll-cinema.js        ← [NEW] GSAP scroll-driven animations
│   ├── text-reveal.js          ← [NEW] Split text & typewriter
│   └── aurora.js               ← [NEW] Canvas aurora background
│
└── assets/
    ├── images/                 ← [NEW] Project mockups (AI generated)
    └── icons/                  ← [NEW] Custom SVG icons (nếu cần)
```

---

## 📦 Proposed Changes

### CSS Files

#### [NEW] `css/design-system.css`
- CSS Custom Properties cho toàn bộ color palette "Cosmic Noir"
- Typography scale với `clamp()` cho fluid sizing
- Spacing scale, border radius tokens, shadow tokens
- CSS reset và base styles
- Google Fonts import

#### [NEW] `css/layout.css`
- Container system responsive (max-width: 1200px)
- Bento grid utilities
- Section spacing rules (min-height: 100vh, padding)
- Dots navigation sidebar (fixed position)
- Responsive breakpoints (375, 768, 1024, 1440px)

#### [NEW] `css/components.css`
- Glass cards (multiple variants: default, stat, quote, project)
- Buttons (primary glow, outline shimmer, ghost)
- Badges/Tags (tech stack labels)
- Progress bars (animated fill)
- Timeline components (line, dot, card)
- Form inputs (animated underline, glass background)
- Social link icons (circular, hover glow)
- Avatar component (glass frame, gradient border)

#### [NEW] `css/effects.css`
- Liquid glass backdrop-filter rules
- Animated gradient borders (`@property --angle`)
- Glow effects (box-shadow animations)
- Shimmer/shine sweep effects
- Aurora gradient keyframes (for CSS fallback)
- Noise texture overlay

#### [NEW] `css/animations.css`
- Entrance: fadeInUp, fadeInLeft, fadeInRight, scaleIn
- Float: gentle up-down bob (testimonials)
- Pulse/breathe: subtle scale oscillation
- Typewriter: cursor blink
- Orbit: circular motion for skill icons
- Draw: SVG stroke animation

---

### JavaScript Modules

#### [NEW] `js/app.js`
- Main entry point — DOMContentLoaded
- Register GSAP plugins (ScrollTrigger)
- Initialize Lenis smooth scroll + GSAP sync
- Initialize all sub-modules (cursor, particles, aurora, scroll, text)
- Smooth scroll navigation (anchor links)
- Dots navigation active state observer (IntersectionObserver)
- Stats count-up animation (triggered by scroll)
- `prefers-reduced-motion` check → disable heavy effects

#### [NEW] `js/cursor.js`
- Create custom cursor DOM elements (outer ring + inner dot)
- `mousemove` listener with lerp smoothing
- Scale up on interactive elements (`a`, `button`, `.glass-card`)
- `mix-blend-mode: difference` on hover
- Auto-hide on touch/mobile (`matchMedia`)
- Cleanup function for unmount

#### [NEW] `js/particles.js`
- Create `<canvas>` overlay in hero section
- Generate 80-120 particles with random props
- Animation loop: update positions, draw connections
- Mouse repel effect (150px radius)
- Responsive: resize canvas on window resize
- Performance: skip frames if FPS < 30
- `prefers-reduced-motion`: static constellation fallback

#### [NEW] `js/scroll-cinema.js`
- GSAP ScrollTrigger cho mỗi section entrance
- Hero: parallax exit (y shift + fade)
- About: bento cards stagger reveal (y: 60 → 0, opacity: 0 → 1)
- Skills: orbit icons scale/rotate entrance
- Projects: horizontal scroll pin (ScrollTrigger.create with pin)
- Timeline: SVG path `strokeDashoffset` animate + items alternate left/right
- Testimonials: cards fade in with float
- Contact: form slide up + social icons bounce (back.out ease)

#### [NEW] `js/text-reveal.js`
- `splitText(element)`: wrap each char in `<span>` with `.char` class
- GSAP stagger animation per character (y, opacity, rotateX)
- Typewriter effect: sequential char reveal with blinking cursor
- Gradient text animation (background-position shift)

#### [NEW] `js/aurora.js`
- Canvas setup (full viewport, behind content)
- 3-4 gradient blobs with noise-based movement
- Colors cycle slowly through aurora palette
- Gaussian blur via `ctx.filter` or pre-blurred drawing
- 30fps cap for performance
- Fallback: CSS radial gradient animation

---

### HTML

#### [MODIFY] `index.html`
- **Tái cấu trúc hoàn toàn** với semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- Remove ALL inline CSS → link external CSS files
- Remove ALL inline JS → link external JS modules
- Add proper `<meta>` tags (charset, viewport, description, OG tags)
- Add custom cursor markup (`<div class="cursor">`)
- Add dots navigation sidebar (`<nav class="dots-nav">`)
- Add `<canvas>` elements cho aurora + particles
- Add new Testimonials section
- Add Contact form (HTML5 form, no backend)
- Add Lucide Icons integration
- Proper heading hierarchy (single `<h1>`)
- Unique IDs on all interactive elements
- `loading="lazy"` on images
- `prefers-color-scheme` support

---

## ✅ Verification Plan

### Automated Tests
- **Lighthouse Audit**: Performance ≥ 90, Accessibility ≥ 95, SEO = 100
- **Cross-browser**: Test trên Chrome, Firefox, Edge (Safari nếu có)
- **Responsive breakpoints**: 375px, 768px, 1024px, 1440px, 1920px

### Manual Verification
- Mở trên browser thực để kiểm tra visual quality
- Test smooth scroll, hover effects, particle interaction
- Kiểm tra magnetic cursor behavior
- Test mobile touch interactions (disable cursor, swipe carousel)
- `prefers-reduced-motion: reduce` → verify all animations disabled gracefully
- DevTools Performance tab → verify FPS ≥ 55 average
- So sánh before/after để đảm bảo upgrade rõ rệt

---

## ⏱️ Timeline Ước Tính

| Phase | Công Việc | Thời Gian |
|-------|-----------|-----------|
| 1 | Design System CSS (tokens, typography, reset) | ~15 min |
| 2 | HTML restructure + semantic layout | ~15 min |
| 3 | Layout CSS (grid, containers, nav) | ~10 min |
| 4 | Components CSS (cards, buttons, forms) | ~15 min |
| 5 | Effects CSS (glass, glow, shimmer) | ~10 min |
| 6 | Animations CSS (keyframes) | ~5 min |
| 7 | JS: Aurora canvas background | ~10 min |
| 8 | JS: Particle field system | ~15 min |
| 9 | JS: Magnetic cursor | ~10 min |
| 10 | JS: Scroll cinema (GSAP + Lenis) | ~15 min |
| 11 | JS: Text reveal + typewriter | ~10 min |
| 12 | JS: App orchestrator | ~10 min |
| 13 | Generate project mockup images | ~10 min |
| 14 | Polish + responsive + accessibility | ~15 min |
| **Total** | | **~2.5 giờ** |

---

## ❓ Open Questions

> Trả lời những câu hỏi này trước khi bắt đầu code:

1. **Nội dung cá nhân**: Giữ nguyên "Phan Đình Huy" hay thay bằng tên thật?
2. **Avatar**: Có ảnh chân dung không, hay giữ avatar chữ cái?
3. **Projects**: Có project thật nào muốn showcase? (tên, mô tả, link, screenshot)
4. **Testimonials**: Có muốn thêm section testimonials không?
5. **Contact form**: Form gửi email thật (cần backend) hay chỉ UI demo?
6. **Hosting/Deploy**: Dự định deploy ở đâu? (ảnh hưởng optimization)
7. **Branding color**: Muốn giữ indigo→pink gradient hay thử palette mới?

---

> **Ghi chú**: Document này là living document — sẽ được cập nhật trong quá trình phát triển.
>
> *Tạo bởi Antigravity AI · Cập nhật: 2026-05-27*
