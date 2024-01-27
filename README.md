## AnimeTask

# AnimeContent Component
- The AnimeContent component is a React Native component designed to display detailed information about anime content. 
- It includes functionalities to generate a token, retrieve content, and provide an interactive user interface. 
- Below is an overview of the component's structure and functionalities.

# Table of Contents
- Dependencies
- Installation
- Component Structure
- Functions
- Styles

# Dependencies
- React Native
- react-native-vector-icons
- react-native-render-html
- axios

# Installation
- npx react-native init animeContent
- npm install react-native-vector-icons react-native-render-html axios 

# Component Structure
- Header: Displays the current date and "TODAY" text.
- Vs: Displays a "Vs" text in a circular background.
- CardContent: Displays the main content, including an image, caption, and a refresh button.
- Background Image: Displays an image background with overlay text.
- Close Button: A button to navigate back to the 'AnimeCard' screen.
- Overlay Text: Displays an overlay with text over the background image.
- ContentView: Displays the main content, including an image, caption, and a refresh button.
- DetailsView: Displays detailed information about the content.
- Footer: Displays additional information and provides a refresh button.
- ShareCard: A component for sharing the anime content.

# Functions
- generateTokenCall: Generates a token using the email , retrieves content using the generated token, and updates  the state.
- Styles: Defines styles for different components and views within the AnimeContent.
- Customize these styles according to your application's design requirements.
- openContent: Navigates to the 'AnimeContent' screen.
