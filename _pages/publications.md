---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
<script src="{{ base_path }}/assets/js/nav.js"></script>
{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

<!-- {% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %} -->

<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="pubnav" class="greedy-nav">
        <!-- <button><div class="navicon"></div></button> -->
        <ul class="visible-links">
            <li class="active">
            <a href="#" onclick="show_conference()">Conference Papers</a>
            </li>
            <li>
            <a href="#" onclick="show_journal()">Journal Papers</a>
            </li>
            <li>
            <a href="#" onclick="show_patent()">Patents</a>
            </li>
            <li>
            <a href="#" onclick="show_copyright()">Copyrights</a>
            </li>
        </ul>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>



<div id="conference">
<p style="padding-left: 1em">[ #: Corresponding Author, †: Supervising Student ]</p>
{% assign conference_list = site.data.pub_conference %}
<ol reversed="reversed">
  {% for pub in conference_list %}
    <li>
<!-- 输出作者名单 -->
        {% for author in pub.Authors %}
          <!-- {% assign name_list = '' %} -->
          {% assign name = author[0] %}
          {% assign role = author[1] %} 
          <!-- 记录作者数组边界 -->
          {% assign boundary = forloop.length|minus:1 %} <!-- forloop.length是遍历的长度 -->
          <!-- # 角色： 0代表普通作者，1表示自己非通讯，2表示自己为通讯，3表示所指导学生（加粗），4表示非自己的通讯作者# -->
          {% if role == 1 %} <!-- 1表示自己非通讯身份 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '</u></strong>' %}
          {% elsif role == 2 %} <!-- 2表示自己是通讯 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '#</u></strong>' %}
          {% endif %}
          {% if role == 3 %} <!-- 3为所指导学生 -->
            {% assign name = name | append: '†' %}
          {% elsif role == 4 %} <!-- 4为其余通讯作者 -->
            {% assign name = name | append: '#' %}
          <!-- 其余如0为普通作者 -->
          {% endif %}
<!-- 加逗号和and -->
          {% if forloop.index == boundary %}
            {% assign name_list = name | append: ', and' %}
          {% else %}
            {% assign name_list = name | append: ',' %}
            <!-- assign name_list = name -->
          {% endif %}
          <!-- 输出名字 -->
          {{name_list}}
        {% endfor %}
<!-- 输出标题 -->
        {% assign title = pub.Title | prepend: '"' %}
        {% assign title = title | append: '",' %}
        {{title}}
<!-- 输出文章来源 -->
        {% assign pubsource = pub.PubSource | prepend: '<i>' %}
        {% assign pubsource = pubsource | append: '</i>,' %}
        {{pubsource}}
<!-- 文章评级 -->
        {% assign rank = pub.Rank | prepend: '(<code>' %}
        {% assign rank = rank | append: '</code>),' %}
        {{rank}}
<!-- （若有）期刊卷号 -->
        {% if pub.Volumn %}
        {% assign vol = pub.Volumn | prepend: 'vol. ' %}
        {% assign vol = vol | append: ',' %}
        {{vol}}
        {% endif%}
<!-- （若有）期刊期号 -->
        {% if pub.No %}
        {% assign no = pub.No | prepend: 'no. ' %}
        {% assign no = no | append: ',' %}
        {{no}}
        {% endif%}
<!-- （若有）页码 -->
        {% if pub.Page %}
        {% assign page = pub.Page | prepend: 'pp. ' %}
        {% assign page = page | append: ',' %}
        {{page}}
        {% endif%}
<!-- （若有）输出地点 -->
        {% assign location = pub.Location | append: ',' %}
        {{location}}
<!-- 输出时间 -->
        {% assign year = pub.Year | append: '.' %}
        {{year}}
<!-- （若有）见刊链接 -->
        {% if pub.Link %}
          [ <a href="{{pub.Link}}">Link</a> 
          <!-- （若有arXiv） -->
          {% if pub.Arxiv %}
          | <a href="{{pub.Arxiv}}">arXiv</a> 
          {% endif %}
          ]
        {% elsif pub.Arxiv %} <!-- arxiv链接 -->
          [ <a href="{{pub.Arxiv}}">arXiv</a> ]
        {% endif%}
    </li>
  {% endfor %}
</ol>
</div>

<div id="journal" style="display: none">
{% assign journal_list = site.data.pub_journal %}
<ol reversed="reversed">
  {% for pub in journal_list %}
    <li>
