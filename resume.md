---
layout: default
title: Resume
permalink: /resume/
---

{% assign resume = site.data.resume %}

{% for link in resume.info.links %}
[**{{ link.name }}**]({{ link.url }}){% if forloop.last != true %} -{% endif %}
{%- endfor %}

{{ resume.info.description }}

### Employment History and Highlights

{% for job in resume.job_history %}
**{{ job.company_name }}** / {{ job.job_title }} / {{ job.start_date }} ~ {{ job.end_date }} (**{{ job.duration }}**)

{% for resp in job.highlights %}
- {{ resp }}
{%- endfor %}

{% endfor %}

### Education

{% for edu in resume.education %}
**{{ edu.title }}** {% if edu.institution %}- {{ edu.institution.name }} ({{ edu.institution.location }}) {% endif %}- {{ edu.description }}
{% endfor %}
