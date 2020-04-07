---
layout: page
title: Resume
permalink: /resume/
---

{% assign resume = site.data.resume %}

## Info

### General

{% for link in resume.info.links %}
[**{{ link.name }}**]({{ link.url }}){% if forloop.last != true %} -{% endif %}
{%- endfor %}

{{ resume.info.description }}

### Summary

{% for summary_item in resume.info.summary %}
- {{ summary_item }}
{%- endfor %}

## Experience

{% for job in resume.job_history %}
### {{ job.company_name }}

From **{{ job.start_date }}** to **{{ job.end_date }}**

Working as **{{ job.job_title }}**

**Summary**

{{ job.summary | join: "

"}}

**Technologies I worked close with**

{% for tech in job.technologies %}
- {{ tech }}
{%- endfor %}

**Responsibilities and Highlights**

{% for resp in job.responsibilities_and_highlights %}
- {{ resp }}
{%- endfor %}

--

{% endfor %}

## Education

{% for edu in resume.education %}
### {{ edu.title }}

{% if edu.institution %}
**{{ edu.institution.name }} - {{ edu.institution.location }}**
{% endif %}

{{ edu.description }}

--

{% endfor %}