<!-- 输出作者名单 -->
        {% for author in pub.Authors %}
          <!-- {% assign name_list = '' %} -->
          {% assign name = author[0] %}
          {% assign role = author[1] %} 
          <!-- 记录作者数组边界 -->
          {% assign boundary = forloop.length|minus:1 %} <!-- forloop.length是遍历的长度 -->
          <!-- # 角色： 0代表普通作者，1表示自己非通讯，2表示自己为通讯，3表示所指导学生（加粗），4表示非自己的通讯作者# -->
          {% if role == 1 %} <!-- 1表示自己非通讯身份 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '</u></strong>' %}
          {% elsif role == 2 %} <!-- 2表示自己是通讯 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '#</u></strong>' %}
          {% endif %}
          {% if role == 3 %} <!-- 3为所指导学生 -->
            {% assign name = name | append: '†' %}
          {% elsif role == 4 %} <!-- 4为其余通讯作者 -->
            {% assign name = name | append: '#' %}
          <!-- 其余如0为普通作者 -->
          {% endif %}
<!-- 加逗号和and -->
          {% if forloop.index == boundary %}
            {% assign name_list = name | append: ', and' %}
          {% else %}
            {% assign name_list = name | append: ',' %}
            <!-- assign name_list = name -->
          {% endif %}
          <!-- 输出名字 -->
          {{name_list}}
        {% endfor %}
<!-- 输出标题 -->
        {% assign title = pub.Title | prepend: '"' %}
        {% assign title = title | append: '",' %}
        {{title}}
<!-- 输出文章来源 -->
        {% assign pubsource = pub.PubSource | prepend: '<i>' %}
        {% assign pubsource = pubsource | append: '</i>,' %}
        {{pubsource}}
<!-- 文章评级 -->
        {% assign rank = pub.Rank | prepend: '(<code>' %}
        {% assign rank = rank | append: '</code>),' %}
        {{rank}}
<!-- （若有）期刊卷号 -->
        {% if pub.Volumn %}
        {% assign vol = pub.Volumn | prepend: 'vol. ' %}
        {% assign vol = vol | append: ',' %}
        {{vol}}
        {% endif%}
<!-- （若有）期刊期号 -->
        {% if pub.No %}
        {% assign no = pub.No | prepend: 'no. ' %}
        {% assign no = no | append: ',' %}
        {{no}}
        {% endif%}
<!-- （若有）页码 -->
        {% if pub.Page %}
        {% assign page = pub.Page | prepend: 'pp. ' %}
        {% assign page = page | append: ',' %}
        {{page}}
        {% endif%}
<!-- （若有）输出地点 -->
        {% assign location = pub.Location | append: ',' %}
        {{location}}
<!-- 输出时间 -->
        {% assign year = pub.Year | append: '.' %}
        {{year}}
<!-- （若有）见刊链接 -->
        {% if pub.Link %}
          [ <a href="{{pub.Link}}">Link</a> 
          <!-- （若有arXiv） -->
          {% if pub.Arxiv %}
          | <a href="{{pub.Arxiv}}">arXiv</a> 
          {% endif %}
          ]
        {% elsif pub.Arxiv %} <!-- arxiv链接 -->
          [ <a href="{{pub.Arxiv}}">arXiv</a> ]
        {% endif%}
    </li>
  {% endfor %}
</ol>
</div>

<div id="patent" style="display: none">
{% assign patent_list = site.data.pub_patent %}
<ol reversed="reversed">
  {% for pub in patent_list %}
    <li>
<!-- 输出作者名单 -->
        {% for author in pub.Authors %}
          <!-- {% assign name_list = '' %} -->
          {% assign name = author[0] %}
          {% assign role = author[1] %} 
          <!-- 记录作者数组边界 -->
          {% assign boundary = forloop.length|minus:1 %} <!-- forloop.length是遍历的长度 -->
          <!-- # 角色： 0代表普通作者，1表示自己非通讯，2表示自己为通讯，3表示所指导学生（加粗），4表示非自己的通讯作者# -->
          {% if role == 1 %} <!-- 1表示自己非通讯身份 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '</u></strong>' %}
          {% elsif role == 2 %} <!-- 2表示自己是通讯 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '#</u></strong>' %}
          {% endif %}
          {% if role == 3 %} <!-- 3为所指导学生 -->
            {% assign name = name | append: '†' %}
          {% elsif role == 4 %} <!-- 4为其余通讯作者 -->
            {% assign name = name | append: '#' %}
          <!-- 其余如0为普通作者 -->
          {% endif %}
