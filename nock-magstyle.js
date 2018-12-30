//<![CDATA[
//Pager
$(document).ready(function(){
var olderLink = $(&quot;a.blog-pager-older-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-older-link&quot;).load(olderLink+&quot; .post-title:first&quot;, function() {
var olderLinkTitle = $(&quot;a.blog-pager-older-link&quot;).text();
$(&quot;a.blog-pager-older-link&quot;).text(olderLinkTitle);//rgt
});
var newerLink = $(&quot;a.blog-pager-newer-link&quot;).attr(&quot;href&quot;);
$(&quot;a.blog-pager-newer-link&quot;).load(newerLink+&quot; .post-title:first&quot;, function() {
var newerLinkTitle = $(&quot;a.blog-pager-newer-link:first&quot;).text();
$(&quot;a.blog-pager-newer-link&quot;).text(newerLinkTitle);
});
});
//Pre Auto Selection
$(&#39;i[rel=&quot;pre&quot;]&#39;).replaceWith(function() {
    return $(&#39;<pre><code>&#39; + $(this).html() + &#39;</code></pre>&#39;);
});
var pres = document.getElementsByTagName(&quot;pre&quot;);
for (var i = 0; i &lt; pres.length; i++) {
  pres[i].addEventListener(&quot;dblclick&quot;, function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}

//Pre Line Number
$(&#39;pre&#39;).attr(&#39;class&#39;, &#39;line-numbers&#39;);
Prism.hooks.add(&quot;after-highlight&quot;,function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf(&quot;line-numbers&quot;)===-1){return}var n=1+e.code.split(&quot;\n&quot;).length;var r;lines=new Array(n);lines=lines.join(&quot;<span/>&quot;);r=document.createElement(&quot;span&quot;);r.className=&quot;line-numbers-rows&quot;;r.innerHTML=lines;if(t.hasAttribute(&quot;data-start&quot;)){t.style.counterReset=&quot;linenumber &quot;+(parseInt(t.getAttribute(&quot;data-start&quot;),10)-1)}e.element.appendChild(r)})

//Related Post Thumb
$(&quot;ul#relpost_img_sum li img&quot;).each(function () {    $(this).attr(&quot;src&quot;, $(this).attr(&quot;src&quot;).replace(/\/s[0-9]+(\-c)?\//, &quot;/w150-h120-c/&quot;)) });

//Block Link Comments
function blockLinks(parentID, children) {
    var parent = document.getElementById(parentID),
        content = parent.getElementsByTagName(children);
    for(var i = 0; i < content.length; i++) {
        if(content[i].innerHTML.indexOf('</a>') !== -1) {
            content[i].innerHTML = "No more <span style='background-color:rgba(255,255,255,0.3);color:#fff;padding:4px 8px;border-radius:3px'><b>live link</b></span> in this comments field";
            content[i].className = "spammer-detected";
        }
    }
}
blockLinks('comment_block', 'p');

//Pre Comments Box
function cdClear() {
    var wtarea = document.getElementById('codes');
    wtarea.value = '';
    wtarea.focus();
    document.getElementById('cvrt').disabled = false;
}
function cdConvert() {
    var ctarea = document.getElementById('codes'),
        cv = ctarea.value,
        opt1 = document.getElementById('opt1'),
        opt2 = document.getElementById('opt2'),
        opt3 = document.getElementById('opt3'),
        opt4 = document.getElementById('opt4'),
        opt5 = document.getElementById('opt5');
    cv = cv.replace(/\t/g, "    ");
    if (opt1.checked) cv = cv.replace(/&/g, "&amp;");
    if (opt2.checked) cv = cv.replace(/'/g, "&#039;");
    if (opt3.checked) cv = cv.replace(/"/g, "&quot;");
    if (opt4.checked) cv = cv.replace(/</g, "&lt;");
    if (opt5.checked) cv = cv.replace(/>/g, "&gt;");
    if (cv.lastIndexOf('\n') != -1 || cv.length > 40) {
        cv = cv.replace(/^/, "<i rel=\"pre\">");
    } else {
        cv = cv.replace(/^/, "<i rel=\"code\">");
    }
    cv = cv.replace(/$/, "</i>");
    ctarea.value = cv;
    ctarea.focus();
    ctarea.select();
};
//]]>
//Disqus
var disqus_shortname = &quot;nockdock&quot;;
!function(){var e=document.createElement(&quot;script&quot;);e.type=&quot;text/javascript&quot;,e.async=!0,e.src=&quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_index.js&quot;,(document.getElementsByTagName(&quot;head&quot;)[0]||document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(e)}();
!function(){var e=document.createElement(&quot;script&quot;);e.type=&quot;text/javascript&quot;,e.async=!0,e.src=&quot;//&quot;+disqus_shortname+&quot;.disqus.com/blogger_item.js&quot;,(document.getElementsByTagName(&quot;head&quot;)[0]||document.getElementsByTagName(&quot;body&quot;)[0]).appendChild(e)}();
//<![CDATA[
function load_Comments(){var e=document.getElementById("disqusshow");e.style.display="none";var t="nockdock";!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://"+t+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}()}
//]]>
