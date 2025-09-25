# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal academic website built with the **al-folio** Jekyll theme. It's a static site generator that creates a portfolio website for academics, featuring blog posts, projects, publications, and CV.

## Development Commands

### Local Development
- **Docker (Recommended)**: `docker compose up` - Start local development server at http://localhost:8080
- **Legacy Jekyll**: `bundle exec jekyll serve` - Start local server at http://localhost:4000 (requires Ruby/Bundler setup)

### Build and Deployment
- **Build site**: `bundle exec jekyll build` - Generates static site in `_site/` directory
- **CSS optimization**: `purgecss -c purgecss.config.js` - Remove unused CSS classes after build

### Code Quality
- **Pre-commit hooks**: `pre-commit run --all-files` - Run linting checks (trailing whitespace, YAML validation, large files)
- **Prettier formatting**: `npx prettier --write .` - Format code using Prettier with Liquid plugin

## Architecture and Key Directories

### Content Structure
- `_posts/` - Blog posts in Markdown format with YAML frontmatter
- `_projects/` - Project descriptions and portfolios
- `_pages/` - Static pages (about, CV, publications, etc.)
- `_news/` - News/announcements shown on homepage
- `_bibliography/` - BibTeX files for academic publications

### Configuration and Data
- `_config.yml` - Main Jekyll configuration (site settings, plugins, collections)
- `_data/` - YAML data files:
  - `cv.yml` - CV data structure
  - `repositories.yml` - GitHub repositories to display
  - `coauthors.yml` - Academic collaborators
  - `venues.yml` - Publication venues

### Theme and Styling
- `_layouts/` - HTML templates for different page types
- `_includes/` - Reusable HTML components
- `_sass/` - Sass/SCSS stylesheets
- `assets/` - Static assets (images, CSS, JS, PDFs)

### Development Tools
- `Gemfile` - Ruby dependencies for Jekyll and plugins
- `package.json` - Node.js dependencies (Prettier for formatting)
- `.pre-commit-config.yaml` - Pre-commit hooks configuration
- `docker-compose.yml` - Docker development environment

## Important Notes

### Content Management
- Posts use Jekyll's date-based permalink structure: `/blog/:year/:title/`
- Publications are automatically generated from BibTeX files in `_bibliography/`
- The site supports multiple content types: blog posts, projects, news, and academic publications

### Deployment
- Site auto-deploys to GitHub Pages via GitHub Actions on push to master
- GitHub Actions workflow is in `.github/workflows/deploy.yml`
- Deployed site is served from `gh-pages` branch (never edit this branch manually)

### Theme Features
- Responsive design with light/dark mode support
- Academic features: publication lists, CV generation, project galleries
- Blog functionality with tags, categories, and related posts
- Math typesetting via MathJax, code highlighting, and chart support