<!-- 加逗号和and -->
          {% if forloop.index == boundary %}
            {% assign name_list = name | append: ', and' %}
          {% else %}
            {% assign name_list = name | append: ',' %}
            <!-- assign name_list = name -->
          {% endif %}
          <!-- 输出名字 -->
          {{name_list}}
        {% endfor %}
<!-- 输出标题 -->
        {% assign title = pub.Title | prepend: '"' %}
        {% assign title = title | append: '",' %}
        {{title}}
<!-- （若有）输出所属国别 -->
        {% if pub.Country %}
        {% assign country = pub.Country | prepend: '' %}
        {% assign country = country | append: ' Patent,' %}
        {{country}}
        {% endif%}
<!-- （若有）输出证书编号 -->
        {% if pub.CertificateNo %}
        {% assign no = pub.CertificateNo | prepend: '<i>No. ' %}
        {% assign no = no | append: '</i>,' %}
        {{no}}
        {% endif %}
<!-- （若有）处理状态 -->
        {% if pub.Status %}
        {{pub.Status}}
        {% endif %}
<!-- （若有）日期 -->
        {% if pub.Date %}
        {% assign date = pub.Date | append: '.' %}
        {{date}}
        {% endif %}
<!-- （若有）备注信息 -->
        {% if pub.Remarks %}
        {% assign remarks = pub.Remarks | prepend: '<u>(' %}
        {% assign remarks = remarks | append: ')</u>' %}
        {{remarks}}
        {% endif %}
    </li>
  {% endfor %}
</ol>
<!-- 1. Wang, J., **Yu, D**. 2023. A method and system of permissioned blockchain for agricultural product traceability. CN Patent Application, filed June 2023. Pending. (*First student author)
1. Wang, J., **Yu, D**. 2023. A method to identify malicious nodes in sharding permissioned blockchain. CN Patent Application, filed June 2023. Pending. (*First student author)
2. Wang, J., Jiang, W., **Yu, D**. 2023. A storage method based on linear encoding for blockchain. CN Patent Application, filed July 2023. Pending. (*Second student author) -->
</div>

<div id="copyright" style="display: none">
{% assign copyright_list = site.data.pub_copyright %}
<ol reversed="reversed">
  {% for pub in copyright_list %}
    <li>
<!-- 输出作者名单 -->
        {% for author in pub.Authors %}
          <!-- {% assign name_list = '' %} -->
          {% assign name = author[0] %}
          {% assign role = author[1] %} 
          <!-- 记录作者数组边界 -->
          {% assign boundary = forloop.length|minus:1 %} <!-- forloop.length是遍历的长度 -->
          <!-- # 角色： 0代表普通作者，1表示自己非通讯，2表示自己为通讯，3表示所指导学生（加粗），4表示非自己的通讯作者# -->
          {% if role == 1 %} <!-- 1表示自己非通讯身份 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '</u></strong>' %}
          {% elsif role == 2 %} <!-- 2表示自己是通讯 -->
            {% assign name = name | prepend: '<strong><u>' %}
            {% assign name = name | append: '#</u></strong>' %}
          {% endif %}
          {% if role == 3 %} <!-- 3为所指导学生 -->
            {% assign name = name | append: '†' %}
          {% elsif role == 4 %} <!-- 4为其余通讯作者 -->
            {% assign name = name | append: '#' %}
          <!-- 其余如0为普通作者 -->
          {% endif %}
<!-- 加逗号和and -->
          {% if forloop.index == boundary %}
            {% assign name_list = name | append: ', and' %}
          {% else %}
            {% assign name_list = name | append: ',' %}
            <!-- assign name_list = name -->
          {% endif %}
          <!-- 输出名字 -->
          {{name_list}}
        {% endfor %}
<!-- 输出标题 -->
        {% assign title = pub.Title | prepend: '"' %}
        {% assign title = title | append: '",' %}
        {{title}}
<!-- 输出证书编号 -->
        {% assign no = pub.CertificateNo | prepend: '<i>No. ' %}
        {% assign no = no | append: '</i>,' %}
        {{no}}
<!-- （若有）处理状态 -->
        {% if pub.Status %}
        {{pub.Status}}
        {% endif%}
<!-- 日期 -->
        {% if pub.Date %}
        {% assign date = pub.Date | append: '.' %}
        {{date}}
        {% endif%}
    </li>
  {% endfor %}
</ol>
</div>