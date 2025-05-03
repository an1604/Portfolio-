# Specification for Campaign Connect Interactive Popup

## Overview
Add an interactive popup that appears when a user clicks on the Campaign Connect project card, informing them that this is a closed-source project and directing them to the contact form for inquiries.

## Requirements

### 1. Popup Functionality
- Trigger: Popup should appear only when a user clicks on the Campaign Connect project card
- Message: "This project is closed-source, so there is no open repository. For any questions, you are very welcome to reach me here: [Contact Form]"
- The [Contact Form] text should be a clickable link to the contact section of the portfolio
- Outside click: Popup should close when user clicks outside the popup
- Close button: Popup should have an "X" in the top right corner to close it

### 2. Popup Design
- Background: Semi-transparent overlay covering the entire screen
- Popup container: Centered, white background with rounded corners
- Typography: Consistent with the rest of the portfolio
- Animation: Fade-in/fade-out when opening/closing
- Responsive: Should work on all screen sizes

### 3. Implementation Approach

#### 3.1 Create Popup Component
- Create a new React component for the popup
- Component should be conditionally rendered based on state

#### 3.2 Modify Work Component
- Add state to track if popup is visible
- Add click handler to Campaign Connect project card
- Pass necessary props to popup component

#### 3.3 Contact Form Link
- Create a direct link to the contact form section 
- Use the existing ID for the contact section (likely "#contact")

## Technical Considerations
- Prevent body scroll when popup is open
- Ensure popup is accessible (keyboard navigation, screen readers)
- Make sure popup works on mobile devices
- Use CSS transitions for smooth animations

## File Modifications
- Create new file: `components/ProjectPopup.jsx` for the popup component
- Modify `components/Work.jsx` to handle popup visibility and rendering

## Implementation Timeline
1. Create popup component
2. Modify Work component to handle popup state and rendering
3. Add event handlers and link to contact section
4. Style popup for all screen sizes
5. Test functionality across devices 