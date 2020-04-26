---
layout: default
title: Portfolio
permalink: /portfolio/
---
<style>
  .portfolio-container {
    display: flex;
    flex-wrap: wrap;
  }

  .portfolio-container > div {
    max-width: 12%; 
    padding-bottom: 16px; 
    padding-right: 1%;
  }

  .portfolio-container > div > img {
    width: 100%; 
    border-radius: 16px;
  }
</style>
{% assign portfolio = site.data.portfolio %}

**WIP...**

## Apps
<div class="portfolio-container">
{% for app in portfolio.apps %}
<div>
<img src="/assets/images/app_{{ app.icon }}_icon_1024.png"/>
</div>
{% endfor %}
</div>