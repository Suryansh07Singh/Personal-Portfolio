# Profile Image & Glassmorphism Card - Documentation

## Features Implemented

### 1. **Circular Profile Image with Rotating Gradient Ring**
- **Passport-size circular format** with perfect circular dimensions
- **Rotating gradient animation** - 8-second continuous rotation using `rotateGradient` keyframes
- **Gradient colors**: Purple (#cb70ff) → Tan (#fbd9ad) → Purple (#be50f4)
- **Floating animation** - Subtle up/down motion for dynamic effect
- **Glowing animation** - Pulsing glow effect that enhances the visual appeal
- **Hover effect**: Image scales up to 1.05x and glows intensely on mouseover
- **Interactive cursor**: Changes to pointer on hover

### 2. **Glassmorphism Card**
- **Glass effect**: Semi-transparent background (rgba) with 10px blur backdrop filter
- **Border styling**: Subtle white border with opacity for glass appearance
- **Rounded corners**: 20px border-radius for smooth, modern look
- **Smooth animations**: Slides up from bottom on load, shimmer effect on background
- **Hover effects**: 
  - Lifts up with Y-axis translation (-10px)
  - Scales slightly (1.02x)
  - Enhanced box shadow with purple glow
  - Border color brightens

### 3. **Image Hover Effects**
- **Scale transformation**: 1.05x scaling on hover
- **Shadow enhancement**: Increases from 20px to 50px glow radius
- **Inset shadow**: Creates 3D depth effect
- **Smooth transition**: 0.3s ease transition for refined motion

### 4. **Card Content Sections**
- **Title & Subtitle**: Large typography with text shadows
- **Description**: Readable text with proper line-height
- **Stats Section**: Displays achievements/metrics with number and label
- **Action Buttons**: 
  - Primary button (gradient background)
  - Secondary button (glass effect)
  - Both with hover animations

## CSS Classes

### Main Containers
- `.profile-container` - Flex container holding image and card
- `.profile-image-wrapper` - Container for circular image with ring
- `.glassmorphism-card` - Main card component

### Image-Related
- `.gradient-ring` - Rotating gradient border
- `.profile-image` - Passport-size circular image

### Card Content
- `.card-content` - Content wrapper
- `.card-title` - Main heading
- `.card-subtitle` - Role/subtitle text
- `.card-description` - Description paragraph
- `.card-stats` - Statistics grid
- `.stat-item` - Individual stat
- `.stat-number` - Stat number
- `.stat-label` - Stat label
- `.card-buttons` - Button container
- `.card-btn` - Button base class
- `.btn-primary-card` - Primary action button
- `.btn-secondary-card` - Secondary action button

## Animations Included

### `rotateGradient`
- Duration: 8 seconds
- Loop: Infinite
- Effect: 360-degree smooth rotation

### `imageFloat`
- Duration: 3 seconds
- Effect: Vertical floating motion (+/- 10px)

### `imageGlow`
- Duration: 4 seconds
- Effect: Pulsing shadow effect

### `slideInUp`
- Duration: 0.8 seconds
- Effect: Element slides up from below with fade-in

### `shimmer`
- Duration: 8 seconds
- Effect: Background position animation for shimmer

## Responsive Breakpoints

### **Large Screens (1200px+)**
- Full size implementation
- Side-by-side layout

### **Tablet (968px - 767px)**
- Smaller image (240px)
- Adjusted padding and font sizes
- Still horizontal layout

### **Mobile (767px - 480px)**
- Stacked vertical layout
- Image size reduced to 220px
- Centered card
- Full-width card

### **Small Mobile (< 480px)**
- Very compact design
- 180px × 180px image
- Extra padding reduction
- Optimized button sizing

## Usage Example

```jsx
import ProfileShowcase from './components/ProfileShowcase';

function App() {
  return (
    <ProfileShowcase 
      profileImage="./images/your-photo.jpg"
      name="John Doe"
      role="Full Stack Developer"
      description="Create amazing web experiences..."
      stats={[
        { number: '50+', label: 'Projects' },
        { number: '10+', label: 'Clients' },
        { number: '3+', label: 'Years' }
      ]}
    />
  );
}
```

## Color Scheme

- **Primary Gradient**: #cb70ff → #be50f4 (Purple tones)
- **Accent Color**: #fbd9ad (Tan/Gold)
- **Text Color**: #fbd9ad (Light text on dark background)
- **Background**: Transparent with blur effect
- **Border Color**: #1f0060 (Deep purple)

## Performance Notes

1. **GPU Acceleration**: All animations use `transform` for smooth 60fps performance
2. **Backdrop Filter**: Blur effect optimized for modern browsers
3. **Animation Optimization**: All keyframes use `transform` and `opacity` for best performance

## Browser Support

- ✅ Chrome/Edge (All modern versions)
- ✅ Firefox (v103+)
- ✅ Safari (v15+)
- ⚠️ IE 11 (No backdrop-filter support)

## Customization Tips

1. **Adjust gradient colors**: Modify the `conic-gradient` in `.gradient-ring`
2. **Change animation speed**: Modify the duration values in keyframes (e.g., `8s` → `10s`)
3. **Adjust blur amount**: Change `blur(10px)` in `.glassmorphism-card`
4. **Modify border opacity**: Change `rgba(255, 255, 255, 0.2)` for different transparency

## Tips for Best Results

1. Use a circular or square passport-size photo for best appearance
2. Ensure image has good contrast against the gradient ring
3. Keep the description text concise (2-3 lines)
4. Test stats section on mobile devices
5. Consider the background behind the card for best glass effect
