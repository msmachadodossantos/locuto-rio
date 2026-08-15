---
# Main title of the page displayed in the browser tab and at the top of the content
title: "Complete Page Title"

# Description used for SEO and social media sharing meta tags
description: "A detailed description of the content on this page for search engine optimization purposes."

# Controls whether the page is displayed in the sidebar and its numerical order
sidebar:
  label: "Short Menu Name"
  order: 1
  badge:
    text: "New"
    variant: "tip" # Options: tip, note, danger, caution, success, or custom colors
  hidden: false
  attrs:
    target: "_blank" # Extra HTML attributes for the sidebar link item

# Controls the display of interface elements on this specific page
template: doc # Options: 'doc' (default with sidebar and table of contents) or 'splash' (landing page without sidebar)
hero:
  title: "Featured Title (typically used with template: splash)"
  tagline: "Catchy subtitle or slogan"
  image:
    file: ../../assets/hero-image.svg
    alt: "Image description for accessibility"
  actions:
    - text: "Get Started"
      link: /dev/introduction/
      icon: right-arrow
      variant: primary
    - text: "View on GitHub"
      link: https://github.com
      icon: external
      variant: minimal

# Configures page navigation and footer links
prev: 
  text: "Custom Previous Page"
  link: "/path/to/previous/"
# To disable previous/next pagination on this page, use: prev: false / next: false
next: 
  text: "Custom Next Page"
  link: "/path/to/next/"

# Configures page-specific elements like the table of contents and edit link
tableOfContents: 
  minHeadingLevel: 2
  maxHeadingLevel: 4
editLink: true # Enables or disables the "Edit this page" link

# Additional metadata for translation and internationalization (if applicable)
# i18nReady: true
---