# Design Guidelines: Sports-Themed Student Blog

## Design Approach

**Reference-Based Approach** - Drawing inspiration from athletic brands (Nike, Adidas digital experiences) and modern fitness platforms (Strava, Peloton), emphasizing energy, movement, and personal achievement.

**Core Principle**: Bold, energetic design that conveys athleticism and personal drive while maintaining approachability for a student blog.

## Typography

- **Primary Font**: "Inter" (Google Fonts) - Clean, modern, excellent readability
- **Accent Font**: "Bebas Neue" (Google Fonts) - Bold, athletic display font for headlines
- **Hierarchy**:
  - Hero Headlines: Bebas Neue, text-6xl to text-8xl, tracking-tight
  - Section Headers: Bebas Neue, text-4xl to text-5xl
  - Body Text: Inter, text-base to text-lg, font-normal
  - Captions/Meta: Inter, text-sm, font-medium

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 24 (e.g., p-4, gap-8, my-16)

**Container Strategy**:
- Full-width hero with max-w-7xl inner content
- Content sections: max-w-6xl mx-auto
- Text-heavy areas: max-w-4xl

## Page Structure

### 1. Hero Section (100vh)
- Large athletic background image (student in sports action/training environment)
- Bold typographic overlay with name and tagline
- Diagonal accent stripe overlay (45-degree angle, semi-transparent)
- CTA buttons with blur backdrop ("探索更多" / "聯絡我")

### 2. About/Self-Introduction (Auto height, py-20)
Two-column layout (single column on mobile):
- **Left Column**: Profile image with diagonal frame treatment, stats cards (學校/年級, 專長運動, 經驗年數)
- **Right Column**: Personal story, interests, achievements
- Include 3-4 specialty sports cards with icons showing main athletic focuses

### 3. Skills/Strengths Section (py-16)
- Grid of 4-6 cards (grid-cols-2 lg:grid-cols-3)
- Each card: Sport icon, title, brief description
- Angled corner accents on cards

### 4. Guestbook/Message Board (py-20)
- Two-column layout: Form (left) + Messages display (right)
- **Form inputs**: Name field, message textarea, submit button with athletic styling
- **Messages display**: Card-based list with author name, timestamp, message content
- Section header with visitor count badge

### 5. Contact/Find Me Section (py-16)
- Centered layout with social media grid
- Large icon buttons for Email, Instagram, Facebook, LINE
- Each platform in rounded square cards with icon + label
- Background: Subtle diagonal pattern or gradient

### 6. Footer (py-12)
- Centered copyright and "Built by [Name]" credit
- Secondary navigation links (回到頂端)
- Small decorative sport icons or geometric shapes

## Component Design

**Cards**: Rounded corners (rounded-xl), shadow-lg on hover, subtle border accents
**Buttons**: Rounded-lg, bold font-semibold, px-8 py-4, uppercase tracking-wide
**Forms**: Clear labels, rounded-lg inputs, focus:ring treatment, border-2
**Message Cards**: Border-l-4 accent stripe, p-6, rounded-r-lg, shadow-sm

## Images

### Required Images:
1. **Hero Background**: Full-screen athletic action shot - student playing sports, training, or in athletic gear (should convey energy and movement)
2. **Profile Photo**: Professional headshot or athletic portrait for About section (square or circular crop)
3. **Optional Accent Images**: Small sport/activity icons for skills section (can use icon library instead)

**Image Treatment**: Apply diagonal overlays, angular crops, or gradient overlays to maintain sports aesthetic

## Animations

**Minimal, purposeful motion**:
- Smooth scroll behavior
- Cards: Subtle lift on hover (translate-y-1, shadow increase)
- Buttons: Scale slightly on hover (scale-105)
- NO complex scroll animations or excessive transitions

## Icons

**Library**: Heroicons (CDN) for UI elements
**Sports Icons**: Font Awesome for sport-specific icons (soccer ball, basketball, running, etc.)

## Accessibility

- High contrast text on backgrounds
- Form labels clearly associated with inputs
- Focus states visible with ring-2 ring-offset-2
- Semantic HTML throughout (nav, main, section, footer)

## Distinctive Elements

- **Diagonal Accents**: Use diagonal stripes, angled borders, or tilted elements throughout to convey movement
- **Athletic Color Blocking**: Bold section divisions with strong contrast
- **Achievement Badges**: Circular or shield-shaped badges for stats/accomplishments
- **Dynamic Grid**: Asymmetric card arrangements where appropriate to break monotony

**Layout Philosophy**: Energy through angles - avoid purely rectangular layouts. Use diagonal elements, tilted cards, or asymmetric grids to create visual dynamism that reflects athletic movement.